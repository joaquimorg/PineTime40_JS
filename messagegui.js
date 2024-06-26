// Will calling Pinetime.load reset everything? if false, we fast load
function loadWillReset() {
  return Pinetime.load === load;
    /* FIXME: Maybe we need a better way of deciding if an app will
    be fast loaded
    Pinetime.load could return a bool (as the load doesn't happen immediately). */
}


/**
 * Listener set up in boot.js, calls into here to keep boot.js short
 */
exports.listener = function(type, msg) {
  // Default handler: Launch the GUI for all unhandled messages (except music if disabled in settings)
  if (msg.handled || (global.__FILE__ && __FILE__.startsWith('messagegui.'))) return; // already handled or app open

  // if no new messages now, make sure we don't load the messages app
  if (exports.messageTimeout && !msg.new && require("messages").status(msg) !== "new") {
    clearTimeout(exports.messageTimeout);
    delete exports.messageTimeout;
  }
  if (msg.t==="remove") {
    // we won't open the UI for removed messages, so make sure to delete it from flash
    if (Pinetime.MESSAGES) {
      // we were waiting for exports.messageTimeout
      require("messages").apply(msg, Pinetime.MESSAGES);
      if (!Pinetime.MESSAGES.length) delete Pinetime.MESSAGES;
    }
    return require("messages").save(msg); // always write removal to flash
  }

  //const appSettings = require("Storage").readJSON("messages.settings.json", 1) || {};
  let loadMessages = true;
  /*if (type==="music") {
    if (Pinetime.CLOCK && msg.state && msg.title && appSettings.openMusic) loadMessages = true;
    else return;
  }*/
  // Write the message to Pinetime.MESSAGES. We'll deal with it in messageTimeout below
  if (!Pinetime.MESSAGES) Pinetime.MESSAGES = [];
  require("messages").apply(msg, Pinetime.MESSAGES);
  if (!Pinetime.MESSAGES.length) delete Pinetime.MESSAGES;
  const saveToFlash = () => {
    // save messages from RAM to flash if we decide not to launch app
    // We apply all of Pinetime.MESSAGES here in one write
    if (!Pinetime.MESSAGES || !Pinetime.MESSAGES.length) return;
    let messages = require("messages").getMessages(msg);
    (Pinetime.MESSAGES || []).forEach(m => require("messages").apply(m, messages));
    require("messages").write(messages);
    delete Pinetime.MESSAGES;
  };
  msg.handled = true;
  if ((msg.t!=="add" || !msg.new) && (type!=="music")) // music always has t:"modify"
    return saveToFlash();

  const quiet = false;
  const unlockWatch = true;
  // don't auto-open messages in quiet mode if quietNoAutOpn is true
  /*if ((quiet && appSettings.quietNoAutOpn) || appSettings.noAutOpn)
    loadMessages = false;*/
  // after a delay load the app, to ensure we have all the messages
  if (exports.messageTimeout) clearTimeout(exports.messageTimeout);
  exports.messageTimeout = setTimeout(function() {
    delete exports.messageTimeout;
    if (!Pinetime.MESSAGES) return; // message was removed during the delay
    if (type!=="music") {
      if (!loadMessages) {
        // not opening the app, just buzz
        saveToFlash();
        return require("messages").buzz(msg.src);
      }
      if (!quiet && unlockWatch) {
        Pinetime.setLCDPower(true); // turn screen on
      }
    }
    // if loading the gui would reload everything, we must save our messages
    //if (loadWillReset()) saveToFlash();
    exports.open(msg);
  }, 500);
};

/**
 * Launch GUI app with given message
 * @param {object} msg
 */
exports.open = function(msg) {
  if (msg && msg.id) {
    // force a display by setting it as new and ensuring it ends up at the beginning of messages list
    msg.new = 1;
    if (loadWillReset()) {
      // no fast loading: store message to load in flash - `msg` will be put in first
      require("messages").save(msg, {force: 1});
    } else {
      // fast load - putting it at the end of Pinetime.MESSAGES ensures it goes at the start of messages list
      if (!Pinetime.MESSAGES) Pinetime.MESSAGES=[];
      Pinetime.MESSAGES = Pinetime.MESSAGES.filter(m => m.id!=msg.id);
      Pinetime.MESSAGES.push(msg); // putting at the
    }
  }

  //Pinetime.load("messagegui.app.js");
  //eval(require('Storage').read('messagegui.app.js'));
  Pinetime.emit("showmessage");
  //console.log(msg);
};
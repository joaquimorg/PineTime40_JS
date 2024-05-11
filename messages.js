exports.music = {};
/**
 * Emit "message" event with appropriate type from Pinetime
 * @param {object} msg
 */
function emit(msg) {
  let type = "text";
  if (["call", "music", "map"].includes(msg.id)) type = msg.id;
  if (msg.src && msg.src.toLowerCase().startsWith("alarm")) type = "alarm";
  Pinetime.emit("message", type, msg);
  //console.log(msg);
}

/* Push a new message onto messages queue, event is:
  {t:"add",id:int, src,title,subject,body,sender,tel, important:bool, new:bool}
  {t:"add",id:int, id:"music", state, artist, track, etc} // add new
  {t:"remove",id:int} // remove
  {t:"modify",id:int, title:string} // modified
*/
exports.pushMessage = function(event) {
  // now modify/delete as appropriate
  if (event.t==="remove") {
    if (event.id==="music") exports.music = {};
  } else { // add/modify
    if (event.t==="add") {
      if (event.new===undefined) event.new = true; // Assume it should be new
    } else if (event.t==="modify") {
      const old = exports.getMessages().find(m => m.id===event.id);
      if (old) event = Object.assign(old, event);
    }

    // combine musicinfo and musicstate events
    if (event.id==="music") {
      if (event.state==="play") event.new = true; // new track, or playback (re)started
      event = Object.assign(exports.music, event);
    }
  }
  // reset state (just in case)
  delete event.handled;
  delete event.saved;
  emit(event);
};

/**
 * Apply incoming event to array of messages
 *
 * @param {object} event Event to apply
 * @param {array} messages Array of messages, *will be modified in-place*
 * @return {array} Modified messages array
 */
exports.apply = function(event, messages) {
  if (!event || !event.id) return messages;
  const mIdx = messages.findIndex(m => m.id===event.id);
  if (event.t==="remove") {
    if (mIdx<0) return messages; // already gone -> nothing to do
    messages.splice(mIdx, 1);
  } else if (event.t==="add") {
    if (mIdx>=0) messages.splice(mIdx, 1); // duplicate ID! erase previous version
    messages.unshift(event); // add at the beginning
  } else if (event.t==="modify") {
    if (mIdx>=0) messages[mIdx] = Object.assign(messages[mIdx], event);
    else messages.unshift(event);
  }
  return messages;
};

/**
 * Accept a call (or other acceptable event)
 * @param {object} msg
 */
exports.accept = function(msg) {
  if (msg.positive) Pinetime.messageResponse(msg, true);
};

/**
 * Dismiss a message (if applicable), and erase it from flash
 * Emits a "message" event with t="remove", only if message existed
 *
 * @param {object} msg
 */
exports.dismiss = function(msg) {
  if (msg.negative) Pinetime.messageResponse(msg, false);
  let messages = exports.getMessages();
  const mIdx = messages.findIndex(m=>m.id===msg.id);
  if (mIdx<0) return;
  messages.splice(mIdx, 1);
  if (msg.t==="remove") return; // already removed, don't re-emit
  msg.t = "remove";
  emit(msg); // emit t="remove", so e.g. widgets know to update
};


/**
 * Erase all messages
 */
exports.clearAll = function() {
  Pinetime.emit("message", "clearAll", {});
};

/**
 * Get saved messages
 *
 * Optionally pass in a message to apply to the list, this is for event handlers:
 * By passing the message from the event, you can make sure the list is up-to-date,
 * even if the message has not been saved (yet)
 *
 * Example:
 *     Pinetime.on("message", (type, msg) =>  {
 *       console.log("All messages:", require("messages").getMessages(msg));
 *     });
 *
 * @param {object} [withMessage] Apply this event to messages
 * @returns {array} All messages
 */
exports.getMessages = function(withMessage) {
  let messages = global.MESSAGES;
  messages = Array.isArray(messages) ? messages : []; // make sure we always return an array
  if (withMessage && withMessage.id) exports.apply(withMessage, messages);
  return messages;
};

/**
 * Check if there are any messages
 *
 * @param {object} [withMessage] Apply this event to messages, see getMessages
 * @returns {string} "new"/"old"/"none"
 */
exports.status = function(withMessage) {
  try {
    let status = "none";
    for(const m of exports.getMessages(withMessage)) {
      if (["music", "map"].includes(m.id)) continue;
      if (m.new) return "new";
      status = "old";
    }
    return status;
  } catch(e) {
    return "none"; // don't bother callers with errors
  }
};


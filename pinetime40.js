//{
    Pinetime.setLCDPower(true);

    let lv = LVGL;

    let lv_scr = lv.lv_scr_act();
    lv.lv_obj_clean(lv_scr);

    let active_screen;

    let ui_Clock01_Panel;
    let ui_Clock01_Minute;
    let ui_Clock01_Hour;
    let ui_Clock01_Seconds;
    let ui_Clock01_DatePanel;
    let ui_Clock01_DateDay;
    let ui_Clock01_DateDayName;
    let ui_Clock01_BlePanel;
    let ui_Clock01_BleIcon;
    let ui_Clock01_PwrPanel;
    let ui_Clock01_imgPower;
    let ui_Clock01_Power;

    let ui_Config_Panel;
    let ui_Config_Actions_Panel;
    let ui_Config_Button3;
    let ui_Config_Label2;
    let ui_Config_Button6;
    let ui_Config_Label8;
    let ui_BottomInfo;
    let ui_Config_Time;
    let ui_ConfigBatt;

    let ui_Backlight_Panel3;
    let ui_Backlight_Label2;
    let ui_BacklightIcon;
    let ui_Panel5;
    let ui_Backlight_Value;
    let ui_Slider1;

    let ui_Messages_Panel;
    let ui_MsgNoNotif;
    let ui_PanelListNotf;
    let ui_NotifHeadTitle;
    let ui_NotifHeadTime;
    let ui_PanelNotif;
    let ui_NotifHeader;
    let ui_Messages_Info2;
    let ui_Notification_Icon;
    let ui_Messages_Info1;


    let ui_Steps_Panel;
    let ui_StepsToday;
    let ui_StepsActivity;
    let ui_Steps_Value;
    let ui_ImageW1;
    let ui_PanelCount;

    let ui_NotificationView;
    let ui_Notification_Panel;
    let ui_IconPanel;
    let ui_Type;
    let ui_NotificationIcon;
    let ui_PanelMsg;
    let ui_PanelMessage;
    let ui_Title;
    let ui_Body;
    let ui_PanelFooter;
    let ui_NotificationTime;

    let ui_Charging;
    let ui_ChargingPanel;
    let ui_ChargingLabel;
    let ui_BattStatusVolt;
    let ui_ChargingStatus;
    let ui_BattLvl;
    let ui_BattPerc;


    let notif = [];

    let load_screen = function( current_screen, old_screen, anim ) {
      if ( active_screen != current_screen ) {
        lv.lv_scr_load_anim(current_screen, anim, 400, 0, false);
        active_screen = current_screen;
      }
    };

    let MainTileView = lv.lv_tileview_create(null);
    lv.lv_obj_set_scrollbar_mode(MainTileView, lv.LV_SCROLLBAR_MODE_OFF);
    lv.lv_obj_add_flag(MainTileView, lv.LV_OBJ_FLAG_SCROLL_ELASTIC | lv.LV_OBJ_FLAG_SCROLL_MOMENTUM);
    lv.lv_obj_set_style_bg_color(MainTileView, lv.lv_color_hex(0x000000), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);

    // CB

    let slider_event_cb = function(code, user) {
      let value = lv.lv_slider_get_value(ui_Slider1);
      lv.lv_label_set_text(ui_Backlight_Value, value + "%");
      if ( value > 2 ) {
        Pinetime.setLCDBrightness(value / 100);
      }
    };

    let ui_event_Backlight = function(code, user) {
        //console.log('code ' + code);
        if (lv.lv_indev_get_gesture_dir(lv.lv_indev_get_act()) == lv.LV_DIR_RIGHT) {

            lv.lv_indev_wait_release(lv.lv_indev_get_act());

            load_screen( MainTileView, ui_Backlight_Panel3, lv.LV_SCR_LOAD_ANIM_MOVE_RIGHT );
            //console.log('MEM Free : ' + process.memory().free);
        }
    };

    let ui_event_ViewNotif = function(code, user) {
      //console.log('code ' + code);
      if (lv.lv_indev_get_gesture_dir(lv.lv_indev_get_act()) == lv.LV_DIR_RIGHT) {

          lv.lv_indev_wait_release(lv.lv_indev_get_act());

          //lv.lv_obj_scroll_to_y(ui_PanelNotif, 0, lv.LV_ANIM_ON);

          if ( lv.lv_tileview_get_tile_act(MainTileView) != tileMotfication ) {
            lv.lv_obj_set_tile_id(MainTileView, 0, 0, lv.LV_ANIM_OFF);
          }

          load_screen( MainTileView, ui_NotificationView, lv.LV_SCR_LOAD_ANIM_MOVE_RIGHT );
          //console.log('MEM Free : ' + process.memory().free);
      }
    };

    let update_notification = function(msgn) {

      if (msgn.src) {
        lv.lv_label_set_text(ui_Type, msgn.src);
      } else {
        lv.lv_label_set_text(ui_Type, "Notification");
      }
      const mtitle = msgn.title;
      const mbody = msgn.body;
      lv.lv_label_set_text(ui_Title, mtitle);
      lv.lv_label_set_text(ui_Body, mbody);
      lv.lv_obj_scroll_to_y(ui_PanelMessage, 0, lv.LV_ANIM_OFF);
      lv.lv_label_set_text(ui_NotificationTime, msgn.date);
    };

    let ui_event_Config_Button3 = function(code, bt_id) {
      if ( bt_id == 1 ) {
        load_screen( ui_Backlight_Panel3, MainTileView, lv.LV_SCR_LOAD_ANIM_MOVE_LEFT );
      } else if ( bt_id == 2 ) {
        load_screen( ui_Charging, MainTileView, lv.LV_SCR_LOAD_ANIM_MOVE_LEFT );
      }
      console.log('MEM Free : ' + process.memory().free);
    };

    // -- Main SCREENS --
    //

    let tileClock;
    let tileMotfication;
    let tileConfig;

    let tileSteps;


    let NotificationList = function () {
      tileMotfication = lv.lv_tileview_add_tile(MainTileView, 0, 0, lv.LV_DIR_BOTTOM);
      ui_Messages_Panel = lv.lv_obj_create(tileMotfication);
      eval(require('Storage').read('notification.scr.js'));
    };

    let Clock01 = function () {
      tileClock = lv.lv_tileview_add_tile(MainTileView, 0, 1, lv.LV_DIR_BOTTOM | lv.LV_DIR_TOP | lv.LV_DIR_RIGHT);
      ui_Clock01_Panel = lv.lv_obj_create(tileClock);
      eval(require('Storage').read('clock01.scr.js'));
      //lv.lv_obj_add_event_cb(ui_Clock01_Panel, ui_event_Config_Button3, lv.LV_EVENT_CLICKED, '123');
    };

    let Config = function () {
      tileConfig = lv.lv_tileview_add_tile(MainTileView, 0, 2, lv.LV_DIR_TOP);
      ui_Config_Panel = lv.lv_obj_create(tileConfig);
      eval(require('Storage').read('config.scr.js'));
    };

    let Steps = function() {
      tileSteps = lv.lv_tileview_add_tile(MainTileView, 1, 1, lv.LV_DIR_LEFT);
      eval(require('Storage').read('steps.scr.js'));
    };

    // ------------------------------------------------------------------------------------------------------------
    let Backlight = function () {
      ui_Backlight_Panel3 = lv.lv_obj_create(null);
      eval(require('Storage').read('backlight.scr.js'));
      lv.lv_obj_add_event_cb(ui_Backlight_Panel3, ui_event_Backlight, lv.LV_EVENT_GESTURE, null);
      lv.lv_obj_add_event_cb(ui_Slider1, slider_event_cb, lv.LV_EVENT_VALUE_CHANGED, null);
    };

    let ViewNotification = function () {
      ui_NotificationView = lv.lv_obj_create(null);
      eval(require('Storage').read('notif_view.scr.js'));
      lv.lv_obj_add_event_cb(ui_NotificationView, ui_event_ViewNotif, lv.LV_EVENT_GESTURE, null);
      //lv.lv_obj_add_event_cb(ui_Slider1, slider_event_cb, lv.LV_EVENT_VALUE_CHANGED, null);
      //load_screen( ui_NotificationView, MainTileView, lv.LV_SCR_LOAD_ANIM_MOVE_TOP );
    };

    let Charging = function () {
      ui_Charging = lv.lv_obj_create(null);
      eval(require('Storage').read('charging.scr.js'));
      lv.lv_obj_add_event_cb(ui_Charging, ui_event_Backlight, lv.LV_EVENT_GESTURE, null);
    };

    // ------------------------------------------------------------------------------------------------------------

    let cui_Notification = [3];
    let cui_NotifDate = [3];
    let cui_NotifTitle = [3];
    let cui_NotifType = [3];
    let cui_TypeIcon = [3];
    let cui_PanelType = [3];

    let update_msg_pos = function(msgpos) {
      //console.log(global.MESSAGES[msgpos]);
      const msrc = global.MESSAGES[msgpos].src;
      const mtitle = global.MESSAGES[msgpos].title;
      lv.lv_label_set_text(cui_NotifType[msgpos], msrc.slice(0, 13));
      lv.lv_label_set_text(cui_NotifTitle[msgpos], mtitle.slice(0, 31));
      lv.lv_label_set_text(cui_NotifDate[msgpos], global.MESSAGES[msgpos].date);
    };

    let update_msg_list = function() {
      for (let index = 0; index < 3; index++) {
        lv.lv_obj_add_flag( cui_Notification[index], lv.LV_OBJ_FLAG_HIDDEN);
      }

      //if (!global.MESSAGES) return;
      //console.log(global.MESSAGES);

      for (let index = 0; index < global.MESSAGES.length; index++) {
        if (index < 3) {
          //const element = global.MESSAGES[index];
          update_msg_pos(index);
          lv.lv_obj_clear_flag( cui_Notification[index], lv.LV_OBJ_FLAG_HIDDEN);
        }
      }
      lv.lv_obj_scroll_to_y(ui_PanelNotif, 240, lv.LV_ANIM_OFF);
    };

    let ui_event_ShowNotif = function(code, user) {

      let msgpos = user;

      lv.lv_indev_wait_release(lv.lv_indev_get_act());

      if ( code == lv.LV_EVENT_CLICKED ) {
        const msgn = global.MESSAGES[msgpos];
        update_notification(msgn);
        load_screen( ui_NotificationView, active_screen, lv.LV_SCR_LOAD_ANIM_MOVE_LEFT );

      } else if ( code == lv.LV_EVENT_LONG_PRESSED ) {
        //const msgn = global.MESSAGES[msgpos];
        //Pinetime.messageIgnore(msgn);
        //global.MESSAGES = removeElement(global.MESSAGES, msgpos);
        //Pinetime.emit("showmessage");
      }

    };

    let notification_create = function(panel_notif, msgpos) {
      cui_Notification[msgpos] = lv.lv_obj_create(panel_notif);
      eval(require('Storage').read('notific_list.scr.js'));
      lv.lv_obj_add_flag( cui_Notification[msgpos], lv.LV_OBJ_FLAG_HIDDEN);

      lv.lv_obj_add_event_cb(cui_Notification[msgpos], ui_event_ShowNotif, lv.LV_EVENT_CLICKED, msgpos);
      lv.lv_obj_add_event_cb(cui_Notification[msgpos], ui_event_ShowNotif, lv.LV_EVENT_LONG_PRESSED, msgpos);

    };


    NotificationList();
    ViewNotification();
    Config();
    Clock01();
    Steps();

    for (let index = 0; index < 3; index++) {
      notification_create(ui_PanelNotif, index);
    }

    Backlight();
    Charging();

    lv.lv_obj_set_tile_id(MainTileView, 0, 1, lv.LV_ANIM_OFF);

    let date = new Date();
    let drawTimeout;
    let drawSecTimeout;

    let drawClock = function() {
      date = new Date();

      lv.lv_label_set_text(ui_Clock01_DateDay, date.getDate().toString().padStart(2,"0"));
      lv.lv_label_set_text(ui_Clock01_DateDayName, require("locale").dow(date, 1).toUpperCase());

      lv.lv_label_set_text(ui_Clock01_Minute, date.getMinutes().toString().padStart(2,"0"));
      lv.lv_label_set_text(ui_Clock01_Hour, date.getHours().toString().padStart(2,"0"));

      lv.lv_label_set_text(ui_Config_Time, date.getHours().toString().padStart(2,"0") + ":" + date.getMinutes().toString().padStart(2,"0"));
      lv.lv_label_set_text(ui_NotifHeadTime, date.getHours().toString().padStart(2,"0") + ":" + date.getMinutes().toString().padStart(2,"0"));

      let steps = Pinetime.getStepCount().toString();
      lv.lv_label_set_text(ui_Steps_Value, steps);

      let batt = E.getBattery().toString() + " %";
      lv.lv_label_set_text(ui_ConfigBatt, batt);
      lv.lv_label_set_text(ui_Clock01_Power, batt);      

    };

    let drawSeconds = function() {
      date = new Date();
      lv.lv_bar_set_value(ui_Clock01_Seconds, date.getSeconds(), lv.LV_ANIM_ON);
      if ( active_screen == ui_Charging ) {
        let banim = 0;
        let bperc = E.getBattery();
        if (Pinetime.isCharging()) {
          if ( date.getSeconds() % 2 == 0) banim = 5;
        }
        lv.lv_arc_set_value(ui_BattLvl, bperc - banim);

        lv.lv_label_set_text(ui_BattStatusVolt, Pinetime.battVoltage().toFixed(2) + " V");
        lv.lv_label_set_text(ui_BattPerc, bperc.toString() + "%");
      }
    };

    let updateSeconds = function() {
      if (Pinetime.isLCDOn()) {
        drawSeconds();
      }

      if (drawSecTimeout) clearTimeout(drawSecTimeout);
      drawSecTimeout = setTimeout(function() {
        drawSecTimeout = undefined;
        updateSeconds();
      }, 1000);

    };

    let updateClock = function() {
      if (Pinetime.isLCDOn()) {
        drawClock();
      }
      if (drawTimeout) clearTimeout(drawTimeout);
      drawTimeout = setTimeout(function() {
        drawTimeout = undefined;
        updateClock();
      }, 30000 - (Date.now() % 30000));

    };

    updateSeconds();
    updateClock();

    NRF.on('connect', function(addr) {
      Pinetime.setLCDPower(true);
      drawClock();
      lv.lv_img_set_src(ui_Clock01_BleIcon, "F:bluetooth-on-22.bin");
    });

    NRF.on('disconnect', function(reason) {
      lv.lv_img_set_src(ui_Clock01_BleIcon, "F:bluetooth-off-22.bin");
    });


    let go_to_clock = function() {
      if ( active_screen != MainTileView ) {
        lv.lv_disp_load_scr( MainTileView );
        active_screen = MainTileView;
      }
      if ( lv.lv_tileview_get_tile_act(MainTileView) != tileClock ) {
        lv.lv_obj_set_tile_id(MainTileView, 0, 1, lv.LV_ANIM_OFF);
      }
      if (drawSecTimeout) clearTimeout(drawSecTimeout);
      if (drawTimeout) clearTimeout(drawTimeout);
    };

    Pinetime.on('lcdPower', function(state) {
      if(!state) {
        go_to_clock();
      } else {
        updateSeconds();
        updateClock();
      }
    });

    Pinetime.on('step', function(steps) {
      lv.lv_label_set_text(ui_StepsActivity, "Walk");
      drawClock();
    });

    Pinetime.on('still', function(steps) {
      lv.lv_label_set_text(ui_StepsActivity, "Still");
      drawClock();
    });

    Pinetime.on('run', function(steps) {
      lv.lv_label_set_text(ui_StepsActivity, "Run");
      drawClock();
    });

    Pinetime.on('charging', function(charging) {
      Pinetime.setLCDPower(true);
      load_screen( ui_Charging, active_screen, lv.LV_SCR_LOAD_ANIM_MOVE_LEFT );
      if( charging ) {
        lv.lv_img_set_src(ui_Clock01_imgPower, "F:power-22.bin");
        lv.lv_label_set_text(ui_ChargingLabel,"Charging...");
      } else {
        lv.lv_img_set_src(ui_Clock01_imgPower, "F:battery-22.bin");
        lv.lv_label_set_text(ui_ChargingLabel,"Battery Status");
      }
    });

    Pinetime.on('showmessage', function() {

      if (global.MESSAGES) {

        //console.log(global.MESSAGES);

        const msgn = global.MESSAGES[0];

        //console.log(global.MESSAGES);

        if ( (msgn.t != "remove") && msgn.new) {
          Pinetime.buzz();
          Pinetime.setLCDPower(true);

          update_notification(msgn);

          if ( lv.lv_obj_has_flag(ui_PanelListNotf, lv.LV_OBJ_FLAG_HIDDEN) ) {
            lv.lv_obj_clear_flag( ui_PanelListNotf, lv.LV_OBJ_FLAG_HIDDEN);
            lv.lv_obj_add_flag( ui_MsgNoNotif, lv.LV_OBJ_FLAG_HIDDEN);
          }
          load_screen( ui_NotificationView, active_screen, lv.LV_SCR_LOAD_ANIM_MOVE_LEFT );
          global.MESSAGES[0].new = false;
        }

        update_msg_list();

      } else {
        if ( !lv.lv_obj_has_flag(ui_PanelListNotf, lv.LV_OBJ_FLAG_HIDDEN) ) {
          lv.lv_obj_add_flag( ui_PanelListNotf, lv.LV_OBJ_FLAG_HIDDEN);
          lv.lv_obj_clear_flag( ui_MsgNoNotif, lv.LV_OBJ_FLAG_HIDDEN);
          go_to_clock();
        }
      }

    });

    lv.lv_disp_load_scr( MainTileView );
    active_screen = MainTileView;

//}
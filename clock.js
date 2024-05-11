{
  Pinetime.setLCDPower(true);

  let lv = LVGL;

  // ---------------------------------------------------------------------------------------------------------------
  let lv_scr = lv.lv_scr_act();
  lv.lv_obj_clean(lv_scr);

  let tv = lv.lv_tileview_create(lv_scr);
  lv.lv_obj_set_scrollbar_mode(tv, lv.LV_SCROLLBAR_MODE_OFF);
  lv.lv_obj_add_flag(tv, lv.LV_OBJ_FLAG_SCROLL_ELASTIC | lv.LV_OBJ_FLAG_SCROLL_MOMENTUM);
  lv.lv_obj_set_style_bg_color(tv, lv.lv_color_hex(0x000000), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);

  // Clock Screen
  let tile1 = lv.lv_tileview_add_tile(tv, 0, 1, lv.LV_DIR_BOTTOM | lv.LV_DIR_TOP | lv.LV_DIR_LEFT | lv.LV_DIR_RIGHT);
  // Settings Screen
  let tile2 = lv.lv_tileview_add_tile(tv, 0, 2, lv.LV_DIR_BOTTOM | lv.LV_DIR_TOP | lv.LV_DIR_LEFT | lv.LV_DIR_RIGHT);
  // Notification Screen
  let tile3 = lv.lv_tileview_add_tile(tv, 0, 0, lv.LV_DIR_BOTTOM | lv.LV_DIR_TOP | lv.LV_DIR_LEFT | lv.LV_DIR_RIGHT);


  // ---------------------------------------------------------------------------------------------------------------
  // -- SCREENS Global vars
  //
  let ui_Clock02_Minute3;
  let ui_Clock02_Hour3;
  let ui_Clock02Seconds1;
  let ui_Clock02_Date8;
  let ui_Clock02_Date10;
  let ui_imgPower1;
  let ui_Clock02_Power3;
  let ui_lblWalk1;
  let ui_Clock02Ble3;


  // -- SCREENS --
  //
  let screen_1 = function () {
    let ui_Clock02_Panel3 = lv.lv_obj_create(tile1);
    lv.lv_obj_set_width(ui_Clock02_Panel3, 240);
    lv.lv_obj_set_height(ui_Clock02_Panel3, 240);
    lv.lv_obj_set_align(ui_Clock02_Panel3, lv.LV_ALIGN_CENTER);
    lv.lv_obj_clear_flag(ui_Clock02_Panel3, lv.LV_OBJ_FLAG_SCROLLABLE);      /// Flags
    lv.lv_obj_set_scrollbar_mode(ui_Clock02_Panel3, lv.LV_SCROLLBAR_MODE_OFF);
    lv.lv_obj_set_style_bg_opa(ui_Clock02_Panel3, 0, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_border_side(ui_Clock02_Panel3, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_left(ui_Clock02_Panel3, 0, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_right(ui_Clock02_Panel3, 0, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_top(ui_Clock02_Panel3, 0, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_bottom(ui_Clock02_Panel3, 0, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);

    ui_Clock02_Minute3 = lv.lv_label_create(ui_Clock02_Panel3);
    lv.lv_obj_set_x(ui_Clock02_Minute3, 74);
    lv.lv_obj_set_y(ui_Clock02_Minute3, 0);
    lv.lv_obj_set_align(ui_Clock02_Minute3, lv.LV_ALIGN_CENTER);
    lv.lv_label_set_text(ui_Clock02_Minute3, "00");
    lv.lv_obj_set_style_text_color(ui_Clock02_Minute3, lv.lv_color_hex(0x00BAD9), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_text_font(ui_Clock02_Minute3, lv.lv_font_Numbers64(), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);

    ui_Clock02_Hour3 = lv.lv_label_create(ui_Clock02_Panel3);
    lv.lv_obj_set_x(ui_Clock02_Hour3, -44);
    lv.lv_obj_set_y(ui_Clock02_Hour3, -21);
    lv.lv_obj_set_align(ui_Clock02_Hour3, lv.LV_ALIGN_CENTER);
    lv.lv_label_set_text(ui_Clock02_Hour3, "00");
    lv.lv_obj_set_style_text_font(ui_Clock02_Hour3, lv.lv_font_BigNumbers(), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);

    ui_Clock02Seconds1 = lv.lv_bar_create(ui_Clock02_Panel3);
    lv.lv_bar_set_range(ui_Clock02Seconds1, 0, 59);
    lv.lv_bar_set_value(ui_Clock02Seconds1, 30, lv.LV_ANIM_OFF);
    lv.lv_obj_set_width(ui_Clock02Seconds1, 201);
    lv.lv_obj_set_height(ui_Clock02Seconds1, 12);
    lv.lv_obj_set_x(ui_Clock02Seconds1, 0);
    lv.lv_obj_set_y(ui_Clock02Seconds1, 48);
    lv.lv_obj_set_align(ui_Clock02Seconds1, lv.LV_ALIGN_CENTER);

    lv.lv_obj_set_style_bg_color(ui_Clock02Seconds1, lv.lv_color_hex(0xF2FF49), lv.LV_PART_INDICATOR | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_bg_opa(ui_Clock02Seconds1, 255, lv.LV_PART_INDICATOR | lv.LV_STATE_DEFAULT);

    let ui_Clock02DatePanel3 = lv.lv_obj_create(ui_Clock02_Panel3);
    lv.lv_obj_set_width(ui_Clock02DatePanel3, 105);
    lv.lv_obj_set_height(ui_Clock02DatePanel3, 32);
    lv.lv_obj_set_x(ui_Clock02DatePanel3, -4);
    lv.lv_obj_set_y(ui_Clock02DatePanel3, 6);
    lv.lv_obj_set_align(ui_Clock02DatePanel3, lv.LV_ALIGN_TOP_RIGHT);
    lv.lv_obj_set_flex_flow(ui_Clock02DatePanel3, lv.LV_FLEX_FLOW_ROW);
    lv.lv_obj_set_flex_align(ui_Clock02DatePanel3, lv.LV_FLEX_ALIGN_SPACE_EVENLY, lv.LV_FLEX_ALIGN_CENTER, lv.LV_FLEX_ALIGN_CENTER);
    lv.lv_obj_clear_flag(ui_Clock02DatePanel3, lv.LV_OBJ_FLAG_SCROLLABLE);      /// Flags
    lv.lv_obj_set_style_radius(ui_Clock02DatePanel3, 15, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_bg_color(ui_Clock02DatePanel3, lv.lv_color_hex(0xFFFFFF), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_border_side(ui_Clock02DatePanel3, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_left(ui_Clock02DatePanel3, 2, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_right(ui_Clock02DatePanel3, 2, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_top(ui_Clock02DatePanel3, 0, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_bottom(ui_Clock02DatePanel3, 0, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);

    ui_Clock02_Date8 = lv.lv_label_create(ui_Clock02DatePanel3);
    lv.lv_obj_set_x(ui_Clock02_Date8, 10);
    lv.lv_obj_set_y(ui_Clock02_Date8, -5);
    lv.lv_label_set_text(ui_Clock02_Date8, "06");
    lv.lv_obj_set_style_text_color(ui_Clock02_Date8, lv.lv_color_hex(0x000000), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_text_font(ui_Clock02_Date8, lv.lv_font_OpenSans22Bold(), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);

    ui_Clock02_Date10 = lv.lv_label_create(ui_Clock02DatePanel3);
    lv.lv_obj_set_x(ui_Clock02_Date10, 10);
    lv.lv_obj_set_y(ui_Clock02_Date10, -5);
    lv.lv_label_set_text(ui_Clock02_Date10, "SUN");
    lv.lv_obj_set_style_text_color(ui_Clock02_Date10, lv.lv_color_hex(0x000000), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_text_font(ui_Clock02_Date10, lv.lv_font_OpenSans22Bold(), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);

    let ui_Clock02PwrPanel3 = lv.lv_obj_create(ui_Clock02_Panel3);
    lv.lv_obj_set_width(ui_Clock02PwrPanel3, 105);
    lv.lv_obj_set_height(ui_Clock02PwrPanel3, 32);
    lv.lv_obj_set_x(ui_Clock02PwrPanel3, 4);
    lv.lv_obj_set_y(ui_Clock02PwrPanel3, 6);
    lv.lv_obj_set_flex_flow(ui_Clock02PwrPanel3, lv.LV_FLEX_FLOW_ROW);
    lv.lv_obj_set_flex_align(ui_Clock02PwrPanel3, lv.LV_FLEX_ALIGN_SPACE_EVENLY, lv.LV_FLEX_ALIGN_CENTER, lv.LV_FLEX_ALIGN_CENTER);
    lv.lv_obj_clear_flag(ui_Clock02PwrPanel3, lv.LV_OBJ_FLAG_SCROLLABLE);      /// Flags
    lv.lv_obj_set_style_radius(ui_Clock02PwrPanel3, 15, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_bg_color(ui_Clock02PwrPanel3, lv.lv_color_hex(0x005308), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_border_side(ui_Clock02PwrPanel3, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_left(ui_Clock02PwrPanel3, 2, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_right(ui_Clock02PwrPanel3, 2, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_top(ui_Clock02PwrPanel3, 0, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_bottom(ui_Clock02PwrPanel3, 0, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);

    ui_imgPower1 = lv.lv_img_create(ui_Clock02PwrPanel3);
    lv.lv_img_set_src(ui_imgPower1, "F:battery-22.bin");

    ui_Clock02_Power3 = lv.lv_label_create(ui_Clock02PwrPanel3);
    lv.lv_obj_set_align(ui_Clock02_Power3, lv.LV_ALIGN_CENTER);
    lv.lv_label_set_text(ui_Clock02_Power3, "100 %");
    lv.lv_obj_set_style_text_color(ui_Clock02_Power3, lv.lv_color_hex(0xFFFFFF), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_text_font(ui_Clock02_Power3, lv.lv_font_OpenSans22Bold(), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);

    let ui_Clock02StepsPanel2 = lv.lv_obj_create(ui_Clock02_Panel3);
    lv.lv_obj_set_width(ui_Clock02StepsPanel2, 110);
    lv.lv_obj_set_height(ui_Clock02StepsPanel2, 32);
    lv.lv_obj_set_x(ui_Clock02StepsPanel2, 4);
    lv.lv_obj_set_y(ui_Clock02StepsPanel2, -6);
    lv.lv_obj_set_align(ui_Clock02StepsPanel2, lv.LV_ALIGN_BOTTOM_LEFT);
    lv.lv_obj_set_flex_flow(ui_Clock02StepsPanel2, lv.LV_FLEX_FLOW_ROW);
    lv.lv_obj_set_flex_align(ui_Clock02StepsPanel2, lv.LV_FLEX_ALIGN_SPACE_EVENLY, lv.LV_FLEX_ALIGN_CENTER, lv.LV_FLEX_ALIGN_CENTER);
    lv.lv_obj_clear_flag(ui_Clock02StepsPanel2, lv.LV_OBJ_FLAG_SCROLLABLE);      /// Flags
    lv.lv_obj_set_style_radius(ui_Clock02StepsPanel2, 15, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_bg_color(ui_Clock02StepsPanel2, lv.lv_color_hex(0x003CBD), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_border_side(ui_Clock02StepsPanel2, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_left(ui_Clock02StepsPanel2, 2, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_right(ui_Clock02StepsPanel2, 2, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_top(ui_Clock02StepsPanel2, 0, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_bottom(ui_Clock02StepsPanel2, 0, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);

    let ui_imgWalk1 = lv.lv_img_create(ui_Clock02StepsPanel2);
    lv.lv_img_set_src(ui_imgWalk1, "F:walking-22.bin");

    ui_lblWalk1 = lv.lv_label_create(ui_Clock02StepsPanel2);
    lv.lv_obj_set_align(ui_lblWalk1, lv.LV_ALIGN_CENTER);
    lv.lv_label_set_text(ui_lblWalk1, Pinetime.getStepCount().toString());

    let ui_Clock02HRPanel2 = lv.lv_obj_create(ui_Clock02_Panel3);
    lv.lv_obj_set_width(ui_Clock02HRPanel2, 100);
    lv.lv_obj_set_height(ui_Clock02HRPanel2, 32);
    lv.lv_obj_set_x(ui_Clock02HRPanel2, -4);
    lv.lv_obj_set_y(ui_Clock02HRPanel2, -6);
    lv.lv_obj_set_align(ui_Clock02HRPanel2, lv.LV_ALIGN_BOTTOM_RIGHT);
    lv.lv_obj_set_flex_flow(ui_Clock02HRPanel2, lv.LV_FLEX_FLOW_ROW);
    lv.lv_obj_set_flex_align(ui_Clock02HRPanel2, lv.LV_FLEX_ALIGN_SPACE_EVENLY, lv.LV_FLEX_ALIGN_CENTER, lv.LV_FLEX_ALIGN_CENTER);
    lv.lv_obj_clear_flag(ui_Clock02HRPanel2, lv.LV_OBJ_FLAG_SCROLLABLE);      /// Flags
    lv.lv_obj_set_style_radius(ui_Clock02HRPanel2, 15, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_bg_color(ui_Clock02HRPanel2, lv.lv_color_hex(0xB40000), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_border_side(ui_Clock02HRPanel2, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_left(ui_Clock02HRPanel2, 2, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_right(ui_Clock02HRPanel2, 2, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_top(ui_Clock02HRPanel2, 0, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_bottom(ui_Clock02HRPanel2, 0, lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);

    let ui_imgHeart1 = lv.lv_img_create(ui_Clock02HRPanel2);
    lv.lv_img_set_src(ui_imgHeart1, "F:heart-22.bin");

    ui_Clock02Ble3 = lv.lv_img_create(ui_Clock02_Panel3);
    lv.lv_img_set_src(ui_Clock02Ble3, "F:bluetooth-off-22.bin");

    lv.lv_obj_set_x(ui_Clock02Ble3, 93);
    lv.lv_obj_set_y(ui_Clock02Ble3, -45);
    lv.lv_obj_set_align(ui_Clock02Ble3, lv.LV_ALIGN_CENTER);
  };

  // ---------------------------------------------------------------------------------------------------------------

  let slider;
  let slider_label;
  let vbatt_label;

  let slider_event_cb = function(code, user) {
    let value = lv.lv_slider_get_value(slider);
    lv.lv_label_set_text(slider_label, value + " %");
    Pinetime.setLCDBrightness(value / 100);
  };

  let screen_2 = function () {
    slider = lv.lv_slider_create(tile2);
    lv.lv_slider_set_range(slider, 5, 100);
    lv.lv_slider_set_value(slider, 40);
    //lv.lv_obj_center(slider);
    lv.lv_obj_align(slider, lv.LV_ALIGN_BOTTOM_MID, 0, -40);
    lv.lv_obj_set_size(slider, 200, 20);
    lv.lv_obj_add_event_cb(slider, slider_event_cb, lv.LV_EVENT_VALUE_CHANGED, null);

    lv.lv_obj_set_style_bg_color(slider, lv.lv_color_hex(0x727272), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_bg_color(slider, lv.lv_color_hex(0x2F8D1F), lv.LV_PART_INDICATOR | lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_bg_color(slider, lv.lv_color_hex(0xFFFFFF), lv.LV_PART_KNOB | lv.LV_STATE_DEFAULT);

    slider_label = lv.lv_label_create(tile2);
    lv.lv_obj_set_style_text_font(slider_label, lv.lv_font_OpenSans22Bold(), 0);
    lv.lv_label_set_text(slider_label, "40 %");
    lv.lv_obj_align_to(slider_label, slider, lv.LV_ALIGN_OUT_BOTTOM_MID, 0, 10);

    vbatt_label = lv.lv_label_create(tile2);
    lv.lv_label_set_text(vbatt_label, "0.00 V");
    lv.lv_obj_align(vbatt_label, lv.LV_ALIGN_CENTER, 0, 10);
  };

  // ---------------------------------------------------------------------------------------------------------------
  let ui_NotificationIcon;
  let ui_Type;
  let ui_Title;
  let ui_Body;
  let ui_NotificationTime;

  let screen_3 = function () {

    let ui_Notification_Panel = lv.lv_obj_create(tile3);
    lv.lv_obj_set_width( ui_Notification_Panel, 240);
    lv.lv_obj_set_height( ui_Notification_Panel, 240);
    lv.lv_obj_set_align( ui_Notification_Panel, lv.LV_ALIGN_CENTER );
    lv.lv_obj_set_flex_flow(ui_Notification_Panel,lv.LV_FLEX_FLOW_COLUMN);
    lv.lv_obj_set_flex_align(ui_Notification_Panel, lv.LV_FLEX_ALIGN_SPACE_EVENLY, lv.LV_FLEX_ALIGN_CENTER, lv.LV_FLEX_ALIGN_SPACE_EVENLY);
    lv.lv_obj_clear_flag( ui_Notification_Panel, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags
    lv.lv_obj_set_style_bg_color(ui_Notification_Panel, lv.lv_color_hex(0x000000), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
    lv.lv_obj_set_style_bg_opa(ui_Notification_Panel, 255, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_border_side(ui_Notification_Panel, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_left(ui_Notification_Panel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_right(ui_Notification_Panel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_top(ui_Notification_Panel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_bottom(ui_Notification_Panel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

    let ui_IconPanel = lv.lv_obj_create(ui_Notification_Panel);
    lv.lv_obj_set_height( ui_IconPanel, 26);
    lv.lv_obj_set_width( ui_IconPanel, 240);
    lv.lv_obj_set_align( ui_IconPanel, lv.LV_ALIGN_CENTER );
    lv.lv_obj_set_flex_flow(ui_IconPanel,lv.LV_FLEX_FLOW_ROW);
    lv.lv_obj_set_flex_align(ui_IconPanel, lv.LV_FLEX_ALIGN_SPACE_EVENLY, lv.LV_FLEX_ALIGN_CENTER, lv.LV_FLEX_ALIGN_CENTER);
    lv.lv_obj_clear_flag( ui_IconPanel, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags
    lv.lv_obj_set_style_radius(ui_IconPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_bg_color(ui_IconPanel, lv.lv_color_hex(0x000000), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
    lv.lv_obj_set_style_bg_opa(ui_IconPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_border_side(ui_IconPanel, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_left(ui_IconPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_right(ui_IconPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_top(ui_IconPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_bottom(ui_IconPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

    ui_NotificationIcon = lv.lv_img_create(ui_IconPanel);
    lv.lv_img_set_src(ui_NotificationIcon, "F:msg.bin");
    lv.lv_obj_set_width( ui_NotificationIcon, lv.LV_SIZE_CONTENT);  /// 22
    lv.lv_obj_set_height( ui_NotificationIcon, lv.LV_SIZE_CONTENT);   /// 22
    lv.lv_obj_set_x( ui_NotificationIcon, 0 );
    lv.lv_obj_set_y( ui_NotificationIcon, 10 );
    lv.lv_obj_set_align( ui_NotificationIcon, lv.LV_ALIGN_TOP_MID );
    lv.lv_obj_add_flag( ui_NotificationIcon, lv.LV_OBJ_FLAG_ADV_HITTEST );   /// Flags
    lv.lv_obj_clear_flag( ui_NotificationIcon, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags

    ui_Type = lv.lv_label_create(ui_IconPanel);
    lv.lv_obj_set_width( ui_Type, lv.LV_SIZE_CONTENT);  /// 1
    lv.lv_obj_set_height( ui_Type, lv.LV_SIZE_CONTENT);   /// 1
    lv.lv_obj_set_align( ui_Type, lv.LV_ALIGN_CENTER );
    lv.lv_label_set_text(ui_Type,"Notification");
    lv.lv_obj_set_style_text_font(ui_Type, lv.lv_font_OpenSans22Bold(), lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

    let ui_PanelMessage = lv.lv_obj_create(ui_Notification_Panel);
    lv.lv_obj_set_width( ui_PanelMessage, 235);
    lv.lv_obj_set_flex_grow( ui_PanelMessage, 1);
    lv.lv_obj_set_align( ui_PanelMessage, lv.LV_ALIGN_CENTER );
    lv.lv_obj_set_flex_flow(ui_PanelMessage,lv.LV_FLEX_FLOW_COLUMN);
    lv.lv_obj_set_flex_align(ui_PanelMessage, lv.LV_FLEX_ALIGN_START, lv.LV_FLEX_ALIGN_START, lv.LV_FLEX_ALIGN_START);
    lv.lv_obj_set_style_radius(ui_PanelMessage, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_bg_color(ui_PanelMessage, lv.lv_color_hex(0x000000), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
    lv.lv_obj_set_style_bg_opa(ui_PanelMessage, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_border_side(ui_PanelMessage, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_left(ui_PanelMessage, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_right(ui_PanelMessage, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_top(ui_PanelMessage, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_bottom(ui_PanelMessage, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

    ui_Title = lv.lv_label_create(ui_PanelMessage);
    lv.lv_obj_set_width( ui_Title, 230);
    lv.lv_obj_set_height( ui_Title, lv.LV_SIZE_CONTENT);   /// 1
    lv.lv_obj_set_align( ui_Title, lv.LV_ALIGN_CENTER );
    lv.lv_label_set_text(ui_Title,"No new notification");
    lv.lv_obj_set_style_text_font(ui_Title, lv.lv_font_OpenSans22Bold(), lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

    ui_Body = lv.lv_label_create(ui_PanelMessage);
    lv.lv_obj_set_width( ui_Body, 230);
    lv.lv_obj_set_height( ui_Body, lv.LV_SIZE_CONTENT);   /// 1
    lv.lv_obj_set_align( ui_Body, lv.LV_ALIGN_CENTER );
    lv.lv_label_set_text(ui_Body,"...");

    let ui_PanelFooter = lv.lv_obj_create(ui_Notification_Panel);
    lv.lv_obj_set_height( ui_PanelFooter, 26);
    lv.lv_obj_set_width( ui_PanelFooter, 240);
    lv.lv_obj_set_align( ui_PanelFooter, lv.LV_ALIGN_CENTER );
    lv.lv_obj_clear_flag( ui_PanelFooter, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags
    lv.lv_obj_set_style_radius(ui_PanelFooter, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_bg_color(ui_PanelFooter, lv.lv_color_hex(0x000000), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
    lv.lv_obj_set_style_bg_opa(ui_PanelFooter, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_border_side(ui_PanelFooter, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_left(ui_PanelFooter, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_right(ui_PanelFooter, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_top(ui_PanelFooter, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
    lv.lv_obj_set_style_pad_bottom(ui_PanelFooter, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

    ui_NotificationTime = lv.lv_label_create(ui_PanelFooter);
    lv.lv_obj_set_width( ui_NotificationTime, lv.LV_SIZE_CONTENT);  /// 1
    lv.lv_obj_set_height( ui_NotificationTime, lv.LV_SIZE_CONTENT);   /// 1
    lv.lv_obj_set_align( ui_NotificationTime, lv.LV_ALIGN_LEFT_MID );
    lv.lv_label_set_text(ui_NotificationTime,"--:--");

  };
  // ---------------------------------------------------------------------------------------------------------------


  screen_1();
  screen_2();
  screen_3();


  lv.lv_obj_set_tile(tv, tile1, lv.LV_ANIM_OFF);

  let date = new Date();
  let drawTimeout;
  let drawSecTimeout;

  let drawSec = function() {
    if (Pinetime.isLCDOn()) {
      date = new Date();
      lv.lv_bar_set_value(ui_Clock02Seconds1, date.getSeconds(), lv.LV_ANIM_ON);
    }

    if (drawSecTimeout) clearTimeout(drawSecTimeout);
    drawSecTimeout = setTimeout(function() {
      drawSecTimeout = undefined;
      drawSec();
    }, 1000);

  };

  let draw = function() {
    date = new Date();
    lv.lv_label_set_text(ui_Clock02_Date8, date.getDate().toString().padStart(2,"0"));
    lv.lv_label_set_text(ui_Clock02_Date10, require("locale").dow(date, 1).toUpperCase());

    lv.lv_label_set_text(ui_Clock02_Minute3, date.getMinutes().toString().padStart(2,"0"));
    lv.lv_label_set_text(ui_Clock02_Hour3, date.getHours().toString().padStart(2,"0"));
    lv.lv_bar_set_value(ui_Clock02Seconds1, date.getSeconds(), lv.LV_ANIM_ON);

    lv.lv_label_set_text(ui_Clock02_Power3, E.getBattery() + " %");

    lv.lv_label_set_text(vbatt_label, "Battery " + Pinetime.battVoltage().toFixed(2) + " V");

    if (drawTimeout) clearTimeout(drawTimeout);
    drawTimeout = setTimeout(function() {
      drawTimeout = undefined;
      draw();
    }, 30000 - (Date.now() % 30000));

  };


  draw();
  drawSec();

  NRF.on('connect', function(addr) {
    Pinetime.setLCDPower(true);
    lv.lv_img_set_src(ui_Clock02Ble3, "F:bluetooth-on-22.bin");
  });

  NRF.on('disconnect', function(reason) {
    //Pinetime.setLCDPower(true);
    lv.lv_img_set_src(ui_Clock02Ble3, "F:bluetooth-off-22.bin");
  });

  Pinetime.on('step', function(steps) {
    //Pinetime.setLCDPower(true);
    lv.lv_label_set_text(ui_lblWalk1, Pinetime.getStepCount().toString());
  });

  Pinetime.on('showmessage', function() {
    if (Pinetime.MESSAGES) {
      var msg = Pinetime.MESSAGES[0];
      if( msg.body != "") {
        Pinetime.setLCDPower(true);
        lv.lv_label_set_text(ui_Body, msg.body);
        lv.lv_label_set_text(ui_Title, msg.title);
        lv.lv_label_set_text(ui_Type, msg.src);
        lv.lv_label_set_text(ui_NotificationTime, date.getHours().toString().padStart(2,"0") + ":" + date.getMinutes().toString().padStart(2,"0"));
        Pinetime.buzz();
        lv.lv_obj_set_tile(tv, tile3, lv.LV_ANIM_ON);
      }
    }
  });

  Pinetime.on('charging', function(charging) {
    Pinetime.setLCDPower(true);
    if( charging ) {
      lv.lv_img_set_src(ui_imgPower1, "F:power-22.bin");
    } else {
      lv.lv_img_set_src(ui_imgPower1, "F:battery-22.bin");
    }
  });

}

date = new Date();

//ui_Clock01 = lv.lv_obj_create(null);
//lv.lv_obj_clear_flag( ui_Clock01, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags
//lv.lv_obj_set_style_bg_color(ui_Clock01, lv.lv_color_hex(0x000000), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
//lv.lv_obj_set_style_bg_opa(ui_Clock01, 255, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

//ui_Clock01_Panel = lv.lv_obj_create(ui_Clock01);
lv.lv_obj_set_width( ui_Clock01_Panel, lv.lv_pct(100));
lv.lv_obj_set_height( ui_Clock01_Panel, lv.lv_pct(100));
lv.lv_obj_set_align( ui_Clock01_Panel, lv.LV_ALIGN_CENTER );
lv.lv_obj_clear_flag( ui_Clock01_Panel, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags
lv.lv_obj_set_scrollbar_mode(ui_Clock01_Panel, lv.LV_SCROLLBAR_MODE_OFF);
lv.lv_obj_set_style_radius(ui_Clock01_Panel, 20, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_bg_color(ui_Clock01_Panel, lv.lv_color_hex(0x570000), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_bg_opa(ui_Clock01_Panel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_border_side(ui_Clock01_Panel, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_left(ui_Clock01_Panel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_right(ui_Clock01_Panel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_top(ui_Clock01_Panel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_bottom(ui_Clock01_Panel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_Clock01_Minute = lv.lv_label_create(ui_Clock01_Panel);
lv.lv_obj_set_width( ui_Clock01_Minute, lv.LV_SIZE_CONTENT);  /// 1
lv.lv_obj_set_height( ui_Clock01_Minute, lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_x( ui_Clock01_Minute, 74 );
lv.lv_obj_set_y( ui_Clock01_Minute, 0 );
lv.lv_obj_set_align( ui_Clock01_Minute, lv.LV_ALIGN_CENTER );
lv.lv_label_set_text(ui_Clock01_Minute, date.getMinutes().toString().padStart(2,"0"));
lv.lv_obj_set_style_text_color(ui_Clock01_Minute, lv.lv_color_hex(0x00BAD9), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_text_opa(ui_Clock01_Minute, 255, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_text_font(ui_Clock01_Minute, lv.lv_font_Numbers64(), lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_Clock01_Hour = lv.lv_label_create(ui_Clock01_Panel);
lv.lv_obj_set_width( ui_Clock01_Hour, lv.LV_SIZE_CONTENT);  /// 1
lv.lv_obj_set_height( ui_Clock01_Hour, lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_x( ui_Clock01_Hour, -44 );
lv.lv_obj_set_y( ui_Clock01_Hour, -21 );
lv.lv_obj_set_align( ui_Clock01_Hour, lv.LV_ALIGN_CENTER );
lv.lv_label_set_text(ui_Clock01_Hour, date.getHours().toString().padStart(2,"0"));
lv.lv_obj_set_style_text_font(ui_Clock01_Hour, lv.lv_font_BigNumbers(), lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_Clock01_Seconds = lv.lv_bar_create(ui_Clock01_Panel);
lv.lv_bar_set_range(ui_Clock01_Seconds, 0,59);
lv.lv_bar_set_value(ui_Clock01_Seconds, date.getSeconds(), lv.LV_ANIM_OFF);
lv.lv_obj_set_width( ui_Clock01_Seconds, 201);
lv.lv_obj_set_height( ui_Clock01_Seconds, 12);
lv.lv_obj_set_x( ui_Clock01_Seconds, 0 );
lv.lv_obj_set_y( ui_Clock01_Seconds, 48 );
lv.lv_obj_set_align( ui_Clock01_Seconds, lv.LV_ALIGN_CENTER );

lv.lv_obj_set_style_bg_color(ui_Clock01_Seconds, lv.lv_color_hex(0xF2FF49), lv.LV_PART_INDICATOR | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_bg_opa(ui_Clock01_Seconds, 255, lv.LV_PART_INDICATOR| lv.LV_STATE_DEFAULT);

ui_Clock01_DatePanel = lv.lv_obj_create(ui_Clock01_Panel);
lv.lv_obj_set_width( ui_Clock01_DatePanel, 105);
lv.lv_obj_set_height( ui_Clock01_DatePanel, 32);
lv.lv_obj_set_x( ui_Clock01_DatePanel, -4 );
lv.lv_obj_set_y( ui_Clock01_DatePanel, 6 );
lv.lv_obj_set_align( ui_Clock01_DatePanel, lv.LV_ALIGN_TOP_RIGHT );
lv.lv_obj_set_flex_flow(ui_Clock01_DatePanel,lv.LV_FLEX_FLOW_ROW);
lv.lv_obj_set_flex_align(ui_Clock01_DatePanel, lv.LV_FLEX_ALIGN_SPACE_EVENLY, lv.LV_FLEX_ALIGN_CENTER, lv.LV_FLEX_ALIGN_CENTER);
lv.lv_obj_clear_flag( ui_Clock01_DatePanel, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags
lv.lv_obj_set_style_radius(ui_Clock01_DatePanel, 15, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_bg_color(ui_Clock01_DatePanel, lv.lv_color_hex(0xFFFFFF), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_bg_opa(ui_Clock01_DatePanel, 255, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_border_side(ui_Clock01_DatePanel, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_left(ui_Clock01_DatePanel, 2, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_right(ui_Clock01_DatePanel, 2, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_top(ui_Clock01_DatePanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_bottom(ui_Clock01_DatePanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_row(ui_Clock01_DatePanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_column(ui_Clock01_DatePanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_Clock01_DateDay = lv.lv_label_create(ui_Clock01_DatePanel);
lv.lv_obj_set_width( ui_Clock01_DateDay, lv.LV_SIZE_CONTENT);  /// 1
lv.lv_obj_set_height( ui_Clock01_DateDay, lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_x( ui_Clock01_DateDay, 10 );
lv.lv_obj_set_y( ui_Clock01_DateDay, -5 );
lv.lv_obj_set_align( ui_Clock01_DateDay, lv.LV_ALIGN_BOTTOM_LEFT );
lv.lv_label_set_text(ui_Clock01_DateDay, date.getDate().toString().padStart(2,"0"));
lv.lv_obj_set_style_text_color(ui_Clock01_DateDay, lv.lv_color_hex(0x000000), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_text_opa(ui_Clock01_DateDay, 255, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_text_font(ui_Clock01_DateDay, lv.lv_font_OpenSans22Bold(), lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_Clock01_DateDayName = lv.lv_label_create(ui_Clock01_DatePanel);
lv.lv_obj_set_width( ui_Clock01_DateDayName, lv.LV_SIZE_CONTENT);  /// 1
lv.lv_obj_set_height( ui_Clock01_DateDayName, lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_x( ui_Clock01_DateDayName, 10 );
lv.lv_obj_set_y( ui_Clock01_DateDayName, -5 );
lv.lv_obj_set_align( ui_Clock01_DateDayName, lv.LV_ALIGN_BOTTOM_LEFT );
lv.lv_label_set_text(ui_Clock01_DateDayName, require("locale").dow(date, 1).toUpperCase());
lv.lv_obj_set_style_text_color(ui_Clock01_DateDayName, lv.lv_color_hex(0x000000), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_text_opa(ui_Clock01_DateDayName, 255, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_text_font(ui_Clock01_DateDayName, lv.lv_font_OpenSans22Bold(), lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_Clock01_BlePanel = lv.lv_obj_create(ui_Clock01_Panel);
lv.lv_obj_set_width( ui_Clock01_BlePanel, 40);
lv.lv_obj_set_height( ui_Clock01_BlePanel, 32);
lv.lv_obj_set_x( ui_Clock01_BlePanel, 93 );
lv.lv_obj_set_y( ui_Clock01_BlePanel, -45 );
lv.lv_obj_set_align( ui_Clock01_BlePanel, lv.LV_ALIGN_CENTER );
lv.lv_obj_set_flex_flow(ui_Clock01_BlePanel,lv.LV_FLEX_FLOW_ROW);
lv.lv_obj_set_flex_align(ui_Clock01_BlePanel, lv.LV_FLEX_ALIGN_CENTER, lv.LV_FLEX_ALIGN_CENTER, lv.LV_FLEX_ALIGN_CENTER);
lv.lv_obj_clear_flag( ui_Clock01_BlePanel, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags
lv.lv_obj_set_style_bg_color(ui_Clock01_BlePanel, lv.lv_color_hex(0x000000), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_bg_opa(ui_Clock01_BlePanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_border_side(ui_Clock01_BlePanel, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_left(ui_Clock01_BlePanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_right(ui_Clock01_BlePanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_top(ui_Clock01_BlePanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_bottom(ui_Clock01_BlePanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_row(ui_Clock01_BlePanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_column(ui_Clock01_BlePanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_Clock01_BleIcon = lv.lv_img_create(ui_Clock01_BlePanel);
lv.lv_img_set_src(ui_Clock01_BleIcon, "F:bluetooth-off-22.bin");
lv.lv_obj_set_width( ui_Clock01_BleIcon, lv.LV_SIZE_CONTENT);  /// 15
lv.lv_obj_set_height( ui_Clock01_BleIcon, lv.LV_SIZE_CONTENT);   /// 19
lv.lv_obj_set_x( ui_Clock01_BleIcon, 0 );
lv.lv_obj_set_y( ui_Clock01_BleIcon, -8 );
lv.lv_obj_set_align( ui_Clock01_BleIcon, lv.LV_ALIGN_BOTTOM_MID );
lv.lv_obj_clear_flag( ui_Clock01_BleIcon, lv.LV_OBJ_FLAG_PRESS_LOCK | lv.LV_OBJ_FLAG_CLICK_FOCUSABLE | lv.LV_OBJ_FLAG_GESTURE_BUBBLE | lv.LV_OBJ_FLAG_SNAPPABLE | lv.LV_OBJ_FLAG_SCROLLABLE | lv.LV_OBJ_FLAG_SCROLL_ELASTIC | lv.LV_OBJ_FLAG_SCROLL_MOMENTUM | lv.LV_OBJ_FLAG_SCROLL_CHAIN );    /// Flags

ui_Clock01_PwrPanel = lv.lv_obj_create(ui_Clock01_Panel);
lv.lv_obj_set_width( ui_Clock01_PwrPanel, 105);
lv.lv_obj_set_height( ui_Clock01_PwrPanel, 32);
lv.lv_obj_set_x( ui_Clock01_PwrPanel, 4 );
lv.lv_obj_set_y( ui_Clock01_PwrPanel, 6 );
lv.lv_obj_set_flex_flow(ui_Clock01_PwrPanel,lv.LV_FLEX_FLOW_ROW);
lv.lv_obj_set_flex_align(ui_Clock01_PwrPanel, lv.LV_FLEX_ALIGN_SPACE_EVENLY, lv.LV_FLEX_ALIGN_CENTER, lv.LV_FLEX_ALIGN_CENTER);
lv.lv_obj_clear_flag( ui_Clock01_PwrPanel, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags
lv.lv_obj_set_style_radius(ui_Clock01_PwrPanel, 15, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_bg_color(ui_Clock01_PwrPanel, lv.lv_color_hex(0x005308), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_bg_opa(ui_Clock01_PwrPanel, 255, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_border_side(ui_Clock01_PwrPanel, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_left(ui_Clock01_PwrPanel, 2, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_right(ui_Clock01_PwrPanel, 2, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_top(ui_Clock01_PwrPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_bottom(ui_Clock01_PwrPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_row(ui_Clock01_PwrPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_column(ui_Clock01_PwrPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_Clock01_imgPower = lv.lv_img_create(ui_Clock01_PwrPanel);
lv.lv_img_set_src(ui_Clock01_imgPower, "F:battery-22.bin");
lv.lv_obj_set_width( ui_Clock01_imgPower, lv.LV_SIZE_CONTENT);  /// 22
lv.lv_obj_set_height( ui_Clock01_imgPower, lv.LV_SIZE_CONTENT);   /// 22
lv.lv_obj_set_align( ui_Clock01_imgPower, lv.LV_ALIGN_CENTER );
lv.lv_obj_add_flag( ui_Clock01_imgPower, lv.LV_OBJ_FLAG_ADV_HITTEST );   /// Flags
lv.lv_obj_clear_flag( ui_Clock01_imgPower, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags

ui_Clock01_Power = lv.lv_label_create(ui_Clock01_PwrPanel);
lv.lv_obj_set_width( ui_Clock01_Power, lv.LV_SIZE_CONTENT);  /// 1
lv.lv_obj_set_height( ui_Clock01_Power, lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_align( ui_Clock01_Power, lv.LV_ALIGN_CENTER );
lv.lv_label_set_text(ui_Clock01_Power, E.getBattery() + " %");
lv.lv_obj_set_style_text_color(ui_Clock01_Power, lv.lv_color_hex(0xFFFFFF), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_text_opa(ui_Clock01_Power, 255, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_text_font(ui_Clock01_Power, lv.lv_font_OpenSans22Bold(), lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_Clock01_StepsPanel = lv.lv_obj_create(ui_Clock01_Panel);
lv.lv_obj_set_width( ui_Clock01_StepsPanel, 110);
lv.lv_obj_set_height( ui_Clock01_StepsPanel, 32);
lv.lv_obj_set_x( ui_Clock01_StepsPanel, 4 );
lv.lv_obj_set_y( ui_Clock01_StepsPanel, -6 );
lv.lv_obj_set_align( ui_Clock01_StepsPanel, lv.LV_ALIGN_BOTTOM_LEFT );
lv.lv_obj_set_flex_flow(ui_Clock01_StepsPanel,lv.LV_FLEX_FLOW_ROW);
lv.lv_obj_set_flex_align(ui_Clock01_StepsPanel, lv.LV_FLEX_ALIGN_SPACE_EVENLY, lv.LV_FLEX_ALIGN_CENTER, lv.LV_FLEX_ALIGN_CENTER);
lv.lv_obj_clear_flag( ui_Clock01_StepsPanel, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags
lv.lv_obj_set_style_radius(ui_Clock01_StepsPanel, 15, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_bg_color(ui_Clock01_StepsPanel, lv.lv_color_hex(0x003CBD), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_bg_opa(ui_Clock01_StepsPanel, 255, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_border_side(ui_Clock01_StepsPanel, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_left(ui_Clock01_StepsPanel, 2, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_right(ui_Clock01_StepsPanel, 2, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_top(ui_Clock01_StepsPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_bottom(ui_Clock01_StepsPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_row(ui_Clock01_StepsPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_column(ui_Clock01_StepsPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_Clock01_imgWalk = lv.lv_img_create(ui_Clock01_StepsPanel);
lv.lv_img_set_src(ui_Clock01_imgWalk, "F:walking-22.bin");
lv.lv_obj_set_width( ui_Clock01_imgWalk, lv.LV_SIZE_CONTENT);  /// 1
lv.lv_obj_set_height( ui_Clock01_imgWalk, lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_align( ui_Clock01_imgWalk, lv.LV_ALIGN_CENTER );
lv.lv_obj_add_flag( ui_Clock01_imgWalk, lv.LV_OBJ_FLAG_ADV_HITTEST );   /// Flags
lv.lv_obj_clear_flag( ui_Clock01_imgWalk, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags

ui_Clock01_StepCount = lv.lv_label_create(ui_Clock01_StepsPanel);
lv.lv_obj_set_width( ui_Clock01_StepCount, lv.LV_SIZE_CONTENT);  /// 1
lv.lv_obj_set_height( ui_Clock01_StepCount, lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_x( ui_Clock01_StepCount, 10 );
lv.lv_obj_set_y( ui_Clock01_StepCount, -5 );
lv.lv_obj_set_align( ui_Clock01_StepCount, lv.LV_ALIGN_BOTTOM_LEFT );
lv.lv_label_set_text(ui_Clock01_StepCount, Pinetime.getStepCount().toString());
lv.lv_obj_set_style_text_color(ui_Clock01_StepCount, lv.lv_color_hex(0xFFFFFF), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_text_opa(ui_Clock01_StepCount, 255, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_text_font(ui_Clock01_StepCount, lv.lv_font_OpenSans22Bold(), lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_Clock01_HRPanel = lv.lv_obj_create(ui_Clock01_Panel);
lv.lv_obj_set_width( ui_Clock01_HRPanel, 100);
lv.lv_obj_set_height( ui_Clock01_HRPanel, 32);
lv.lv_obj_set_x( ui_Clock01_HRPanel, -4 );
lv.lv_obj_set_y( ui_Clock01_HRPanel, -6 );
lv.lv_obj_set_align( ui_Clock01_HRPanel, lv.LV_ALIGN_BOTTOM_RIGHT );
lv.lv_obj_set_flex_flow(ui_Clock01_HRPanel,lv.LV_FLEX_FLOW_ROW);
lv.lv_obj_set_flex_align(ui_Clock01_HRPanel, lv.LV_FLEX_ALIGN_SPACE_EVENLY, lv.LV_FLEX_ALIGN_CENTER, lv.LV_FLEX_ALIGN_CENTER);
lv.lv_obj_clear_flag( ui_Clock01_HRPanel, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags
lv.lv_obj_set_style_radius(ui_Clock01_HRPanel, 15, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_bg_color(ui_Clock01_HRPanel, lv.lv_color_hex(0xB40000), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_bg_opa(ui_Clock01_HRPanel, 255, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_border_side(ui_Clock01_HRPanel, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_left(ui_Clock01_HRPanel, 2, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_right(ui_Clock01_HRPanel, 2, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_top(ui_Clock01_HRPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_bottom(ui_Clock01_HRPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_row(ui_Clock01_HRPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_column(ui_Clock01_HRPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_Clock01_imgHeart = lv.lv_img_create(ui_Clock01_HRPanel);
lv.lv_img_set_src(ui_Clock01_imgHeart, "F:heart-22.bin");
lv.lv_obj_set_width( ui_Clock01_imgHeart, lv.LV_SIZE_CONTENT);  /// 1
lv.lv_obj_set_height( ui_Clock01_imgHeart, lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_align( ui_Clock01_imgHeart, lv.LV_ALIGN_CENTER );
lv.lv_obj_add_flag( ui_Clock01_imgHeart, lv.LV_OBJ_FLAG_ADV_HITTEST );   /// Flags
lv.lv_obj_clear_flag( ui_Clock01_imgHeart, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags

ui_Clock01_HRCount = lv.lv_label_create(ui_Clock01_HRPanel);
lv.lv_obj_set_width( ui_Clock01_HRCount, lv.LV_SIZE_CONTENT);  /// 1
lv.lv_obj_set_height( ui_Clock01_HRCount, lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_x( ui_Clock01_HRCount, 10 );
lv.lv_obj_set_y( ui_Clock01_HRCount, -5 );
lv.lv_obj_set_align( ui_Clock01_HRCount, lv.LV_ALIGN_BOTTOM_LEFT );
lv.lv_label_set_text(ui_Clock01_HRCount, "---");
lv.lv_obj_set_style_text_font(ui_Clock01_HRCount, lv.lv_font_OpenSans22Bold(), lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_Clock01_MsgPanel = lv.lv_obj_create(ui_Clock01_Panel);
lv.lv_obj_set_width( ui_Clock01_MsgPanel, 40);
lv.lv_obj_set_height( ui_Clock01_MsgPanel, 32);
lv.lv_obj_set_x( ui_Clock01_MsgPanel, 54 );
lv.lv_obj_set_y( ui_Clock01_MsgPanel, -45 );
lv.lv_obj_set_align( ui_Clock01_MsgPanel, lv.LV_ALIGN_CENTER );
lv.lv_obj_set_flex_flow(ui_Clock01_MsgPanel,lv.LV_FLEX_FLOW_ROW);
lv.lv_obj_set_flex_align(ui_Clock01_MsgPanel, lv.LV_FLEX_ALIGN_CENTER, lv.LV_FLEX_ALIGN_CENTER, lv.LV_FLEX_ALIGN_CENTER);
lv.lv_obj_clear_flag( ui_Clock01_MsgPanel, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags
lv.lv_obj_set_style_bg_color(ui_Clock01_MsgPanel, lv.lv_color_hex(0x000000), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_bg_opa(ui_Clock01_MsgPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_border_side(ui_Clock01_MsgPanel, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_left(ui_Clock01_MsgPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_right(ui_Clock01_MsgPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_top(ui_Clock01_MsgPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_bottom(ui_Clock01_MsgPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_row(ui_Clock01_MsgPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_column(ui_Clock01_MsgPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

/*ui_Clock01_HasMsg = lv.lv_img_create(ui_Clock01_MsgPanel);
lv.lv_img_set_src(ui_Clock01_HasMsg, "F:msg.bin");
lv.lv_obj_set_width( ui_Clock01_HasMsg, lv.LV_SIZE_CONTENT);  /// 15
lv.lv_obj_set_height( ui_Clock01_HasMsg, lv.LV_SIZE_CONTENT);   /// 19
lv.lv_obj_set_x( ui_Clock01_HasMsg, -2 );
lv.lv_obj_set_y( ui_Clock01_HasMsg, -8 );
lv.lv_obj_set_align( ui_Clock01_HasMsg, lv.LV_ALIGN_BOTTOM_MID );
lv.lv_obj_clear_flag( ui_Clock01_HasMsg, lv.LV_OBJ_FLAG_PRESS_LOCK | lv.LV_OBJ_FLAG_CLICK_FOCUSABLE | lv.LV_OBJ_FLAG_GESTURE_BUBBLE | lv.LV_OBJ_FLAG_SNAPPABLE | lv.LV_OBJ_FLAG_SCROLLABLE | lv.LV_OBJ_FLAG_SCROLL_ELASTIC | lv.LV_OBJ_FLAG_SCROLL_MOMENTUM | lv.LV_OBJ_FLAG_SCROLL_CHAIN );    /// Flags*/

//lv.lv_obj_add_event_cb(ui_Clock01, ui_event_Clock01, lv.LV_EVENT_GESTURE, null);

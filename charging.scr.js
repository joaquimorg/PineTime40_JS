lv.lv_obj_clear_flag( ui_Charging, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags
lv.lv_obj_set_style_bg_color(ui_Charging, lv.lv_color_hex(0x000000), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );

ui_ChargingPanel = lv.lv_obj_create(ui_Charging);
lv.lv_obj_set_width( ui_ChargingPanel, lv.lv_pct(100));
lv.lv_obj_set_height( ui_ChargingPanel, lv.lv_pct(100));
lv.lv_obj_set_align( ui_ChargingPanel, lv.LV_ALIGN_CENTER );
lv.lv_obj_clear_flag( ui_ChargingPanel, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags
lv.lv_obj_set_style_bg_color(ui_ChargingPanel, lv.lv_color_hex(0x000000), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_border_side(ui_ChargingPanel, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_left(ui_ChargingPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_right(ui_ChargingPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_top(ui_ChargingPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_bottom(ui_ChargingPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_ChargingLabel = lv.lv_label_create(ui_ChargingPanel);
lv.lv_obj_set_width( ui_ChargingLabel, lv.LV_SIZE_CONTENT);  /// 1
lv.lv_obj_set_height( ui_ChargingLabel, lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_x( ui_ChargingLabel, 5 );
lv.lv_obj_set_y( ui_ChargingLabel, 6 );
lv.lv_label_set_text(ui_ChargingLabel,"Battery Status");
lv.lv_obj_set_style_text_color(ui_ChargingLabel, lv.lv_color_hex(0x808080), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );

ui_BattStatusVolt = lv.lv_label_create(ui_ChargingPanel);
lv.lv_obj_set_width( ui_BattStatusVolt, lv.LV_SIZE_CONTENT);  /// 1
lv.lv_obj_set_height( ui_BattStatusVolt, lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_x( ui_BattStatusVolt, -5 );
lv.lv_obj_set_y( ui_BattStatusVolt, 6 );
lv.lv_obj_set_align( ui_BattStatusVolt, lv.LV_ALIGN_TOP_RIGHT );
lv.lv_label_set_text(ui_BattStatusVolt,"4.10 V");
lv.lv_obj_set_style_text_color(ui_BattStatusVolt, lv.lv_color_hex(0xFFE800), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );

ui_ChargingStatus = lv.lv_obj_create(ui_ChargingPanel);
lv.lv_obj_set_width( ui_ChargingStatus, 240);
lv.lv_obj_set_height( ui_ChargingStatus, 194);
lv.lv_obj_set_x( ui_ChargingStatus, 0 );
lv.lv_obj_set_y( ui_ChargingStatus, 23 );
lv.lv_obj_set_align( ui_ChargingStatus, lv.LV_ALIGN_CENTER );
lv.lv_obj_clear_flag( ui_ChargingStatus, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags
lv.lv_obj_set_style_radius(ui_ChargingStatus, 20, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_bg_color(ui_ChargingStatus, lv.lv_color_hex(0x202020), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_border_side(ui_ChargingStatus, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_BattLvl = lv.lv_arc_create(ui_ChargingStatus);
lv.lv_obj_set_width( ui_BattLvl, 170);
lv.lv_obj_set_height( ui_BattLvl, 170);
lv.lv_obj_set_align( ui_BattLvl, lv.LV_ALIGN_CENTER );
lv.lv_obj_clear_flag( ui_BattLvl, lv.LV_OBJ_FLAG_CLICKABLE | lv.LV_OBJ_FLAG_PRESS_LOCK | lv.LV_OBJ_FLAG_CLICK_FOCUSABLE | lv.LV_OBJ_FLAG_SNAPPABLE | lv.LV_OBJ_FLAG_SCROLLABLE | lv.LV_OBJ_FLAG_SCROLL_ELASTIC | lv.LV_OBJ_FLAG_SCROLL_MOMENTUM | lv.LV_OBJ_FLAG_SCROLL_CHAIN );    /// Flags
lv.lv_arc_set_value(ui_BattLvl, 10);
lv.lv_arc_set_range(ui_BattLvl, 0, 100);
lv.lv_arc_set_bg_angles(ui_BattLvl,0,360);
lv.lv_arc_set_rotation(ui_BattLvl,270);
lv.lv_obj_set_style_arc_width(ui_BattLvl, 20, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

lv.lv_obj_set_style_arc_color(ui_BattLvl, lv.lv_color_hex(0xFF0000), lv.LV_PART_INDICATOR | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_arc_width(ui_BattLvl, 20, lv.LV_PART_INDICATOR| lv.LV_STATE_DEFAULT);

lv.lv_obj_set_style_bg_color(ui_BattLvl, lv.lv_color_hex(0xFFFFFF), lv.LV_PART_KNOB | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_bg_opa(ui_BattLvl, 0, lv.LV_PART_KNOB| lv.LV_STATE_DEFAULT);

ui_BattPerc = lv.lv_label_create(ui_ChargingStatus);
lv.lv_obj_set_width( ui_BattPerc, lv.LV_SIZE_CONTENT);  /// 1
lv.lv_obj_set_height( ui_BattPerc, lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_align( ui_BattPerc, lv.LV_ALIGN_CENTER );
lv.lv_label_set_text(ui_BattPerc,"100%");
lv.lv_obj_set_style_text_font(ui_BattPerc, lv.lv_font_Numbers42(), lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
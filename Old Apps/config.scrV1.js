
lv.lv_obj_set_width( ui_Config_Panel, 240);
lv.lv_obj_set_height( ui_Config_Panel, 240);
lv.lv_obj_set_align( ui_Config_Panel, lv.LV_ALIGN_CENTER );
lv.lv_obj_clear_flag( ui_Config_Panel, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags

lv.lv_obj_set_style_bg_color(ui_Config_Panel, lv.lv_color_hex(0x000000), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_border_side(ui_Config_Panel, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_left(ui_Config_Panel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_right(ui_Config_Panel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_top(ui_Config_Panel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_bottom(ui_Config_Panel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_Config_Actions_Panel = lv.lv_obj_create(ui_Config_Panel);
lv.lv_obj_set_height( ui_Config_Actions_Panel, 190);
lv.lv_obj_set_width( ui_Config_Actions_Panel, lv.lv_pct(100));
lv.lv_obj_set_align( ui_Config_Actions_Panel, lv.LV_ALIGN_TOP_MID );
lv.lv_obj_set_flex_flow(ui_Config_Actions_Panel,lv.LV_FLEX_FLOW_ROW_WRAP);
lv.lv_obj_set_flex_align(ui_Config_Actions_Panel, lv.LV_FLEX_ALIGN_SPACE_EVENLY, lv.LV_FLEX_ALIGN_CENTER, lv.LV_FLEX_ALIGN_SPACE_EVENLY);
lv.lv_obj_clear_flag( ui_Config_Actions_Panel, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags
//lv.lv_obj_set_style_bg_color(ui_Config_Actions_Panel, lv.lv_color_hex(0x000000), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_bg_opa(ui_Config_Actions_Panel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_border_side(ui_Config_Actions_Panel, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_Config_Button3 = lv.lv_btn_create(ui_Config_Actions_Panel);
lv.lv_obj_set_width( ui_Config_Button3, 80);
lv.lv_obj_set_height( ui_Config_Button3, 80);
lv.lv_obj_set_align( ui_Config_Button3, lv.LV_ALIGN_CENTER );
lv.lv_obj_set_style_radius(ui_Config_Button3, 15, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_bg_color(ui_Config_Button3, lv.lv_color_hex(0x242424), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_bg_color(ui_Config_Button3, lv.lv_color_hex(0x48801E), lv.LV_PART_MAIN | lv.LV_STATE_PRESSED );

ui_Config_Label2 = lv.lv_label_create(ui_Config_Button3);
lv.lv_obj_set_align( ui_Config_Label2, lv.LV_ALIGN_CENTER );
lv.lv_label_set_text(ui_Config_Label2,"\xEE\xA4\x8C");
lv.lv_obj_set_style_text_font(ui_Config_Label2, lv.lv_font_Icons32(), lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_add_event_cb(ui_Config_Button3, ui_event_Config_Button3, lv.LV_EVENT_CLICKED, 1);

ui_Config_Button6 = lv.lv_btn_create(ui_Config_Actions_Panel);
lv.lv_obj_set_width( ui_Config_Button6, 80);
lv.lv_obj_set_height( ui_Config_Button6, 80);
lv.lv_obj_set_align( ui_Config_Button6, lv.LV_ALIGN_CENTER );
lv.lv_obj_set_style_radius(ui_Config_Button6, 15, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_bg_color(ui_Config_Button6, lv.lv_color_hex(0x242424), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_bg_color(ui_Config_Button6, lv.lv_color_hex(0x48801E), lv.LV_PART_MAIN | lv.LV_STATE_PRESSED );

ui_Config_Label8 = lv.lv_label_create(ui_Config_Button6);
lv.lv_obj_set_align( ui_Config_Label8, lv.LV_ALIGN_CENTER );
lv.lv_label_set_text(ui_Config_Label8,"\xEE\xA4\x86");
lv.lv_obj_set_style_text_font(ui_Config_Label8, lv.lv_font_Icons32(), lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_add_event_cb(ui_Config_Button6, ui_event_Config_Button3, lv.LV_EVENT_CLICKED, 2);

ui_Config_Button4 = lv.lv_btn_create(ui_Config_Actions_Panel);
lv.lv_obj_set_width( ui_Config_Button4, 80);
lv.lv_obj_set_height( ui_Config_Button4, 80);
lv.lv_obj_set_align( ui_Config_Button4, lv.LV_ALIGN_CENTER );
lv.lv_obj_set_style_radius(ui_Config_Button4, 15, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_bg_color(ui_Config_Button4, lv.lv_color_hex(0x242424), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_bg_color(ui_Config_Button4, lv.lv_color_hex(0x48801E), lv.LV_PART_MAIN | lv.LV_STATE_PRESSED );

ui_Config_Label3 = lv.lv_label_create(ui_Config_Button4);
lv.lv_obj_set_align( ui_Config_Label3, lv.LV_ALIGN_CENTER );
lv.lv_label_set_text(ui_Config_Label3,"\xEE\xA4\x88");
lv.lv_obj_set_style_text_font(ui_Config_Label3, lv.lv_font_Icons32(), lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_add_event_cb(ui_Config_Button4, ui_event_Config_Button3, lv.LV_EVENT_CLICKED, 3);

ui_Config_Button5 = lv.lv_btn_create(ui_Config_Actions_Panel);
lv.lv_obj_set_width( ui_Config_Button5, 80);
lv.lv_obj_set_height( ui_Config_Button5, 80);
lv.lv_obj_set_align( ui_Config_Button5, lv.LV_ALIGN_CENTER );
lv.lv_obj_set_style_radius(ui_Config_Button5, 15, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_bg_color(ui_Config_Button5, lv.lv_color_hex(0x242424), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_bg_color(ui_Config_Button5, lv.lv_color_hex(0x48801E), lv.LV_PART_MAIN | lv.LV_STATE_PRESSED );

ui_Config_Label7 = lv.lv_label_create(ui_Config_Button5);
lv.lv_obj_set_align( ui_Config_Label7, lv.LV_ALIGN_CENTER );
lv.lv_label_set_text(ui_Config_Label7,"\xEE\xA4\x91");
lv.lv_obj_set_style_text_font(ui_Config_Label7, lv.lv_font_Icons32(), lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_add_event_cb(ui_Config_Button5, ui_event_Config_Button3, lv.LV_EVENT_CLICKED, 4);

ui_BottomInfo = lv.lv_obj_create(ui_Config_Panel);
lv.lv_obj_set_height( ui_BottomInfo, 45);
lv.lv_obj_set_width( ui_BottomInfo, lv.lv_pct(100));
lv.lv_obj_set_align( ui_BottomInfo, lv.LV_ALIGN_BOTTOM_MID );
lv.lv_obj_set_flex_flow(ui_BottomInfo,lv.LV_FLEX_FLOW_ROW);
lv.lv_obj_set_flex_align(ui_BottomInfo, lv.LV_FLEX_ALIGN_SPACE_BETWEEN, lv.LV_FLEX_ALIGN_CENTER, lv.LV_FLEX_ALIGN_SPACE_BETWEEN);
lv.lv_obj_clear_flag( ui_BottomInfo, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags
//lv.lv_obj_set_style_bg_color(ui_BottomInfo, lv.lv_color_hex(0xFFFFFF), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_bg_opa(ui_BottomInfo, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_border_width(ui_BottomInfo, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_border_side(ui_BottomInfo, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_Config_Time = lv.lv_label_create(ui_BottomInfo);
lv.lv_obj_set_width( ui_Config_Time, lv.LV_SIZE_CONTENT);  /// 1
lv.lv_obj_set_height( ui_Config_Time, lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_x( ui_Config_Time, 10 );
lv.lv_obj_set_y( ui_Config_Time, -10 );
lv.lv_obj_set_align( ui_Config_Time, lv.LV_ALIGN_BOTTOM_LEFT );
lv.lv_label_set_text(ui_Config_Time,"00:00");

ui_Config_Batt_Icon = lv.lv_label_create(ui_BottomInfo);
lv.lv_obj_set_width( ui_Config_Batt_Icon, lv.LV_SIZE_CONTENT);  /// 1
lv.lv_obj_set_height( ui_Config_Batt_Icon, lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_x( ui_Config_Batt_Icon, 27 );
lv.lv_obj_set_y( ui_Config_Batt_Icon, -3 );
lv.lv_obj_set_align( ui_Config_Batt_Icon, lv.LV_ALIGN_BOTTOM_MID );
lv.lv_label_set_text(ui_Config_Batt_Icon,"\xEE\xA4\x82");
lv.lv_obj_set_style_text_color(ui_Config_Batt_Icon, lv.lv_color_hex(0x017515), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_text_font(ui_Config_Batt_Icon, lv.lv_font_Icons32(), lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_ConfigBatt = lv.lv_label_create(ui_BottomInfo);
lv.lv_obj_set_width( ui_ConfigBatt, lv.LV_SIZE_CONTENT);  /// 1
lv.lv_obj_set_height( ui_ConfigBatt, lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_x( ui_ConfigBatt, -10 );
lv.lv_obj_set_y( ui_ConfigBatt, -10 );
lv.lv_obj_set_align( ui_ConfigBatt, lv.LV_ALIGN_BOTTOM_RIGHT );
lv.lv_label_set_text(ui_ConfigBatt,"100%");

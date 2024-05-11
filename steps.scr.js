ui_Steps_Panel = lv.lv_obj_create(tileSteps);
lv.lv_obj_set_width( ui_Steps_Panel, lv.lv_pct(100));
lv.lv_obj_set_height( ui_Steps_Panel, lv.lv_pct(100));
lv.lv_obj_set_align( ui_Steps_Panel, lv.LV_ALIGN_CENTER );
lv.lv_obj_set_style_bg_color(ui_Steps_Panel, lv.lv_color_hex(0x000000), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_border_side(ui_Steps_Panel, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_StepsToday = lv.lv_label_create(ui_Steps_Panel);
lv.lv_obj_set_width( ui_StepsToday, lv.LV_SIZE_CONTENT);  /// 1
lv.lv_obj_set_height( ui_StepsToday, lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_x( ui_StepsToday, 0 );
lv.lv_obj_set_y( ui_StepsToday, 10 );
lv.lv_obj_set_align( ui_StepsToday, lv.LV_ALIGN_TOP_MID );
lv.lv_label_set_text(ui_StepsToday,"Steps today");
lv.lv_obj_set_style_text_color(ui_StepsToday, lv.lv_color_hex(0x10837F), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_text_font(ui_StepsToday, lv.lv_font_OpenSans22Bold(), lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_ImageW1 = lv.lv_img_create(ui_Steps_Panel);
lv.lv_img_set_src(ui_ImageW1, "F:walk1.bin");
lv.lv_obj_set_width( ui_ImageW1, lv.LV_SIZE_CONTENT);  /// 32
lv.lv_obj_set_height( ui_ImageW1, lv.LV_SIZE_CONTENT);   /// 64
lv.lv_obj_set_x( ui_ImageW1, 0 );
lv.lv_obj_set_y( ui_ImageW1, -33 );
lv.lv_obj_set_align( ui_ImageW1, lv.LV_ALIGN_CENTER );
lv.lv_obj_add_flag( ui_ImageW1, lv.LV_OBJ_FLAG_ADV_HITTEST );   /// Flags
lv.lv_obj_clear_flag( ui_ImageW1, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags

ui_StepsActivity = lv.lv_label_create(ui_Steps_Panel);
lv.lv_obj_set_width( ui_StepsActivity, lv.LV_SIZE_CONTENT);  /// 1
lv.lv_obj_set_height( ui_StepsActivity, lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_x( ui_StepsActivity, 0 );
lv.lv_obj_set_y( ui_StepsActivity, 8 );
lv.lv_obj_set_align( ui_StepsActivity, lv.LV_ALIGN_CENTER );
lv.lv_label_set_text(ui_StepsActivity, "Still");
lv.lv_obj_set_style_text_color(ui_StepsActivity, lv.lv_color_hex(0xFFFFBD), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_text_font(ui_StepsActivity, lv.lv_font_OpenSans22Bold(), lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_PanelCount = lv.lv_obj_create(ui_Steps_Panel);
lv.lv_obj_set_width( ui_PanelCount, 206);
lv.lv_obj_set_height( ui_PanelCount, 49);
lv.lv_obj_set_x( ui_PanelCount, 0 );
lv.lv_obj_set_y( ui_PanelCount, 73 );
lv.lv_obj_set_align( ui_PanelCount, lv.LV_ALIGN_CENTER );
lv.lv_obj_set_flex_flow(ui_PanelCount,lv.LV_FLEX_FLOW_ROW);
lv.lv_obj_set_flex_align(ui_PanelCount, lv.LV_FLEX_ALIGN_SPACE_AROUND, lv.LV_FLEX_ALIGN_CENTER, lv.LV_FLEX_ALIGN_CENTER);
lv.lv_obj_clear_flag( ui_PanelCount, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags
lv.lv_obj_set_style_radius(ui_PanelCount, 20, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_bg_color(ui_PanelCount, lv.lv_color_hex(0x003CBD), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_bg_opa(ui_PanelCount, 255, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_border_side(ui_PanelCount, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_Steps_Value = lv.lv_label_create(ui_PanelCount);
lv.lv_obj_set_width( ui_Steps_Value, lv.LV_SIZE_CONTENT);  /// 1
lv.lv_obj_set_height( ui_Steps_Value, lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_align( ui_Steps_Value, lv.LV_ALIGN_CENTER );
lv.lv_label_set_text(ui_Steps_Value, Pinetime.getStepCount().toString());
lv.lv_obj_set_style_text_font(ui_Steps_Value, lv.lv_font_Numbers42(), lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

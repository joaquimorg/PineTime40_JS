lv.lv_obj_set_height( cui_Notification[msgpos], 108);
lv.lv_obj_set_width( cui_Notification[msgpos], lv.lv_pct(100));
lv.lv_obj_set_align( cui_Notification[msgpos], lv.LV_ALIGN_CENTER );
lv.lv_obj_set_flex_flow(cui_Notification[msgpos],lv.LV_FLEX_FLOW_COLUMN);
lv.lv_obj_set_flex_align(cui_Notification[msgpos], lv.LV_FLEX_ALIGN_SPACE_BETWEEN, lv.LV_FLEX_ALIGN_START, lv.LV_FLEX_ALIGN_START);
lv.lv_obj_add_flag( cui_Notification[msgpos], lv.LV_OBJ_FLAG_EVENT_BUBBLE );   /// Flags
lv.lv_obj_clear_flag( cui_Notification[msgpos], lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags
lv.lv_obj_set_scrollbar_mode(cui_Notification[msgpos], lv.LV_SCROLLBAR_MODE_OFF);
lv.lv_obj_set_style_bg_color(cui_Notification[msgpos], lv.lv_color_hex(0x303030), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_border_side(cui_Notification[msgpos], lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_left(cui_Notification[msgpos], 4, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_right(cui_Notification[msgpos], 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_top(cui_Notification[msgpos], 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_bottom(cui_Notification[msgpos], 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

cui_PanelType[msgpos] = lv.lv_obj_create(cui_Notification[msgpos]);
lv.lv_obj_set_height( cui_PanelType[msgpos], 26);
lv.lv_obj_set_width( cui_PanelType[msgpos], lv.lv_pct(100));
lv.lv_obj_set_align( cui_PanelType[msgpos], lv.LV_ALIGN_CENTER );
lv.lv_obj_set_flex_flow(cui_PanelType[msgpos],lv.LV_FLEX_FLOW_ROW);
lv.lv_obj_set_flex_align(cui_PanelType[msgpos], lv.LV_FLEX_ALIGN_START, lv.LV_FLEX_ALIGN_CENTER, lv.LV_FLEX_ALIGN_CENTER);
lv.lv_obj_clear_flag( cui_PanelType[msgpos], lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags
lv.lv_obj_set_style_radius(cui_PanelType[msgpos], 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_bg_opa(cui_PanelType[msgpos], 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_border_side(cui_PanelType[msgpos], lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_left(cui_PanelType[msgpos], 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_right(cui_PanelType[msgpos], 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_top(cui_PanelType[msgpos], 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_bottom(cui_PanelType[msgpos], 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

cui_TypeIcon[msgpos] = lv.lv_img_create(cui_PanelType[msgpos]);
lv.lv_img_set_src(cui_TypeIcon[msgpos], "F:msg.bin");
lv.lv_obj_set_width( cui_TypeIcon[msgpos], lv.LV_SIZE_CONTENT);  /// 1
lv.lv_obj_set_height( cui_TypeIcon[msgpos], lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_align( cui_TypeIcon[msgpos], lv.LV_ALIGN_CENTER );
lv.lv_obj_add_flag( cui_TypeIcon[msgpos], lv.LV_OBJ_FLAG_ADV_HITTEST );   /// Flags
lv.lv_obj_clear_flag( cui_TypeIcon[msgpos], lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags

cui_NotifType[msgpos] = lv.lv_label_create(cui_PanelType[msgpos]);
lv.lv_obj_set_width( cui_NotifType[msgpos], lv.lv_pct(100));
lv.lv_obj_set_height( cui_NotifType[msgpos], lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_align( cui_NotifType[msgpos], lv.LV_ALIGN_CENTER );
lv.lv_label_set_text(cui_NotifType[msgpos], "--");
lv.lv_obj_clear_flag( cui_NotifType[msgpos], lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags
lv.lv_obj_set_style_text_color(cui_NotifType[msgpos], lv.lv_color_hex(0xC8C8C8), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );

cui_NotifTitle[msgpos] = lv.lv_label_create(cui_Notification[msgpos]);
lv.lv_obj_set_width( cui_NotifTitle[msgpos], lv.lv_pct(100));
lv.lv_obj_set_height( cui_NotifTitle[msgpos], lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_align( cui_NotifTitle[msgpos], lv.LV_ALIGN_CENTER );
lv.lv_label_set_text(cui_NotifTitle[msgpos], "----");
lv.lv_obj_clear_flag( cui_NotifTitle[msgpos], lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags
lv.lv_obj_set_style_text_color(cui_NotifTitle[msgpos], lv.lv_color_hex(0xFFFFFF), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );

cui_NotifDate[msgpos] = lv.lv_label_create(cui_Notification[msgpos]);
lv.lv_obj_set_width( cui_NotifDate[msgpos], lv.LV_SIZE_CONTENT);  /// 1
lv.lv_obj_set_height( cui_NotifDate[msgpos], lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_align( cui_NotifDate[msgpos], lv.LV_ALIGN_CENTER );
lv.lv_label_set_text(cui_NotifDate[msgpos], "--:--");
lv.lv_obj_set_style_text_color(cui_NotifDate[msgpos], lv.lv_color_hex(0x808080), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_text_opa(cui_NotifDate[msgpos], 255, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
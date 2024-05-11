lv.lv_obj_clear_flag( ui_NotificationView, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags
lv.lv_obj_set_style_bg_color(ui_NotificationView, lv.lv_color_hex(0x000000), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );

ui_Notification_Panel = lv.lv_obj_create(ui_NotificationView);
lv.lv_obj_set_width( ui_Notification_Panel, lv.lv_pct(100));
lv.lv_obj_set_height( ui_Notification_Panel, lv.lv_pct(100));
lv.lv_obj_set_align( ui_Notification_Panel, lv.LV_ALIGN_CENTER );
lv.lv_obj_set_flex_flow(ui_Notification_Panel,lv.LV_FLEX_FLOW_COLUMN);
lv.lv_obj_set_flex_align(ui_Notification_Panel, lv.LV_FLEX_ALIGN_SPACE_EVENLY, lv.LV_FLEX_ALIGN_CENTER, lv.LV_FLEX_ALIGN_SPACE_EVENLY);
lv.lv_obj_clear_flag( ui_Notification_Panel, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags
lv.lv_obj_set_style_bg_color(ui_Notification_Panel, lv.lv_color_hex(0x000000), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_border_width(ui_Notification_Panel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_border_side(ui_Notification_Panel, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_left(ui_Notification_Panel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_right(ui_Notification_Panel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_top(ui_Notification_Panel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_bottom(ui_Notification_Panel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_IconPanel = lv.lv_obj_create(ui_Notification_Panel);
lv.lv_obj_set_height( ui_IconPanel, 26);
lv.lv_obj_set_width( ui_IconPanel, lv.lv_pct(100));
lv.lv_obj_set_align( ui_IconPanel, lv.LV_ALIGN_CENTER );
lv.lv_obj_set_flex_flow(ui_IconPanel,lv.LV_FLEX_FLOW_ROW);
lv.lv_obj_set_flex_align(ui_IconPanel, lv.LV_FLEX_ALIGN_SPACE_BETWEEN, lv.LV_FLEX_ALIGN_CENTER, lv.LV_FLEX_ALIGN_CENTER);
lv.lv_obj_clear_flag( ui_IconPanel, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags
lv.lv_obj_set_style_radius(ui_IconPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_bg_opa(ui_IconPanel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_border_side(ui_IconPanel, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_Type = lv.lv_label_create(ui_IconPanel);
lv.lv_obj_set_width( ui_Type, lv.LV_SIZE_CONTENT);  /// 1
lv.lv_obj_set_height( ui_Type, lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_align( ui_Type, lv.LV_ALIGN_CENTER );
lv.lv_label_set_text(ui_Type, '--');
lv.lv_obj_set_style_text_font(ui_Type, lv.lv_font_OpenSans22Bold(), lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_NotificationIcon = lv.lv_img_create(ui_IconPanel);
lv.lv_img_set_src(ui_NotificationIcon, "F:msg.bin");
lv.lv_obj_set_width( ui_NotificationIcon, lv.LV_SIZE_CONTENT);  /// 22
lv.lv_obj_set_height( ui_NotificationIcon, lv.LV_SIZE_CONTENT);   /// 22
lv.lv_obj_set_x( ui_NotificationIcon, 0 );
lv.lv_obj_set_y( ui_NotificationIcon, 10 );
lv.lv_obj_set_align( ui_NotificationIcon, lv.LV_ALIGN_TOP_MID );
lv.lv_obj_add_flag( ui_NotificationIcon, lv.LV_OBJ_FLAG_ADV_HITTEST );   /// Flags
lv.lv_obj_clear_flag( ui_NotificationIcon, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags

ui_PanelMsg = lv.lv_obj_create(ui_Notification_Panel);
lv.lv_obj_set_height( ui_PanelMsg, 205);
lv.lv_obj_set_width( ui_PanelMsg, lv.lv_pct(100));
lv.lv_obj_set_align( ui_PanelMsg, lv.LV_ALIGN_CENTER );
lv.lv_obj_set_flex_flow(ui_PanelMsg,lv.LV_FLEX_FLOW_COLUMN);
lv.lv_obj_set_flex_align(ui_PanelMsg, lv.LV_FLEX_ALIGN_START, lv.LV_FLEX_ALIGN_START, lv.LV_FLEX_ALIGN_START);
lv.lv_obj_clear_flag( ui_PanelMsg, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags
lv.lv_obj_set_style_radius(ui_PanelMsg, 20, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_bg_color(ui_PanelMsg, lv.lv_color_hex(0x202020), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_border_side(ui_PanelMsg, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_left(ui_PanelMsg, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_right(ui_PanelMsg, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_top(ui_PanelMsg, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_bottom(ui_PanelMsg, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_PanelMessage = lv.lv_obj_create(ui_PanelMsg);
lv.lv_obj_set_height( ui_PanelMessage, 172);
lv.lv_obj_set_width( ui_PanelMessage, lv.lv_pct(100));
lv.lv_obj_set_align( ui_PanelMessage, lv.LV_ALIGN_CENTER );
lv.lv_obj_set_flex_flow(ui_PanelMessage,lv.LV_FLEX_FLOW_COLUMN);
lv.lv_obj_set_flex_align(ui_PanelMessage, lv.LV_FLEX_ALIGN_START, lv.LV_FLEX_ALIGN_START, lv.LV_FLEX_ALIGN_START);
lv.lv_obj_clear_flag( ui_PanelMessage, lv.LV_OBJ_FLAG_SCROLL_CHAIN );    /// Flags
lv.lv_obj_set_style_radius(ui_PanelMessage, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_bg_opa(ui_PanelMessage, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_border_width(ui_PanelMessage, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_border_side(ui_PanelMessage, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_left(ui_PanelMessage, 4, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_right(ui_PanelMessage, 4, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_top(ui_PanelMessage, 4, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_bottom(ui_PanelMessage, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_Title = lv.lv_label_create(ui_PanelMessage);
lv.lv_obj_set_width( ui_Title, lv.lv_pct(100));
lv.lv_obj_set_height( ui_Title, lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_align( ui_Title, lv.LV_ALIGN_CENTER );
lv.lv_label_set_text(ui_Title, "-");
lv.lv_obj_set_style_text_font(ui_Title, lv.lv_font_OpenSans22Bold(), lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_Body = lv.lv_label_create(ui_PanelMessage);
lv.lv_obj_set_width( ui_Body, lv.lv_pct(100));
lv.lv_obj_set_height( ui_Body, lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_align( ui_Body, lv.LV_ALIGN_CENTER );
lv.lv_label_set_text(ui_Body, "-");

ui_PanelFooter = lv.lv_obj_create(ui_PanelMsg);
lv.lv_obj_set_width( ui_PanelFooter, lv.LV_SIZE_CONTENT);  /// 90
lv.lv_obj_set_height( ui_PanelFooter, lv.LV_SIZE_CONTENT);   /// 26
lv.lv_obj_set_align( ui_PanelFooter, lv.LV_ALIGN_CENTER );
lv.lv_obj_clear_flag( ui_PanelFooter, lv.LV_OBJ_FLAG_SCROLLABLE );    /// Flags
lv.lv_obj_set_style_radius(ui_PanelFooter, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_bg_opa(ui_PanelFooter, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_border_width(ui_PanelFooter, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_border_side(ui_PanelFooter, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_left(ui_PanelFooter, 10, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_right(ui_PanelFooter, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_top(ui_PanelFooter, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_bottom(ui_PanelFooter, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_NotificationTime = lv.lv_label_create(ui_PanelFooter);
lv.lv_obj_set_width( ui_NotificationTime, lv.LV_SIZE_CONTENT);  /// 1
lv.lv_obj_set_height( ui_NotificationTime, lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_align( ui_NotificationTime, lv.LV_ALIGN_LEFT_MID );
lv.lv_label_set_text(ui_NotificationTime, "--:--");
lv.lv_obj_set_width( ui_Messages_Panel, lv.lv_pct(100));
lv.lv_obj_set_height( ui_Messages_Panel, lv.lv_pct(100));
lv.lv_obj_set_align( ui_Messages_Panel, lv.LV_ALIGN_CENTER );
lv.lv_obj_clear_flag( ui_Messages_Panel, lv.LV_OBJ_FLAG_CLICKABLE | lv.LV_OBJ_FLAG_PRESS_LOCK | lv.LV_OBJ_FLAG_CLICK_FOCUSABLE | lv.LV_OBJ_FLAG_SNAPPABLE | lv.LV_OBJ_FLAG_SCROLLABLE | lv.LV_OBJ_FLAG_SCROLL_ELASTIC | lv.LV_OBJ_FLAG_SCROLL_MOMENTUM );    /// Flags
lv.lv_obj_set_style_bg_color(ui_Messages_Panel, lv.lv_color_hex(0x000000), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_border_side(ui_Messages_Panel, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_left(ui_Messages_Panel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_right(ui_Messages_Panel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_top(ui_Messages_Panel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_bottom(ui_Messages_Panel, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_MsgNoNotif = lv.lv_obj_create(ui_Messages_Panel);
lv.lv_obj_set_width( ui_MsgNoNotif, lv.lv_pct(100));
lv.lv_obj_set_height( ui_MsgNoNotif, lv.lv_pct(100));
lv.lv_obj_set_align( ui_MsgNoNotif, lv.LV_ALIGN_CENTER );
lv.lv_obj_set_flex_flow(ui_MsgNoNotif,lv.LV_FLEX_FLOW_COLUMN);
lv.lv_obj_set_flex_align(ui_MsgNoNotif, lv.LV_FLEX_ALIGN_SPACE_EVENLY, lv.LV_FLEX_ALIGN_CENTER, lv.LV_FLEX_ALIGN_SPACE_EVENLY);
lv.lv_obj_clear_flag( ui_MsgNoNotif, lv.LV_OBJ_FLAG_CLICKABLE | lv.LV_OBJ_FLAG_PRESS_LOCK | lv.LV_OBJ_FLAG_CLICK_FOCUSABLE | lv.LV_OBJ_FLAG_SNAPPABLE | lv.LV_OBJ_FLAG_SCROLLABLE | lv.LV_OBJ_FLAG_SCROLL_ELASTIC | lv.LV_OBJ_FLAG_SCROLL_MOMENTUM | lv.LV_OBJ_FLAG_SCROLL_CHAIN );    /// Flags
lv.lv_obj_set_style_radius(ui_MsgNoNotif, 10, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_bg_color(ui_MsgNoNotif, lv.lv_color_hex(0x202020), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_border_side(ui_MsgNoNotif, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_Messages_Info1 = lv.lv_label_create(ui_MsgNoNotif);
lv.lv_obj_set_width( ui_Messages_Info1, lv.LV_SIZE_CONTENT);  /// 1
lv.lv_obj_set_height( ui_Messages_Info1, lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_align( ui_Messages_Info1, lv.LV_ALIGN_TOP_MID );
lv.lv_label_set_text(ui_Messages_Info1,"Notifications");
lv.lv_obj_set_style_text_color(ui_Messages_Info1, lv.lv_color_hex(0x808080), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );

ui_Notification_Icon = lv.lv_label_create(ui_MsgNoNotif);
lv.lv_obj_set_width( ui_Notification_Icon, lv.LV_SIZE_CONTENT);  /// 1
lv.lv_obj_set_height( ui_Notification_Icon, lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_align( ui_Notification_Icon, lv.LV_ALIGN_CENTER );
lv.lv_label_set_text(ui_Notification_Icon,"\xEE\xA4\x8A");
lv.lv_obj_set_style_text_color(ui_Notification_Icon, lv.lv_color_hex(0x0000f0), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_text_font(ui_Notification_Icon, lv.lv_font_Icons32(), lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_Messages_Info2 = lv.lv_label_create(ui_MsgNoNotif);
lv.lv_obj_set_width( ui_Messages_Info2, lv.lv_pct(95));
lv.lv_obj_set_height( ui_Messages_Info2, lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_align( ui_Messages_Info2, lv.LV_ALIGN_CENTER );
lv.lv_label_set_text(ui_Messages_Info2,"You don't have new notifications...");
lv.lv_obj_set_style_text_align(ui_Messages_Info2, lv.LV_TEXT_ALIGN_CENTER, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

// ------------------------------------------------------------

ui_PanelListNotf = lv.lv_obj_create(ui_Messages_Panel);
lv.lv_obj_set_width( ui_PanelListNotf, lv.lv_pct(100));
lv.lv_obj_set_height( ui_PanelListNotf, lv.lv_pct(100));
lv.lv_obj_set_align( ui_PanelListNotf, lv.LV_ALIGN_CENTER );
lv.lv_obj_add_flag( ui_PanelListNotf, lv.LV_OBJ_FLAG_HIDDEN | lv.LV_OBJ_FLAG_EVENT_BUBBLE );   /// Flags
lv.lv_obj_clear_flag( ui_PanelListNotf, lv.LV_OBJ_FLAG_PRESS_LOCK | lv.LV_OBJ_FLAG_CLICK_FOCUSABLE | lv.LV_OBJ_FLAG_SNAPPABLE | lv.LV_OBJ_FLAG_SCROLLABLE | lv.LV_OBJ_FLAG_SCROLL_ELASTIC | lv.LV_OBJ_FLAG_SCROLL_MOMENTUM );    /// Flags
lv.lv_obj_set_scrollbar_mode(ui_PanelListNotf, lv.LV_SCROLLBAR_MODE_OFF);
lv.lv_obj_set_style_bg_color(ui_PanelListNotf, lv.lv_color_hex(0x000000), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT );
lv.lv_obj_set_style_border_side(ui_PanelListNotf, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_left(ui_PanelListNotf, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_right(ui_PanelListNotf, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_top(ui_PanelListNotf, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_bottom(ui_PanelListNotf, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_NotifHeader = lv.lv_obj_create(ui_PanelListNotf);
lv.lv_obj_set_height( ui_NotifHeader, 24);
lv.lv_obj_set_width( ui_NotifHeader, lv.lv_pct(100));
lv.lv_obj_set_align( ui_NotifHeader, lv.LV_ALIGN_TOP_MID );
lv.lv_obj_set_flex_flow(ui_NotifHeader,lv.LV_FLEX_FLOW_ROW);
lv.lv_obj_set_flex_align(ui_NotifHeader, lv.LV_FLEX_ALIGN_SPACE_BETWEEN, lv.LV_FLEX_ALIGN_CENTER, lv.LV_FLEX_ALIGN_CENTER);
lv.lv_obj_clear_flag( ui_NotifHeader, lv.LV_OBJ_FLAG_PRESS_LOCK | lv.LV_OBJ_FLAG_CLICK_FOCUSABLE | lv.LV_OBJ_FLAG_SNAPPABLE | lv.LV_OBJ_FLAG_SCROLLABLE | lv.LV_OBJ_FLAG_SCROLL_ELASTIC | lv.LV_OBJ_FLAG_SCROLL_MOMENTUM | lv.LV_OBJ_FLAG_SCROLL_CHAIN );    /// Flags
lv.lv_obj_set_style_radius(ui_NotifHeader, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_bg_opa(ui_NotifHeader, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_border_side(ui_NotifHeader, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_left(ui_NotifHeader, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_right(ui_NotifHeader, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_top(ui_NotifHeader, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_bottom(ui_NotifHeader, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_NotifHeadTitle = lv.lv_label_create(ui_NotifHeader);
lv.lv_obj_set_width( ui_NotifHeadTitle, lv.LV_SIZE_CONTENT);  /// 1
lv.lv_obj_set_height( ui_NotifHeadTitle, lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_align( ui_NotifHeadTitle, lv.LV_ALIGN_CENTER );
lv.lv_label_set_text(ui_NotifHeadTitle,"Notifications");

ui_NotifHeadTime = lv.lv_label_create(ui_NotifHeader);
lv.lv_obj_set_width( ui_NotifHeadTime, lv.LV_SIZE_CONTENT);  /// 1
lv.lv_obj_set_height( ui_NotifHeadTime, lv.LV_SIZE_CONTENT);   /// 1
lv.lv_obj_set_align( ui_NotifHeadTime, lv.LV_ALIGN_CENTER );
lv.lv_label_set_text(ui_NotifHeadTime,"00:00");
lv.lv_obj_set_style_text_font(ui_NotifHeadTime, lv.lv_font_OpenSans22Bold(), lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

ui_PanelNotif = lv.lv_obj_create(ui_PanelListNotf);
lv.lv_obj_set_width( ui_PanelNotif, lv.lv_pct(100));
lv.lv_obj_set_height( ui_PanelNotif, lv.lv_pct(88));
lv.lv_obj_set_x( ui_PanelNotif, 0 );
lv.lv_obj_set_y( ui_PanelNotif, 14 );
lv.lv_obj_set_align( ui_PanelNotif, lv.LV_ALIGN_CENTER );
lv.lv_obj_set_flex_flow(ui_PanelNotif,lv.LV_FLEX_FLOW_COLUMN_REVERSE);
lv.lv_obj_set_flex_align(ui_PanelNotif, lv.LV_FLEX_ALIGN_START, lv.LV_FLEX_ALIGN_START, lv.LV_FLEX_ALIGN_START);
lv.lv_obj_add_flag( ui_PanelNotif, lv.LV_OBJ_FLAG_EVENT_BUBBLE | lv.LV_OBJ_FLAG_SCROLL_CHAIN);   /// Flags
lv.lv_obj_clear_flag( ui_PanelNotif, lv.LV_OBJ_FLAG_SNAPPABLE );    /// Flags
lv.lv_obj_set_scroll_dir(ui_PanelNotif, lv.LV_DIR_VER);
lv.lv_obj_set_style_bg_opa(ui_PanelNotif, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_border_side(ui_PanelNotif, lv.LV_BORDER_SIDE_NONE, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_left(ui_PanelNotif, 5, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_right(ui_PanelNotif, 15, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_top(ui_PanelNotif, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);
lv.lv_obj_set_style_pad_bottom(ui_PanelNotif, 0, lv.LV_PART_MAIN| lv.LV_STATE_DEFAULT);

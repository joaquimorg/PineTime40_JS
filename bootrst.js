console.log('\n.bootrst init...\n');
//var _clkApp=require('Storage').read('clock.js');
//eval(_clkApp),
//delete _clkApp

{
  let lv = LVGL;

  let event_load = function(code, user) {
    Pinetime.load(user);
  };

  lv.lv_obj_clean(lv.lv_scr_act());
  lv.lv_obj_set_style_bg_color(lv.lv_scr_act(), lv.lv_color_hex(0x000000), lv.LV_PART_MAIN | lv.LV_STATE_DEFAULT);

  let load_button = lv.lv_btn_create(lv.lv_scr_act());
  lv.lv_obj_set_align( load_button, lv.LV_ALIGN_CENTER );
  lv.lv_obj_set_y( load_button, -40 );
  lv.lv_obj_add_event_cb(load_button, event_load, lv.LV_EVENT_CLICKED, 'pinetime40.js');

  let label = lv.lv_label_create(load_button);
  lv.lv_label_set_text(label, "Load Pinetime40");
  lv.lv_obj_center(label);

  let load_button2 = lv.lv_btn_create(lv.lv_scr_act());
  lv.lv_obj_set_align( load_button2, lv.LV_ALIGN_CENTER );
  lv.lv_obj_set_y( load_button2, 40 );
  lv.lv_obj_add_event_cb(load_button2, event_load, lv.LV_EVENT_CLICKED, 'clock.js');

  let label2 = lv.lv_label_create(load_button2);
  lv.lv_label_set_text(label2, "Load Clock");
  lv.lv_obj_center(label2);
}
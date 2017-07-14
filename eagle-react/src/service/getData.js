
import fetch from './../config/fetch';

/* 获取商铺评价列表 */
let fetchStationList = (offset, order_type = '') => fetch('GET', 'parking_areas/search_all_parking_area.json', {
  current_lat: 31.080063,
  current_lng: 121.516879,
  offset: 1,
  kms_range: 10000,
  distance_order: 0,
  appraisal_order: 0,
  order_type,
  limit: 10
});

export {
    fetchStationList,
}

/* 立即充电 */
let fetchStartCharge = (sid, pid) => fetch('POST', '/charge/start.json', {

});


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

let fetchStationChargingPileList = (offset, id = '') => fetch('GET', 'assistant/charging_piles/charging_piles_list.json', {
  id,
  offset: 1,
  limit: 10,
  auth_token: 'hVWKbBs7tbteqkcayUkz'
});

let fetchStationChargingPileState = (id = '') => fetch('GET', 'assistant/charging_piles/charging_piles_count.json', {
  id,
  auth_token: 'hVWKbBs7tbteqkcayUkz'
});

export {
    fetchStationList,
    fetchFindPile,
    fetchStationChargingPileList,
    fetchStationChargingPileState,
}

/* 立即充电 */
let fetchStartCharge = (sid, pid) => fetch('POST', '/charge/start.json', {

});

/* 输入桩号，查找桩详情 */
let fetchFindPile = (third_party_pile_id = '') => fetch('POST', '/charging_piles/check_third_party_pile_id.json?auth_token=BM3MEnVC8fJnZhsw4xSF', {
    third_party_pile_id
});

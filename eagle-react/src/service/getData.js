
import fetch from './../config/fetch';

export {
    fetchStationList,
    fetchFindPile,

    fetchOpsStationList,
    fetchOpsWarningCount,
    fetchStationChargingPileList,
    fetchStationChargingPileState,
    fetchOrderLsit,
    fetchOpsLoginOut,
}


/***************************** 测试相关接口 ********************************/
/***************************** ********** ********************************/

/* 获取充电站列表列表 */
let fetchStationList = (offset, order_type = '') => fetch('GET', 'api/parking_areas/search_all_parking_area.json', {
  current_lat: 31.080063,
  current_lng: 121.516879,
  offset: 1,
  kms_range: 10000,
  distance_order: 0,
  appraisal_order: 0,
  order_type,
  limit: 10
});

/* 立即充电 */
let fetchStartCharge = (sid, pid) => fetch('POST', 'api/charge/start.json', {

});

/* 输入桩号，查找桩详情 */
let fetchFindPile = (third_party_pile_id = '') => fetch('POST', 'api/charging_piles/check_third_party_pile_id.json?auth_token=BM3MEnVC8fJnZhsw4xSF', {
  third_party_pile_id
});


/***************************** 充电助手相关接口 ********************************/
/***************************** ************* ********************************/

/*退出登录*/
let fetchOpsLoginOut = () => fetch('DELETE', 'api/users/sign_out.json', {
  auth_token: 'hVWKbBs7tbteqkcayUkz'
});

/* 站点列表 */
let fetchOpsStationList = (offset, kwd = '', district_name = '') => fetch('GET', 'assistant/parking_areas/parking_area_list.json', {
  offset,
  kwd,
  limit: 10,
  district_name,
  auth_token: 'hVWKbBs7tbteqkcayUkz'
});

let fetchOpsWarningCount = () => fetch('GET', '/assistant/charging_piles/alarm_count.json', {
  auth_token: 'hVWKbBs7tbteqkcayUkz'
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

let fetchOrderLsit = (kwd = '', charging_record_state, limit, offset) => fetch('GET', '/assistant/charging_records/record_list.json', {
    kwd,
    charging_record_state,
    limit,
    offset,
    auth_token: 'hVWKbBs7tbteqkcayUkz'
});
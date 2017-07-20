
import fetch from './../config/fetch';

export {

    fetchOpsStationList,
    fetchOpsWarningCount,
    fetchStationChargingPileList,
    fetchStationChargingPileState,
    fetchOpsWarningOrderList,
    fetchOpsWarningPileList,
    fetchOrderLsit,
}


/***************************** 充电助手相关接口 ********************************/
/***************************** ************* ********************************/

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


let fetchOpsWarningOrderList = (kwd = '') => fetch('GET', 'assistant/charging_piles/charging_record_alarm.json', {
  kwd,
  auth_token: 'hVWKbBs7tbteqkcayUkz'
});

let fetchOpsWarningPileList = (kwd = '') => fetch('GET', '/assistant/charging_piles/charging_pile_alarm.json', {
    kwd,
    auth_token: 'hVWKbBs7tbteqkcayUkz'
});

let fetchOrderLsit = (kwd = '', charging_record_state, limit, offset) => fetch('GET', '/assistant/charging_records/record_list.json', {
    kwd,
    charging_record_state,
    limit,
    offset,
    auth_token: 'hVWKbBs7tbteqkcayUkz'
});
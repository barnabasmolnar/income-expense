// Action types
export const CHANGE_PERIOD = "CHANGE_PERIOD";
export const PREV_DATE = "PREV_DATE";
export const NEXT_DATE = "NEXT_DATE";
export const CHANGE_TYPE = "CHANGE_TYPE";

// Action creators
export const changePeriod = period => ({ type: CHANGE_PERIOD, period });
export const prevDate = () => ({ type: PREV_DATE });
export const nextDate = () => ({ type: NEXT_DATE });
export const changeType = newType => ({ type: CHANGE_TYPE, newType });
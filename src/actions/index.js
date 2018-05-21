// Action types
export const CHANGE_PERIOD = "CHANGE_PERIOD";
export const PREV_DATE = "PREV_DATE";
export const NEXT_DATE = "NEXT_DATE";
export const CHANGE_TYPE = "CHANGE_TYPE";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const SORT_ITEM = "SORT_ITEM";

// Action creators
export const changePeriod = period => ({ type: CHANGE_PERIOD, period });
export const prevDate = () => ({ type: PREV_DATE });
export const nextDate = () => ({ type: NEXT_DATE });
export const changeType = newType => ({ type: CHANGE_TYPE, newType });
export const addItem = item => ({ type: ADD_ITEM, item });
export const removeItem = id => ({ type: REMOVE_ITEM, id });
export const editItem = item => ({ type: EDIT_ITEM, item });
export const sortItem = (prop, order) => ({ type: SORT_ITEM, prop, order });
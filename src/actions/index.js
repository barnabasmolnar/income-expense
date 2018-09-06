import {myFetch, parseWith, convertDate} from "../helpers";

// Action types
export const CHANGE_PERIOD = "CHANGE_PERIOD";
export const PREV_DATE = "PREV_DATE";
export const NEXT_DATE = "NEXT_DATE";
export const CHANGE_TYPE = "CHANGE_TYPE";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const SORT_ITEM = "SORT_ITEM";
export const CATEG_FILTER = "CATEG_FILTER";
export const GET_ITEMS = "GET_ITEMS";

// Action creators
export const changePeriod = period => ({ type: CHANGE_PERIOD, period });
export const prevDate = () => ({ type: PREV_DATE });
export const nextDate = () => ({ type: NEXT_DATE });
export const changeType = newType => ({ type: CHANGE_TYPE, newType });
export const addItem = item => ({ type: ADD_ITEM, item });
export const removeItem = _id => ({ type: REMOVE_ITEM, _id });
export const editItem = item => ({ type: EDIT_ITEM, item });
export const sortItem = (prop, order) => ({ type: SORT_ITEM, prop, order });
export const categFilter = categ => ({ type: CATEG_FILTER, categ });

export const getItems = items => ({ type: GET_ITEMS, items });

// Async stuff:
export function fetchItems() {
    return dispatch => {
        myFetch("/api/items")
            .then(parseWith(convertDate))
            .then(items => dispatch(getItems(items)))
            .catch(err => console.log(err))
    }
}

export function addItemAsync(item) {
    return dispatch => {
        myFetch("/api/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(item)
        })
            .then(parseWith(convertDate))
            .then(item => dispatch(addItem(item)))
            .catch(err => console.log(err))
    }
}

export function editItemAsync(item) {
    return dispatch => {
        myFetch(`/api/items/${item._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(item)
        })
            .then(parseWith(convertDate))
            .then(newItem => dispatch(editItem(newItem)))
            .catch(err => console.log(err))
    }
}

export function removeItemAsync(_id) {
    return dispatch => {
        myFetch(`/api/items/${_id}`, {
            method: "DELETE"
        })
            .then(() => dispatch(removeItem(_id)))
            .catch(err => console.log(err))
    }
}
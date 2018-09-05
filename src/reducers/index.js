import { combineReducers } from "redux";
import moment from "moment";
import {
    CHANGE_PERIOD,
    PREV_DATE,
    NEXT_DATE,
    CHANGE_TYPE,
    ADD_ITEM,
    REMOVE_ITEM,
    EDIT_ITEM,
    SORT_ITEM,
    CATEG_FILTER,
    GET_ITEMS
} from "../actions/index";

const initialDate = {
    period: "year",
    timestamp: moment()
}

// Helper function
// Change the date by 1 period (week/month/year) in either direction (add/subtract)
const changeDate = (state, changeDir) => {
	const date = state.timestamp.clone(); //clone it to keep the state pure
    date[changeDir](1, `${state.period}s`); // e.g. date.add(1, "weeks") or date.subtract(1, "months")
    return Object.assign({}, state, { timestamp: date });
}

// Reducers
const items = (state = [], action) => {
    switch (action.type) {
        case GET_ITEMS:
            return action.items
        case ADD_ITEM:
            return [...state, action.item];
        case REMOVE_ITEM:
            return state.filter(item => item._id !== action._id);
        case EDIT_ITEM:
            return state.map(item => item._id === action.item._id ? action.item : item);
        default:
            return state;
    }
}
const initialSortState = { prop: "dateAdded", order: "desc" };
const sortItems = (state = initialSortState, action) => {
    switch (action.type) {
        case SORT_ITEM:
            return { prop: action.prop, order: action.order };
        default:
            return state;
    }
}

const filterByCateg = (state = "all", action) => {
    switch (action.type) {
        case CATEG_FILTER:
            return action.categ;
        default:
            return state;
    }
}

const date = (state = initialDate, action) => {
    switch (action.type) {
        case CHANGE_PERIOD:
            return Object.assign({}, state, { period: action.period });
        case PREV_DATE:
            return changeDate(state, "subtract");
        case NEXT_DATE:
            return changeDate(state, "add");
        default:
            return state;
    }
}

const type = (state = null, action) => action.type === CHANGE_TYPE ? action.newType : state;

const reducers = combineReducers({
    items,
    sortItems,
    date,
    type,
    filterByCateg
});

export default reducers;
// - kategória (required) - select
// - name (required)
// - amount (required)
// - date added (auto generated)
// - extra info (type: string, optional)
// - username (optional, ez esetleg egy későbbi feature-hez, de esetleg itt be lehetne rakni opcionálisan már)
// - typeRecurring (type: boolean, optional)
// - ja hogy legyen egy preset mondjuk gomb formájában a
//   typeRecurring: true-s tételekre és akkor, ha arra nyomsz az
//   kitöltse a legutóbbi alapján, de persze elküldés előtt tudd módosítani?

import { combineReducers } from "redux";
import moment from "moment";
import {
    CHANGE_PERIOD,
    PREV_DATE,
    NEXT_DATE,
    CHANGE_TYPE,
    changePeriod,
    prevDate,
    nextDate,
    changeType,
    ADD_ITEM,
    REMOVE_ITEM,
    EDIT_ITEM,
    SORT_ITEM,
    CATEG_FILTER,
    GET_ITEMS
} from "../actions/index";
import uuid from "uuid/v1";

const initialItems = [
    {
        id: "1",
        type: "expense",
        category: "food",
        title: "Pizza from Pizza Forte",
        amount: 2820,
        currency: "HUF",
        dateAdded: new Date("2018-02-24T23:17:00"),
        extraInfo: "Lorem ipsum blabla nice little extra text info here",
        userName: "Roy",
        isRecurring: false
    },
    {
        id: "2",
        type: "expense",
        category: "travel",
        title: "Monthly pass",
        amount: 7650,
        currency: "HUF",
        dateAdded: new Date("2018-02-24T23:17:00"),
        extraInfo: "",
        userName: "Roy's Mom",
        isRecurring: true
    },
    {
        id: "3",
        type: "income",
        category: "wage",
        title: "Monthly wage",
        amount: 266000,
        currency: "HUF",
        dateAdded: new Date("2018-02-10T10:00:00"),
        extraInfo: "yay",
        userName: "Roy",
        isRecurring: true
    },
    {
        id: "4",
        type: "expense",
        category: "repairs",
        title: "Bathroom repairs",
        amount: 1200,
        currency: "HUF",
        dateAdded: new Date("2018-01-16T10:00:00"),
        extraInfo: "Ugh...",
        userName: "Roy's Mom",
        isRecurring: false
    },
    {
        id: "5",
        type: "expense",
        category: "food",
        title: "Chicken",
        amount: 2920,
        currency: "HUF",
        dateAdded: new Date("2018-02-19T23:17:00"),
        extraInfo: "Tasty food",
        userName: "Roy",
        isRecurring: false
    },
    {
        id: "6",
        type: "income",
        category: "gift",
        title: "Christmas gift",
        amount: 40000,
        currency: "HUF",
        dateAdded: new Date("2017-12-24T18:00:00"),
        extraInfo: "",
        userName: "Roy",
        isRecurring: true
    }
]

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
            const items = action.items.map(item => ({...item, dateAdded: new Date(item.dateAdded)}))
            return items;
        case ADD_ITEM:
            const item = {...action.item, dateAdded: new Date(action.item.dateAdded)}
            return [...state, item];
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

// Just trying out stuff
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

// Pro megoldasok:
// https://jsfiddle.net/tothatt/7n8c88sv/

export default reducers;
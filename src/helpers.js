import moment from "moment";

// Filtering
export const getWeek = date => `${date.isoWeekYear()}W${date.isoWeek()}`; //e.g 2018W9

export const inPeriod = (date, item) => {
    const dateAdded = moment(item.dateAdded);
    return date.period === "week" ?
        getWeek(date.timestamp) === getWeek(dateAdded)
        : date.timestamp.isSame(dateAdded, date.period);
};

export const hasType = (type, item) => type === null ? true : type === item.type;

export const isDefaultOrEqual = (val1, val2, defaultVal) => val1 === defaultVal ? true : val1 === val2;
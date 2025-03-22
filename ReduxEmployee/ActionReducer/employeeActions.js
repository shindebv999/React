import { ALL, SINGLE } from "./actionTypes";

const allRecords = ( d ) => {
    return {
        type: ALL,
        payload: d
    }
}

const singleEmployee = ( x ) => {
    return {
        type: SINGLE,
        payload: x
    }
}

export { allRecords, singleEmployee };
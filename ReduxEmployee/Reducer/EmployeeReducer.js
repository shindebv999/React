import { ALL, SINGLE} from "../ActionReducer/actionTypes";

const initialState = {
    allEmps: [],
    emp: {},
    loginDetails: {}
}

const employeeReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case ALL:
            return {
                ...state,
                allEmps: action.payload
            }
        case SINGLE: {
            return {
                ...state,
                emp: action.payload
            }
        }
        default:
            return state;
    }
};
export default employeeReducer;
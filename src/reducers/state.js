import {
    HOME,
    ACCESS_FORM,
    CONFIRM,
    SELECT_ORGANIZATION,
    SHOW_TABLE,
    ACCESS_TOKEN
} from '../utils/strings.json'


export const initialState = {
    state: '',
    accessToken: ''
}

export const tokenActionCreator = (data) => {
    return {
        type: ACCESS_TOKEN,
        data
    }
}

export const homeAction = {
    type: HOME,
}

export const AccessFormAction = {
    type: ACCESS_FORM,
}

export const SelectOrganizationAction = {
    type: SELECT_ORGANIZATION,
}

export const showTableAction = {
    type: SHOW_TABLE,
}

export const confirmAction = {
    type: CONFIRM,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HOME:
            return {
                ...state,
                state: HOME}
        case ACCESS_FORM:
            return {
                ...state,
                state: ACCESS_FORM}
        case SELECT_ORGANIZATION:
            return {
                ...state,
                state: SELECT_ORGANIZATION}
        case SHOW_TABLE:
            return {
                ...state,
                state: SHOW_TABLE}
        case CONFIRM:
            return {
                ...state,
                state: CONFIRM}
        case ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.data
            }
        default:
            return state;
    }
}

export default reducer;

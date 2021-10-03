import {
  HOME,
  ACCESS_FORM,
  CONFIRM,
  SELECT_ORGANIZATION,
  SHOW_TABLE,
  ACCESS_TOKEN,
  DELETE_SUCCESS,
  DELETE_ERROR,
  IDLE,
  ERROR,
  SUCCESS,
} from '../utils/strings.json';

export const initialState = {
  state: '',
  accessToken: '',
  result: IDLE,
};

export const successAction = {
  type: DELETE_SUCCESS,
};

export const errorAction = {
  type: DELETE_ERROR,
};

export const tokenActionCreator = (data) => ({
  type: ACCESS_TOKEN,
  data,
});

export const homeAction = {
  type: HOME,
};

export const AccessFormAction = {
  type: ACCESS_FORM,
};

export const SelectOrganizationAction = {
  type: SELECT_ORGANIZATION,
};

export const showTableAction = {
  type: SHOW_TABLE,
};

export const confirmAction = {
  type: CONFIRM,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME:
      return {
        ...state,
        state: HOME,
      };
    case ACCESS_FORM:
      return {
        ...state,
        state: ACCESS_FORM,
      };
    case SELECT_ORGANIZATION:
      return {
        ...state,
        state: SELECT_ORGANIZATION,
      };
    case SHOW_TABLE:
      return {
        ...state,
        state: SHOW_TABLE,
      };
    case CONFIRM:
      return {
        ...state,
        state: CONFIRM,
      };
    case ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.data,
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        result: SUCCESS,
      };
    case DELETE_ERROR:
      return {
        ...state,
        result: ERROR,
      };
    default:
      return state;
  }
};

export default reducer;

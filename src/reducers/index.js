import state from './state'
import {combineReducers} from "redux";
import organizations from "./organizations";

// initialState를 기준으로 reducer 파일을 분리시킴.
// reducer: 이전 상태와 액션을 이용해서 다음 상태를 결정
const rootReducer = combineReducers({
    state,
    organizations
});

export default rootReducer;

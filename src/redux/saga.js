import { takeEvery, put } from "redux-saga/effects";
import { USER_LIST, SET_USER_DATA } from "./constant";

function* userList() {
    const url = 'https://dummyjson.com/posts';
    let data = yield fetch(url);
    data = yield data.json();
    yield put({type: SET_USER_DATA, data})
}
function* sagaData() {
    yield takeEvery(USER_LIST, userList)
}
export default sagaData;
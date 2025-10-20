import { all } from "redux-saga/effects";
import { watchProductsSaga } from ".";

export default function* rootSaga() {
    yield all([watchProductsSaga()]);
}

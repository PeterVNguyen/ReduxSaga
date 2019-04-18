import { delay } from "redux-saga";
import { all } from "redux-saga/effects";

import { watchIncrement, watchDecrement } from "./couterSagas";

export default function* rootSaga() {
  yield all([watchDecrement(), watchIncrement()]);
}

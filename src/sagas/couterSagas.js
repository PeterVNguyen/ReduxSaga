import { INCREMENT, DECREMENT } from "../actions/actionType";

import { delay } from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";

function* increment() {
  console.log("this is increment");
}

export function* watchIncrement() {
  yield takeEvery(INCREMENT, increment);
}

function* decrement() {
  console.log("this is decrement");
}

export function* watchDecrement() {
  yield takeEvery(DECREMENT, decrement);
}

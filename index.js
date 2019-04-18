/**
 * @format
 */
import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
//redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
//reducer
import allReducers from "./src/reducers";
import CouterContainer from "./src/containers/CouterContainer";
//redux sagas
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();
import rootSaga from "./src/sagas/rootSaga";
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
const App = () => {
  return (
    <Provider store={store}>
      <CouterContainer />
    </Provider>
  );
};
sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent(appName, () => App);

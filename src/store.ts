import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import combinedReducers from "./Reducers";
import rootSaga from "./rootSaga"

const sagaMiddleware = createSagaMiddleware();



const composeEnhancers = typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  }) : compose;

const enhancer = composeEnhancers( applyMiddleware(sagaMiddleware) );

export const store = createStore(combinedReducers, enhancer);

sagaMiddleware.run(rootSaga);
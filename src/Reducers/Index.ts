import { combineReducers } from "redux";
import { reducer as ui } from "redux-ui";
import * as Counter from "./Counter/Counter"
import * as Login from "./Login/Reducer"

export interface RootState {
   counter: Counter.State
   login: Login.State
   ui: any
}

export default combineReducers<RootState>({
   counter: Counter.reducer,
   login: Login.reducer,
   ui
});
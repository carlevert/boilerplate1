import * as Actions from "./Actions";
import { isType, Action } from "typescript-fsa";

export interface State {
   loggedIn: boolean;
   validating: boolean;
   token: string;
   username: string;
   password: string;
}

const initialState = {
   loggedIn: false,
   validating: false,
   token: "",
   username: "username",
   password: "password"
}

export const reducer = (state: State = initialState, action: Action<any>): State => {

   if (isType(action, Actions.setUsername)) {
      return {
         ...state,
         username: action.payload
      }
   }

   if (isType(action, Actions.setPassword)) {
      return {
         ...state,
         password: action.payload
      }
   }

   if (isType(action, Actions.validateLogin.started)) {
      return {
         ...state,
         validating: true
      }
   }
   if (isType(action, Actions.validateLogin.done)) {
      const { result } = action.payload;
      const loggedIn = result.token.length > 0;
      return {
         ...state,
         loggedIn,
         validating: false,
         token: result.token,
         password: ""
      }
   }
   if (isType(action, Actions.validateLogin.failed)) {
      return {
         ...state,
         validating: false
      }
   }

   if (isType(action, Actions.signOut)) {
      return {
         ...initialState
      }
   }

   return state;

}
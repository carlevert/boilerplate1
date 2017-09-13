import { isType, actionCreatorFactory, Action } from "typescript-fsa";
import * as Actions from "./Actions"

export interface State {
   counter: number;
   isCounting: boolean;
}

export const initialState: State = {
   counter: 0,
   isCounting: false
}

export const reducer = (state: State = initialState, action: Action<any>): State => {
   
   console.log(action);

   if (isType(action, Actions.incrementAsync.done)) {
      const { params } = action.payload;
      return {
         counter: state.counter + params.n,
         isCounting: false
      }
   }

   if (isType(action, Actions.incrementAsync.started)) {
      return { 
         ...state,
         isCounting: true
      }
   }

   if (isType(action, Actions.incrementAsync.failed)) {
      return {
         ...state,
         isCounting: false
      }
   }

   if (isType(action, Actions.decrement)) {
      return {
         ...state,
         counter: state.counter - 1,
         isCounting: false
      }
   }
   
   return state;

}



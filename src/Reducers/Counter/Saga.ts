import * as Saga from "redux-saga";
import { bindAsyncAction } from "typescript-fsa-redux-saga";
import { actionCreatorFactory, Action } from "typescript-fsa";

import { triggerIncrementAsync, incrementAsync, IncrementParams, IncrementResult } from "./Actions"

// Async function which does all work
const incrementFunc = async (params: IncrementParams) =>
   new Promise<IncrementResult>(resolve => setTimeout(() => resolve({ result: params.n + 1 }), 2000))

const incrementAsyncWorker = bindAsyncAction(incrementAsync)(
   function* (params): Saga.SagaIterator {
      const result = yield Saga.effects.call(incrementFunc, params);
      return result;
   }
)

export default function* watcher() {
   const action = yield Saga.effects.takeLatest(triggerIncrementAsync.type, function* (action: Action<IncrementParams>) {
      // const state = yield Saga.effects.select();
      yield Saga.effects.call(incrementAsyncWorker, action.payload)
   });
}
import { actionCreatorFactory, Action } from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export interface IncrementParams { n: number; }
export interface IncrementResult { result: number; }

export const triggerIncrementAsync = actionCreator<IncrementParams>("TRIGGER_INCREMENT_ASYNC");

export const incrementAsync = actionCreator.async<IncrementParams, IncrementResult>("INCREMENT_ASYNC");

export const decrement = actionCreator("DECREMENT");
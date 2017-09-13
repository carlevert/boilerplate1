import { call, fork, take, put } from "redux-saga/Effects";
import { SagaIterator } from "redux-saga";
import { bindAsyncAction } from "typescript-fsa-redux-saga";
import { actionCreatorFactory, Action } from "typescript-fsa";

import { signIn, signOut, validateLogin, ValidateLoginParams, ValidateLoginResult } from "./Actions"

// Async function which does all work
async function validateSignInAsync(params: ValidateLoginParams) {
	return new Promise<ValidateLoginResult>((resolve, reject) => {
		setTimeout(() => {
			if (params.username == "username" && params.password == "password") {
				const signin = { username: "username", token: "secrettoken" }
				localStorage.setItem("signin", JSON.stringify(signin));
				resolve({ token: "secrettoken" });
			}
			else {
				const error: ValidateLoginResult = { token: "" }
				reject(error);
			}
		}, 2000)
	});
}

async function alreadySignedIn() {
	const signin = localStorage.getItem("signin");
	if (signin != null) {
		const parsed = JSON.parse(signin);
		if (parsed.token.length > 0)
			return parsed;
		else
			return {}
	}
	else
		return {};
}

function* worker(params: ValidateLoginParams) {
	try {
		yield put(validateLogin.started(params));
		const result = yield call(validateSignInAsync, params);
		yield put(validateLogin.done({ params, result }));
	} catch (error) {
		yield put(validateLogin.failed({ params, error }))
	}
}



export default function* watcher() {

	while (true) {

		const signedIn = yield call(alreadySignedIn);

		if (signedIn && signedIn.token) {
			yield put(validateLogin.done(
				{
					params: {
						password: "",
						username: signedIn.username
					},
					result: {
						token: signedIn.token
					}
				}));
		}
		else {
			const signInAction = yield take(signIn);
			yield call(worker, signInAction.payload)

			const action = yield take(validateLogin.done)
			debugger;
			
			yield take(signOut);
			localStorage.removeItem("signin");
		}
	}

}


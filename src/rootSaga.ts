import counterSaga from "./Reducers/Counter/Saga"
import loginSaga from "./Reducers/Login/Saga"

export default function* rootSaga() {
   yield [
      counterSaga(),
      loginSaga()
   ]
}
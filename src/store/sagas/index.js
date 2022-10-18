import { all } from "redux-saga/effects";
import watchLoad from "./getCharactersSaga";

export default function* rootSaga() {
  yield all([watchLoad()]);
}

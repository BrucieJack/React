import { all } from "redux-saga/effects";
import watchLoadCharacters from "./getCharactersSaga";
import watchLoadEpisodes from "./getEpisodesSaga";

export default function* rootSaga() {
  yield all([watchLoadCharacters(), watchLoadEpisodes()]);
}

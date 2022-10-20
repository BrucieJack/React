import { all } from "redux-saga/effects";
import watchLoadCharacter from "./getCharacterByIdSaga";
import watchLoadCharacters from "./getCharactersSaga";
import watchLoadEpisodes from "./getEpisodesSaga";
import watchLoadEpisode from "./getEpisodeByIdSaga";

export default function* rootSaga() {
  yield all([
    watchLoadCharacters(),
    watchLoadEpisodes(),
    watchLoadCharacter(),
    watchLoadEpisode(),
  ]);
}

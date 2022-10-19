import axios from "axios";
import { call, takeEvery, put } from "redux-saga/effects";
import { putEpisodes } from "../actions/episodes";

export const getAllEpisodes = () => {
  return axios.get("https://rickandmortyapi.com/api/episode").then((res) => {
    return res.data.results;
  });
};

export default function* putData() {
  try {
    const episodes = yield call(getAllEpisodes);
    yield put(putEpisodes(episodes));
  } catch (error) {}
}

export function* watchLoadEpisodes() {
  yield takeEvery("GET_EPISODES", putData);
}

import axios from "axios";
import { call, takeEvery, put } from "redux-saga/effects";
import { putEpisodes } from "../actions/episodes";
import { allEpisodes } from "@constants/url";

export const getAllEpisodes = () => {
  return axios.get(allEpisodes).then((res) => {
    return res.data.results;
  });
};

function* putData() {
  try {
    const episodes = yield call(getAllEpisodes);
    yield put(putEpisodes(episodes));
  } catch (error) {
    console.log(error);
  }
}

export default function* watchLoadEpisodes() {
  yield takeEvery("GET_EPISODES", putData);
}

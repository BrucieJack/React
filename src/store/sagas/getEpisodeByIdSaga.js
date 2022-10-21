import axios from "axios";
import { call, takeEvery, put, take, takeLatest } from "redux-saga/effects";
import { putEpisode } from "../actions/episodes";
import { allEpisodes } from "@constants/url";

export const getEpisodeById = (id) => {
  return axios.get(allEpisodes + "/" + id).then((res) => {
    return res.data;
  });
};

function* putData(action) {
  try {
    console.log(action);
    const episode = yield call(getEpisodeById, action.payload);
    yield put(putEpisode(episode));
  } catch (error) {
    console.log(error);
  }
}

export default function* watchLoadEpisode() {
  yield takeLatest("GET_EPISODE_BY_ID", putData);
}

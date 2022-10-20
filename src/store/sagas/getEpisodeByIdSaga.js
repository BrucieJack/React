import axios from "axios";
import { call, takeEvery, put, take, takeLatest } from "redux-saga/effects";
import { putEpisode } from "../actions/episodes";
import { allEpisodes } from "@constants/url";

export const getEpisodeById = (id) => {
  return axios.get(allEpisodes + "/" + id).then((res) => {
    return res.data;
  });
};

export default function* putData(action) {
  try {
    // console.log(action);
    const action = yield take("GET_EPISODE_BY_ID");
    const episode = yield call(getEpisodeById, action.payload);
    yield put(putEpisode(episode));
  } catch (error) {
    console.log(error);
  }
}

export function* watchLoadEpisode() {
  yield takeLatest("GET_EPISODE_BY_ID", putData);
}

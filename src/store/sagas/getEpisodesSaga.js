import axios from "axios";
import { call, takeEvery, put } from "redux-saga/effects";
import { putEpisodes } from "../actions/episodes";
import { rickAndMorty } from "@constants/url";

export const getAllEpisodes = (page) => {
  return axios.get(rickAndMorty + `/episode/?page=${page}`).then((res) => {
    return res.data.results;
  });
};

function* putData(action) {
  try {
    const episodes = yield call(getAllEpisodes, action.payload);
    yield put(putEpisodes(episodes));
  } catch (error) {
    console.log(error);
  }
}

export default function* watchLoadEpisodes() {
  yield takeEvery("GET_EPISODES", putData);
}

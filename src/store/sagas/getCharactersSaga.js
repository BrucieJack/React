import axios from "axios";
import { call, takeEvery, put } from "redux-saga/effects";
import { putCharacters } from "../actions/characters";
import { rickAndMorty } from "@constants/url";

export const getAllCharacters = (page) => {
  return axios.get(rickAndMorty + `/character/?page=${page}`).then((res) => {
    return res.data.results;
  });
};

function* putData(action) {
  try {
    const characters = yield call(getAllCharacters, action.payload);
    yield put(putCharacters(characters));
  } catch (error) {
    console.log(error);
  }
}

export default function* watchLoadCharacters() {
  yield takeEvery("GET_CHARACTERS", putData);
}

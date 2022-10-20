import axios from "axios";
import { call, takeEvery, put } from "redux-saga/effects";
import { putCharacters } from "../actions/characters";
import { allCharacters } from "@constants/url";

export const getAllCharacters = () => {
  return axios.get(allCharacters).then((res) => {
    return res.data.results;
  });
};

export default function* putData() {
  try {
    const characters = yield call(getAllCharacters);
    yield put(putCharacters(characters));
  } catch (error) {
    console.log(error);
  }
}

export function* watchLoadCharacters() {
  yield takeEvery("GET_CHARACTERS", putData);
}

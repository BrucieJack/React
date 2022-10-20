import axios from "axios";
import { call, takeEvery, put, take, takeLatest } from "redux-saga/effects";
import { putCharacter } from "../actions/characters";
import { allCharacters } from "@constants/url";

export const getCharacterById = (id) => {
  return axios.get(allCharacters + "/" + id).then((res) => {
    return res.data;
  });
};

export default function* putData(action) {
  try {
    const action = yield take("GET_CHARACTER_BY_ID");
    console.log(action);
    const character = yield call(getCharacterById, action.payload);
    yield put(putCharacter(character));
  } catch (error) {
    console.log(error);
  }
}

export function* watchLoadCharacter() {
  yield takeLatest("GET_CHARACTER_BY_ID", putData);
}

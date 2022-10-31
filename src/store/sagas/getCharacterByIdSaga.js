import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { putCharacter } from "../actions/characters";
import { rickAndMorty } from "@constants/url";

export const getCharacterById = (id) => {
  return axios.get(rickAndMorty + "/character/" + id).then((res) => {
    return res.data;
  });
};

function* putData(action) {
  try {
    const character = yield call(getCharacterById, action.payload);
    yield put(putCharacter(character));
  } catch (error) {
    console.log(error);
  }
}

export default function* watchLoadCharacter() {
  yield takeLatest("GET_CHARACTER_BY_ID", putData);
}

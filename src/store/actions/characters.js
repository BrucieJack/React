export const getCharacters = () => ({ type: "GET_CHARACTERS" });

export const getCharacterById = (id) => ({
  type: "GET_CHARACTER_BY_ID",
  payload: id,
});

export const putCharacters = (data) => ({
  type: "PUT_CHARCTERS",
  payload: data,
});

export const putCharacter = (data) => ({
  type: "PUT_CHARCTER",
  payload: data,
});

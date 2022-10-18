export default function characters(state = [], action) {
  switch (action.type) {
    case "PUT_CHARCTERS":
      return action.payload;

    default:
      return state;
  }
}

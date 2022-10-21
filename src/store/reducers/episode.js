export default function episode(state = [], action) {
  switch (action.type) {
    case "PUT_EPISODE":
      return action.payload;

    default:
      return state;
  }
}

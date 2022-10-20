export default function character(state = [], action) {
  switch (action.type) {
    case "PUT_CHARCTER":
      return action.payload;
    default:
      return state;
  }
}

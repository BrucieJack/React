export default function episodes(state = [], action) {
  switch (action.type) {
    case "PUT_EPISODES":
      return action.payload;

    default:
      return state;
  }
}

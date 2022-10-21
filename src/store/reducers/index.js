import { combineReducers } from "redux";
import characters from "./characters";
import episodes from "./episodes";
import character from "./cahracter";
import episode from "./episode";

export default combineReducers({ characters, episodes, character, episode });

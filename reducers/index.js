import { combineReducers } from "redux";
import { currentFlies } from "./currentFlies";
import { currentFlyEntry } from "./currentFlyEntry";
import { currentFishEntry } from "./currentFishEntry";
import { selectedFlyId } from "./selectedFlyId";
import { currentFish } from "./currentFish";
import { selectedFishId } from "./selectedFishId";

const rootReducer = combineReducers({
  currentFlies,
  currentFlyEntry,
  selectedFlyId,
  currentFishEntry,
  currentFish,
  selectedFishId,
});

export default rootReducer;

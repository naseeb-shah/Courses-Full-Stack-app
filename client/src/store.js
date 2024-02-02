import { createStore } from "redux";
import { dataReducer } from "./redux/reducers";
export const store = createStore(dataReducer);

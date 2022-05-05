import { combineReducers, legacy_createStore } from "redux";
import { Authreducer } from "./Auth/reducer";
const rootReducer = combineReducers({
   Authreducer: Authreducer
})

export const store = legacy_createStore(rootReducer);

store.subscribe(() => {
   console.log("Subscriber:", store.getState());
});

import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension/";
import catReducer from "./reducers/catReducer";
import thunk from "redux-thunk";

const store = createStore(
    catReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
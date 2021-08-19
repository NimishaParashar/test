import { compose, createStore, applyMiddleware } from "redux";
///////////////
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
/////////////
import thunk from "redux-thunk";
///////////////
import rootReducer from "../reducers";

const persistConfig = {
  key: "motion",
  storage,
  blacklist: ["ui"], // ui will not be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk];

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(...middlewares)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Comment this line for build
  )
);

export const persistor = persistStore(store);

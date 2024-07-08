import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./slices/gameSlice";
import rankingReducer from "./slices/rankingSlice";

const store = configureStore({
  reducer: {
    games: gameReducer,
    rankings: rankingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

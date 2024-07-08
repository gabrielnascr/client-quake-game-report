import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Game {
  total_kills: number;
  players: string[];
  kills: Record<string, number>;
}

interface GameState {
  games: Game[];
  loading: boolean;
  error: string | null;
}

const initialState: GameState = {
  games: [],
  loading: false,
  error: null,
};

export const fetchGames = createAsyncThunk("games/fetchGames", async () => {
  const response = await axios.get("http://localhost:3000/matches/report");
  return response.data.matches;
});

const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.loading = false;
        state.games = action.payload;
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch games";
      });
  },
});

export default gameSlice.reducer;

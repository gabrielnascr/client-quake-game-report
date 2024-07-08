import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Ranking {
  ranking_position: number;
  player: string;
  total_kills: number;
  total_deaths: number;
}

interface RankingState {
  rankings: Ranking[];
  loading: boolean;
  error: string | null;
}

const initialState: RankingState = {
  rankings: [],
  loading: false,
  error: null,
};

export const fetchRankings = createAsyncThunk(
  "rankings/fetchRankings",
  async () => {
    const response = await axios.get("http://localhost:3000/matches/report");
    return response.data.ranking;
  }
);

const rankingSlice = createSlice({
  name: "rankings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRankings.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRankings.fulfilled, (state, action) => {
        state.loading = false;
        state.rankings = action.payload;
      })
      .addCase(fetchRankings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch rankings";
      });
  },
});

export default rankingSlice.reducer;

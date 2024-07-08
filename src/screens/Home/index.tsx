import { useSelector } from "react-redux";
import HomeView from "./view";
import store, { RootState } from "../../stores";
import { useEffect } from "react";
import { fetchRankings } from "../../stores/slices/rankingSlice";
import { fetchGames } from "../../stores/slices/gameSlice";

export default function Home() {
  const { games, loading: gamesLoading } = useSelector(
    (store: RootState) => store.games
  );
  const { rankings, loading: rankingLoading } = useSelector(
    (store: RootState) => store.rankings
  );

  useEffect(() => {
    store.dispatch(fetchRankings());
    store.dispatch(fetchGames());
  }, []);

  return (
    <HomeView
      games={games}
      ranking={rankings}
      gamesLoading={gamesLoading}
      rankingLoading={rankingLoading}
    />
  );
}

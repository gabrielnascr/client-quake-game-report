import { ActivityIndicator } from "react-native";
import * as S from "./styles";
import { Game } from "../../stores/slices/gameSlice";
import { Ranking } from "../../stores/slices/rankingSlice";
import GameList from "../../components/GameList";
import PlayerRanking from "../../components/Ranking";

type HomeViewProps = {
  games: Game[];
  ranking: Ranking[];
  rankingLoading: boolean;
  gamesLoading: boolean;
};

export default function HomeView({
  games,
  ranking,
  rankingLoading,
  gamesLoading,
}: HomeViewProps) {
  return (
    <S.Container>
      {rankingLoading || gamesLoading ? (
        <ActivityIndicator size={32} />
      ) : (
        <S.Content>
          <GameList games={games} />
          <PlayerRanking rankings={ranking} />
        </S.Content>
      )}
    </S.Container>
  );
}

import { FlatList, Text } from "react-native";
import * as S from "../styles";
import { Game } from "../../stores/slices/gameSlice";

type GameListProps = {
  games: Game[];
};

const GameList = ({ games }: GameListProps) => {
  const renderGame = (item: Game, index: number) => (
    <S.GameCard key={index}>
      <S.ItemText>#{index}</S.ItemText>
      <S.ItemText>Total Kills: {item.total_kills}</S.ItemText>
      <S.ItemText>Players: {item.players.join(", ")}</S.ItemText>
    </S.GameCard>
  );

  return (
    <S.Section>
      <S.Title>Games</S.Title>
      <S.HorizontalScrollView horizontal>
        {games.map(renderGame)}
      </S.HorizontalScrollView>
    </S.Section>
  );
};

export default GameList;

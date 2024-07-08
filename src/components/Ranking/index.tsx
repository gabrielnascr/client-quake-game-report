import * as S from "../styles";
import { Ranking } from "../../stores/slices/rankingSlice";

type PlayerRankingProps = {
  rankings: Ranking[];
};

const PlayerRanking = ({ rankings }: PlayerRankingProps) => {
  const renderRanking = (item: Ranking, index: number) => (
    <S.RankingCard key={index}>
      <S.ItemText>Rank: {item.ranking_position}</S.ItemText>
      <S.ItemText>Player: {item.player}</S.ItemText>
      <S.ItemText>Total Kills: {item.total_kills}</S.ItemText>
      <S.ItemText>Total Deaths: {item.total_deaths}</S.ItemText>
    </S.RankingCard>
  );

  return (
    <S.RankingSection>
      <S.Title>Player Rankings</S.Title>
      {rankings.map(renderRanking)}
    </S.RankingSection>
  );
};

export default PlayerRanking;

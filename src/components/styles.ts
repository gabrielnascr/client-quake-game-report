import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-bottom: 20px;
`;

export const Section = styled.View`
  margin-bottom: 20px;
`;

export const RankingSection = styled.ScrollView`
  margin-bottom: 20px;
`;

export const SectionTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #495057;
  text-align: center;
  margin-bottom: 15px;
`;

export const HorizontalScrollView = styled.ScrollView`
  padding-left: 10px;
`;

export const GameCard = styled.View`
  width: 300px;
  height: 230px;
  padding: 15px;
  background-color: white;
  border-radius: 10px;
  margin-right: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ItemText = styled.Text`
  font-size: 18px;
  color: #212529;
  margin-bottom: 5px;
`;

export const RankingCard = styled.View`
  padding: 12px;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 10px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 4;
`;

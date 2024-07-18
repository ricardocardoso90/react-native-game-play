import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Container = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: 27px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`;

export const SubTitle = styled.Text`
  font-size: 13px;
  color: ${theme.colors.highlight};
  font-family: ${theme.fonts.title700};
`;
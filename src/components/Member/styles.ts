import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const NameStatus = styled.Text`
  font-size: 13px;
  color: ${theme.colors.highlight};
  font-family: ${theme.fonts.text400};
`;
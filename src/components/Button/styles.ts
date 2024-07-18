import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const IconWrapper = styled.View`
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  border-right-width: 1px;
  border-color: ${theme.colors.line};
`;

export const ImageIcon = styled.Image`
  width: 24px;
  height: 18px;
`;

export const Title = styled.Text`
  flex: 1;
  font-size: 15px;
  text-align: center;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.text500};
`;
import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Container = styled.TextInput`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  font-size: 13px;
  margin-right: 4px;
  text-align: center;
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.heading};
  background-color: ${theme.colors.secondary40};
  border-width: 1px;
  border-color: ${theme.colors.secondary50};
`;
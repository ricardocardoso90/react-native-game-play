import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Content = styled.View`
  flex: 1;
  margin-left: 20px;
  justify-content: center;
`;

export const Container = styled.View`

`;

export const Title = styled.Text`
  font-size: 18px;
  margin-bottom: 4px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`;

export const Type = styled.Text`
  font-size: 13px;
  color: ${theme.colors.highlight};
  font-family: ${theme.fonts.text400};
`;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24
  }
});
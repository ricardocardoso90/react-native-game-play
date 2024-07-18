import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";
import { TouchableOpacity } from "react-native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Label = styled.Text`
  font-size: 18px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`;

export const Form = styled.View`
  padding: 0 24px;
  margin-top: 32px;
`;

export const Select = styled.View`
  width: 100%;
  height: 68px;
  align-items: center;
  flex-direction: row;
  border-width: 1px;
  border-radius: 8px;
  padding-right: 25px;
  overflow: hidden;
  border-color: ${theme.colors.secondary50};
`;

export const Image = styled.View`
  width: 64px;
  height: 68px;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${theme.colors.secondary50};
  background-color: ${theme.colors.secondary40};
`;

export const SelectBody = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
`;

export const Field = styled.View`
  width: 100%;
  margin-top: 25px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Column = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.Text`
  margin-right: 4px;
  font-size: 15px;
  color: ${theme.colors.highlight};
  font-family: ${theme.fonts.text500};
`;

export const CaracteresLimit = styled.Text`
  font-size: 13px;
  color: ${theme.colors.highlight};
  font-family: ${theme.fonts.text400};
`;

export const Footer = styled.View`
  margin: 20px 0;
  margin-bottom: 56px;
`;
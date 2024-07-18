import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";
// import { getBottomSpace } from 'react-native-iphone-x-helper';

export const BannerContainer = styled.ImageBackground`
  width: 100%;
  height: 230px;
`;

export const Banner = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-bottom: 30px;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`;

export const SubTitle = styled.Text`
  font-size: 13px;
  line-height: 21px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.text400};
`;

export const Footer = styled.View`
  padding: 20px 24px;
  /* margin-bottom: getBottomSpace(); */
`;
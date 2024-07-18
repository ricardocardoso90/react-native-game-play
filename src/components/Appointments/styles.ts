import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  margin-bottom: 12px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`;

export const TitleCategory = styled.Text`
  font-size: 13px;
  margin-right: 24px;
  color: ${theme.colors.highlight};
  font-family: ${theme.fonts.text400};
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const DateInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleDate = styled.Text`
  font-size: 13px;
  margin-left: 7px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.text500};
`;

export const PlayersInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const styles = StyleSheet.create({
  player: {
    fontSize: 13,
    marginLeft: 7,
    marginRight: 24,
    fontFamily: theme.fonts.text500,
  },
  guildIconContainer: {
    height: 68,
    width: 64,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20
  }
});
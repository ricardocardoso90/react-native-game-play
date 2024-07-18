import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Header = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 46px;
  margin-bottom: 42px;
`;

export const styles = StyleSheet.create({
  matches: {
    marginTop: 15,
    marginLeft: 24,
  },
  container: {
    width: 48,
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary
  }
});
import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Image = styled.Image`
  width: 100%;
  height: 360px;
`

export const Content = styled.View`
  margin-top: -40px;
  padding: 0 50px;
`

export const Title = styled.Text`
  font-size: 40px;
  text-align: center;
  margin-bottom: 16px;
  line-height: 40px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`

export const SubTitle = styled.Text`
  font-size: 15px;
  text-align: center;
  margin-bottom: 64px;
  line-height: 25px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title500};
`
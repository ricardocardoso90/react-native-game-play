import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const ContainerView = styled.View`
  width: 62px;
  height: 66px;
  overflow: hidden;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.discord};
`;

export const Container = styled.Image`
  width: 62px;
  height: 66px;
`;
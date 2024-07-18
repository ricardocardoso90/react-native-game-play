import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.TouchableOpacity`
  width: 48;
  height: 48;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primary};
`;
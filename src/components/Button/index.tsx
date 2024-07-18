import {
  IconWrapper,
  ImageIcon,
  Title
} from "./styles";

import DiscordImg from '../../assets/discord.png';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { theme } from "../../global/styles/theme";

type Props = TouchableOpacityProps & {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Title>{title}</Title>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
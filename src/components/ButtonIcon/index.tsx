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

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <IconWrapper>
        <ImageIcon source={DiscordImg} />
      </IconWrapper>
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
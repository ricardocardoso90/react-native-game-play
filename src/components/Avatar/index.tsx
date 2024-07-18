import { ImageAvatar } from "./styles";
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  urlImage: string;
};

export function Avatar({ urlImage }: Props) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <ImageAvatar
        source={{ uri: urlImage }}
      />
    </LinearGradient>
  )
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 22
  },
});
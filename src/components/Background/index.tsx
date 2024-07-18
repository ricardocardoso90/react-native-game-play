import { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  children: ReactNode;
};

export function Background({ children }: Props) {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
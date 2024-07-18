import { ActivityIndicator } from "react-native";
import { Container } from "./styles";
import { theme } from "../../global/styles/theme";

export function Load() {
  const { primary } = theme.colors;

  return (
    <Container>
      <ActivityIndicator
        size={"large"}
        color={primary}
      />
    </Container>
  )
};
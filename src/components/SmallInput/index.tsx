import { Container } from "./styles";
import { TextInputProps } from "react-native";

export function SmallInput({keyboardType, ...rest }: TextInputProps) {
  return (
    <Container
      {...rest}
      keyboardType={keyboardType}
    />
  )
};
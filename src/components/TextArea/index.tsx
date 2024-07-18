import { Container } from "./styles";
import { TextInputProps } from "react-native";

export function TextArea({ ...rest }: TextInputProps) {
  return (
    <Container
      {...rest}
    />
  )
};
import { Container } from "./styles";

type Props = {
  isCentered?: boolean;
};

export function ListDivider({ isCentered }: Props) {
  return (
    <Container style={
      isCentered ? { marginTop: 10 } : { marginTop: 1 }

      // isCentered
      //   ? { marginTop: 12, marginBottom: 12 }
      //   : { marginTop: 2, marginBottom: 31 }
    }
    />
  )
};
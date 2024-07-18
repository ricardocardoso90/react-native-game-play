import { StyleSheet, View } from "react-native";
import { Avatar } from "../Avatar";
import { Container, NameStatus, Status, Title } from "./styles";
import { theme } from "../../global/styles/theme";

export type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
};

type Props = {
  data: MemberProps;
};

export function Member({ data }: Props) {
  const isOnline = data.status === 'online';
  const { on, primary } = theme.colors;

  return (
    <Container>
      <Avatar
        urlImage={data.avatar_url}
      />

      <View>
        <Title>
          {data.username}
        </Title>

        <Status>
          <View
            style={[
              styles.bulletStatus,
              { backgroundColor: isOnline ? on : primary }
            ]}
          />

          <NameStatus>
            {isOnline ? 'Disponível' : 'Ocupado'}
          </NameStatus>
        </Status>
      </View>
    </Container>
  )
};

const styles = StyleSheet.create({
  bulletStatus: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 9
  }
});
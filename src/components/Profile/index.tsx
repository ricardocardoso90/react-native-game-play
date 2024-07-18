import { Avatar } from "../Avatar";
import { useAuth } from "../../hooks/auth";
import { RectButton } from 'react-native-gesture-handler';
import { Box, Container, Greeting, Message, User, Username } from "./styles";
import { Alert } from "react-native";

export function Profile() {
  const { user, signOut } = useAuth();

  function handleSignOut() {
    Alert.alert('Logout', 'Deseja sair do GamePlay?',
      [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: () => signOut()
        }
      ]
    )
  };

  return (
    <Container>
      <RectButton
        onPress={handleSignOut}
      >
        <Avatar urlImage={user.avatar} />
      </RectButton>

      <Box>
        <User>
          <Greeting>Olá,</Greeting>
          <Username>{user.firstName}</Username>
        </User>
        <Message>Hoje é dia de vitória!</Message>
      </Box>
    </Container>
  )
}
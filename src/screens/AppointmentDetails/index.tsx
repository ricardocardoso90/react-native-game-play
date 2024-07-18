import { BannerContainer, Banner, Title, SubTitle, Footer } from './styles';

import { Header } from "../../components/Header";
import { Background } from "../../components/Background";
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';
import { theme } from "../../global/styles/theme";
import * as Linking from 'expo-linking';

import BannerImg from '../../assets/banner.png';
import { ListHeader } from '../../components/ListHeader';
import { Alert, FlatList, Platform, Share, StyleSheet } from 'react-native';
import { Member, MemberProps } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';
import { useRoute } from '@react-navigation/native';
import { AppointmentsProps } from '../../components/Appointments';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { Load } from '../../components/Load';

type Params = {
  guildSelected: AppointmentsProps
};

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
};

export function AppointmentDetails() {
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);

  const route = useRoute();
  const { guildSelected } = route.params as Params;

  async function fetchGuildWidget() {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
      setWidget(response.data);

    } catch (error) {
      Alert.alert(
        'Verifique as configurações do servidor',
        'Será que o widget está habilitado?'
      );
    } finally {
      setLoading(false);
    };
  };

  function handleShareInvitation() {
    const message = Platform.OS === 'ios'
      ? `Junte-se a ${guildSelected.guild.name}`
      : widget.instant_invite;

    Share.share({
      message,
      url: widget.instant_invite
    });
  };

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite);
  };

  useEffect(() => {
    fetchGuildWidget();
  }, []);

  return (
    <Background>
      <Header
        title='Detalhes'
        action={
          guildSelected.guild.owner &&
          <BorderlessButton onPress={handleShareInvitation}>
            <Fontisto
              size={24}
              name="share"
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />
      <BannerContainer source={BannerImg}>
        <Banner>
          <Title>{guildSelected.guild.name}</Title>
          <SubTitle>{guildSelected.description}</SubTitle>
        </Banner>
      </BannerContainer>

      {
        loading
          ? <Load />
          : (
            <>
              <ListHeader
                title='Jogadores'
                subtitle={`Total ${widget.members.length}`}
              />

              <FlatList
                data={widget.members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <Member
                    data={item}
                  />
                )}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                style={styles.members}
              />
            </>
          )
      }

      {
        guildSelected.guild.owner &&
        <Footer>
          <ButtonIcon
            title='Entrar na partida'
            onPress={handleOpenGuild}
          />
        </Footer>
      }
    </Background>
  )
};

const styles = StyleSheet.create({
  members: {
    marginLeft: 24,
    marginTop: 27
  }
});
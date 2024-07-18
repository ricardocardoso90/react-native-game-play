import { theme } from "../../global/styles/theme";
import { GuildProps } from '../Guild';
import { GuildIcon } from "../GuildIcon";
import { Text } from "react-native";
import { categories } from "../../utils/categories";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { styles } from './styles';

import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';

import {
  Container,
  Content,
  DateInfo,
  Footer,
  Header,
  PlayersInfo,
  Title,
  TitleCategory,
  TitleDate
} from "./styles";
import { LinearGradient } from "expo-linear-gradient";

export type AppointmentsProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

type Props = RectButtonProps & {
  data: AppointmentsProps;
};

export function Appointments({ data, ...rest }: Props) {
  const { owner } = data.guild;
  const { primary, on, secondary50, secondary70 } = theme.colors;
  const [category] = categories.filter(item => item.id === data.category);

  return (
    <RectButton {...rest} >
      <Container>
        <LinearGradient
          style={styles.guildIconContainer}
          colors={[secondary50, secondary70]}
        >
          <GuildIcon
            guildId={data.guild.id}
            iconId={data.guild.icon}
          />
        </LinearGradient>

        <Content>
          <Header>
            <Title>{data.guild.name}</Title>
            <TitleCategory>{category.title}</TitleCategory>
          </Header>

          <Footer>

            <DateInfo>
              <CalendarSvg />
              <TitleDate>{data.date}</TitleDate>
            </DateInfo>

            <PlayersInfo>
              <PlayerSvg fill={owner ? primary : on} />
              <Text style={[styles.player, { color: owner ? primary : on }]}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </Text>
            </PlayersInfo>

          </Footer>

        </Content>

      </Container>
    </RectButton>
  )
};
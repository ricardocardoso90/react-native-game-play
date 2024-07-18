import { Container, ContainerView } from "./styles";
import DiscordSvg from '../../assets/discord.svg';

type Props = {
  guildId: string;
  iconId: string | null;
};

const { CDN_IMAGE } = process.env;

export function GuildIcon({ iconId, guildId }: Props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

  return (
    <ContainerView>
      {
        iconId
          ? (
            <Container
              source={{ uri }}
              resizeMode="cover"
            />
          )
          : <DiscordSvg
            width={40}
            height={40}
          />
      }
    </ContainerView>
  )
};
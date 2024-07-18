import { GuildIcon } from "../GuildIcon";
import { theme } from "../../global/styles/theme";
import { Container, Content, Title, Type, styles } from "./styles";

import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

type Props = TouchableOpacityProps & {
  data: GuildProps;
};

export function Guild({ data, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      style={styles.container}
    >
      <GuildIcon 
        guildId={data.id}
        iconId={data.icon}
      />

      <Content>
        <Container>
          <Title>
            {data.name}
          </Title>
          <Type>
            {data.owner ? 'Administrador' : 'Convidado'}
          </Type>
        </Container>
      </Content>

      <Feather
        size={24}
        name="chevron-right"
        color={theme.colors.heading}
      />
    </TouchableOpacity>
  )
};
import { FlatList } from "react-native";
import { Container, styles } from "./styles";
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { useEffect, useState } from "react";
import { Load } from "../../components/Load";
import { api } from "../../services/api";

type Props = {
  handleGuildsSelect: (Guild: GuildProps) => void;
};

export function Guilds({ handleGuildsSelect }: Props) {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGuilds() {
    const response = await api.get('/users/@me/guilds');
    setGuilds(response.data);
    setLoading(false);
  };

  useEffect(() => {
    // fetchGuilds();
  }, []);

  return (
    <Container>
      {loading
        ? <Load />
        : (
          <FlatList
            data={guilds}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Guild
                data={item}
                onPress={() => handleGuildsSelect(item)}
              />
            )}
            style={styles.guilds}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => <ListDivider />}
            ItemSeparatorComponent={() => <ListDivider />}
            contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
          />
        )
      }
    </Container>
  )
};
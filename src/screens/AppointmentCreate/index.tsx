import { useState } from "react";
import {
  CaracteresLimit,
  Column,
  Container,
  Divider,
  Field,
  Footer,
  Form,
  Image,
  Label,
  Select,
  SelectBody
} from "./styles";
import { Header } from "../../components/Header";
import { CategorySelect } from "../../components/CategorySelect";
import { Platform, ScrollView, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { theme } from "../../global/styles/theme";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { ModalView } from "../../components/ModalView";
import { Guilds } from "../Guilds";
import { Background } from "../../components/Background";
import { GuildProps } from "../../components/Guild";
import uuid from 'react-native-uuid';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";
import { useNavigation } from "@react-navigation/native";

export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');

  const navigation = useNavigation();

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  };

  function handleCloseGuilds() {
    setOpenGuildsModal(false);
  };

  function handleGuildsSelect(guildSelect: GuildProps) {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  };

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  };

  async function handleSave() {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} ás ${hour}:${minute}h`,
      description
    };

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment])
    );

    navigation.navigate('Home' as never);
  };

  return (
    <Container
      behavior={
        Platform.OS === 'ios'
          ? 'padding'
          : 'height'
      }
    >
      <Background>
        <ScrollView>
          <Header title='Agendar partida' />

          <Label style={{ marginLeft: 24, marginBottom: 10 }}>
            Categoria
          </Label>

          <CategorySelect
            hasCheckBox
            setCategory={handleCategorySelect}
            categorySelected={category}
          />

          <Form>
            <TouchableOpacity>
              <Select>
                {
                  guild.icon
                    ? < GuildIcon
                      guildId={guild.id}
                      iconId={guild.icon}
                    />
                    : <Image />
                }
                <SelectBody
                  onPress={handleOpenGuilds}
                >
                  <Label>{
                    guild.name
                      ? guild.name
                      : 'Selecione um servidor'}
                  </Label>
                </SelectBody>

                <Feather
                  size={18}
                  name="chevron-right"
                  color={theme.colors.heading}
                />
              </Select>
            </TouchableOpacity>

            <Field>
              <View>
                <Label style={{ marginBottom: 3 }}>Dia e Mês</Label>

                <Column>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setDay}
                    keyboardType="numeric"
                  />
                  <Divider>/</Divider>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setMonth}
                    keyboardType="numeric"
                  />
                </Column>
              </View>

              <View>
                <Label style={{ marginBottom: 3 }}>Hora e Minuto</Label>

                <Column>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setHour}
                    keyboardType="numeric"
                  />
                  <Divider>:</Divider>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setMinute}
                    keyboardType="numeric"
                  />
                </Column>
              </View>
            </Field>

            <Field style={{ marginBottom: 8 }}>
              <Label>Descrição</Label>

              <CaracteresLimit>
                Max 100 caracteres
              </CaracteresLimit>
            </Field>

            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              onChangeText={setDescription}
            />

            <Footer>
              <Button
                title='Agendar'
                onPress={handleSave}
              />
            </Footer>
          </Form>
        </ScrollView>
      </Background>

      <ModalView
        visible={openGuildsModal}
        closeModal={handleCloseGuilds}
      >
        <Guilds
          handleGuildsSelect={handleGuildsSelect}
        />
      </ModalView>
    </Container>
  )
};
import {
  Header, styles
} from './styles';

import { useCallback, useState } from 'react';
import { Profile } from '../../components/Profile';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { FlatList, TouchableOpacity } from 'react-native';
import { Appointments, AppointmentsProps } from '../../components/Appointments';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { Load } from '../../components/Load';

export function Home() {
  const [category, setCategory] = useState('');
  const [appointments, setAppointments] = useState<AppointmentsProps[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();


  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  };

  function handleAppointmentDetails(guildSelected: AppointmentsProps) {
    // navigation.navigate('AppointmentDetails', {guildSelected});
    navigation.navigate('AppointmentDetails' as never);
  };

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate' as never);
  }

  async function loadAppointmens() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentsProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter(item => item.category === category));
    } else {
      setAppointments(storage);
    }

    setLoading(false);
  };

  useFocusEffect(useCallback(() => {
    loadAppointmens();
  }, [category]));

  return (
    <Background>
      <Header>
        <Profile />
        <TouchableOpacity
          style={styles.container}
          onPress={handleAppointmentCreate}
        >
          <MaterialCommunityIcons
            name="plus"
            size={24}
            color={theme.colors.heading}
          />
        </TouchableOpacity>
      </Header>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      {
        loading
          ? <Load />
          : (
            <>
              <ListHeader
                title='Partidas agendadas'
                subtitle={`Total ${appointments.length}`}
              />
              <FlatList
                data={appointments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <Appointments
                    data={item}
                    onPress={() => handleAppointmentDetails(item)}
                  />
                )}
                style={styles.matches}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 69 }}
                ItemSeparatorComponent={() => <ListDivider />}
              />
            </>
          )
      }
    </Background>
  )
};


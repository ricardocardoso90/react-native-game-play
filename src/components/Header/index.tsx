import { styles } from "./styles";
import { ReactNode } from "react";
import { Feather } from '@expo/vector-icons';
import { Text, View } from "react-native";
import { theme } from "../../global/styles/theme";
// import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

type Props = {
  title: string;
  action?: ReactNode;
};

export function Header({ title, action }: Props) {
  const { secondary100, secondary40, heading } = theme.colors;
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={styles.container}
    // colors={[secondary100, secondary40]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather
          size={24}
          color={heading}
          name="arrow-left"
        />
      </BorderlessButton>

      <Text style={styles.title}>
        {title}
      </Text>

      {action
        ? <View>{action}</View>
        : <View style={{ width: 24 }} />
      }
    </SafeAreaView>
  )
};
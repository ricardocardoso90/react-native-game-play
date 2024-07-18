
import { theme } from "../../global/styles/theme";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from "react-native";



export function ButtonAdd() {
  return (
    <TouchableOpacity style={styles.container}>
      <MaterialCommunityIcons
        name="plus"
        size={24}
        color={theme.colors.heading}
      />
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary
  }
});
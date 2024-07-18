import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    // heigh: 104,
    marginTop: getStatusBarHeight(),
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.secondary100
  },

  title: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700
  }
});
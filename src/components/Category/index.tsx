import { Title } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SvgProps } from "react-native-svg";
import { theme } from "../../global/styles/theme";

type Props = {
  title: string;
  icon: React.FC<SvgProps>;
  hasCheckBox?: boolean;
  checked?: boolean;
};

export function Category(
  { title,
    icon: Icon,
    checked = false,
    hasCheckBox = false,
    ...rest
  }: Props) {

  return (
    <TouchableOpacity {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[theme.colors.secondary50, theme.colors.secondary70]}
      >
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[checked ? theme.colors.secondary85 : theme.colors.secondary50, theme.colors.secondary40]}
        >
          {hasCheckBox &&
            <View style={checked ? styles.checked : styles.check} />
          }
          <Icon
            width={48}
            height={48}
          />
          <Title>{title}</Title>
        </LinearGradient>
      </LinearGradient>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    marginRight: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    width: 100,
    height: 116,
    borderRadius: 8,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  checked: {
    width: 10,
    height: 10,
    borderRadius: 3,
    position: 'absolute',
    top: 7,
    right: 7,
    backgroundColor: theme.colors.primary
  },
  check: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderRadius: 3,
    position: 'absolute',
    top: 7,
    right: 7,
    borderColor: theme.colors.secondary50,
    backgroundColor: theme.colors.secondary100
  }
});
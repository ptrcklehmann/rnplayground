import { Text, View } from "react-native";
import createStyles from "../../utils/createStyles";


const useStyles = createStyles({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export const MenuScreen = () => {
  const { styles } = useStyles();
  return (
    <View style={styles.container}>
      <Text>Welcome to the Menu Screen!</Text>
    </View>
  );
}
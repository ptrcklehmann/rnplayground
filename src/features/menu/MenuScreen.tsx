import { ScrollView, Text } from 'react-native';
import { SaveScreen } from '../../components/common/SaveScreen';
import { palette, viewportGap } from '../../styles';
import createStyles from '../../utils/createStyles';

const useStyles = createStyles({
  container: {
    flex: 1,
    paddingHorizontal: viewportGap,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: palette.grayscaleBlack,
  },
});

export const MenuScreen = () => {
  const { styles } = useStyles();
  return (
    <SaveScreen>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Menu Screen</Text>
        {/* Add more menu items here */}
      </ScrollView>
    </SaveScreen>
  );
};

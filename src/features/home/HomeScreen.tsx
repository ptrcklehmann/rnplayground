import { FlatList, Text } from 'react-native';
import { SaveScreen } from '../../components/common/SaveScreen';
import { palette, viewportGap } from '../../styles';
import createStyles from '../../utils/createStyles';

const useStyles = createStyles({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: viewportGap,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: palette.grayscaleBlack,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: palette.grayscaleBlack,
  },
});

const ListHeaderComponent = () => {
  const { styles } = useStyles();
  return <Text style={styles.header}>Home Screen</Text>;
};

export const HomeScreen = () => {
  const { styles } = useStyles();
  return (
    <SaveScreen>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`)}
        keyExtractor={item => item}
        renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
        ListHeaderComponent={ListHeaderComponent}
      />
    </SaveScreen>
  );
};

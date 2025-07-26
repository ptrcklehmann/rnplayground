import { BlurView } from '@react-native-community/blur';
import createStyles from '../../utils/createStyles';

const useStyles = createStyles({
  blurContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export const TabBarBackground = () => {
  const { styles } = useStyles();

  return (
      <BlurView
        style={styles.blurContainer}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="#f8f8f8"
      />
  );
};

import { Text, TouchableOpacity } from 'react-native';
import { tabBarItemActiveColor, tabBarItemInactiveColor } from '../../styles';
import createStyles from '../../utils/createStyles';

const useStyles = createStyles({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: tabBarItemInactiveColor,
  },
  selectedLabel: {
    color: tabBarItemActiveColor,
    fontWeight: '600',
  },
});

type TabBarItemProps = {
  title: string;
  isSelected: boolean;
  onPress: () => void;
};

export const TabBarItem = ({ title, isSelected, onPress }: TabBarItemProps) => {
  const { styles } = useStyles();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.label, isSelected && styles.selectedLabel]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

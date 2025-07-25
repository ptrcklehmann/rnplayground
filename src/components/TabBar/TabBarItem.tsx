import { Text, TouchableOpacity } from 'react-native';
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
    color: '#8E8E93',
  },
  selectedLabel: {
    color: '#04d226',
    fontWeight: '600',
  },
});

interface TabBarItemProps {
  title: string;
  isSelected: boolean;
  onPress: () => void;
}

export const TabBarItem: React.FC<TabBarItemProps> = ({
  title,
  isSelected,
  onPress,
}) => {
  const { styles } = useStyles();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={1}
    >
      <Text style={[styles.label, isSelected && styles.selectedLabel]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

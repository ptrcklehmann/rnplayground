import React, { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { tabBarItemActiveColor, tabBarItemInactiveColor } from '../../styles';
import createStyles from '../../utils/createStyles';
import { ReactNode } from 'react';

const useStyles = createStyles({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: tabBarItemInactiveColor,
  },
  selectedLabel: {
    color: tabBarItemActiveColor,
    fontWeight: '600',
  },
});

type TabBarItemProps = {
  label: ReactNode;
  icon?: ReactNode;
  focused: boolean;
  onPress: () => void;
};

export const TabBarItem = memo(
  ({ label, focused: isSelected, onPress, icon }: TabBarItemProps) => {
    const { styles } = useStyles();
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.8}
      >
        {icon ?? null}
        <Text style={[styles.label, isSelected && styles.selectedLabel]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  },
);

import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

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
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={1}
    >
      <Text style={[styles.title, isSelected && styles.selectedTitle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#8E8E93',
  },
  selectedTitle: {
    color: '#04d226',
    fontWeight: '600',
  },
});

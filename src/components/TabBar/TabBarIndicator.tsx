import React, { memo, useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import Animated, { AnimatedStyle } from 'react-native-reanimated';
import { tabBarItemActiveColor } from '../../styles';
import createStyles from '../../utils/createStyles';

const useStyles = createStyles({
    tabItem: ({}, width: number, height: number = 2, color: string) => ({
        position: 'absolute',
        top: -2,
        width,
        height,
        backgroundColor: color,
    }),
});

type TabBarIndicatorProps = {
    tabCount: number;
    height?: number;
    color?: string;
    animatedStyle?: AnimatedStyle;
};

export const TabBarIndicator = memo(
    ({
        tabCount,
        height = 2,
        color = tabBarItemActiveColor,
        animatedStyle,
    }: TabBarIndicatorProps) => {
        const { styles } = useStyles();
        const { width: screenWidth } = useWindowDimensions();

        // Memoize the tab width calculation
        const tabWidth = useMemo(
            () => screenWidth / tabCount,
            [screenWidth, tabCount],
        );

        return (
            <Animated.View
                style={[styles.tabItem(tabWidth, height, color), animatedStyle]}
            />
        );
    },
);

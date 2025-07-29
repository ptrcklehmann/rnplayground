import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useMemo, useCallback, memo } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TabBarItem } from '.';
import {
    palette,
    tabBarItemActiveColor,
    tabBarItemInactiveColor,
} from '../../styles';
import createStyles from '../../utils/createStyles';
import { TabBarIndicator } from './TabBarIndicator';

const useStyles = createStyles({
    tabBar: {
        backgroundColor: palette.grayscale00,
        borderTopWidth: 2,
        borderTopColor: palette.grayscale02,
        paddingTop: 0,
        shadowColor: '#000',
        shadowOpacity: 0.125,
        shadowRadius: 20,
        elevation: 8,
    },
    content: {
        flexDirection: 'row',
    },
});

// Memoized TabBarItem wrapper to prevent unnecessary re-renders
const MemoizedTabBarItem = memo(
    ({
        route,
        focused,
        options,
        label,
        onPress,
    }: {
        route: any;
        focused: boolean;
        options: any;
        label: any;
        onPress: () => void;
    }) => {
        // Memoize the label rendering
        const renderedLabel = useMemo(() => {
            if (typeof label === 'function') {
                return label({
                    focused,
                    color: focused
                        ? tabBarItemActiveColor
                        : tabBarItemInactiveColor,
                    position: 'below-icon',
                    children: route.name,
                });
            }
            return label;
        }, [label, focused, route.name]);

        // Memoize the icon rendering
        const renderedIcon = useMemo(() => {
            if (!options.tabBarIcon) return null;

            return options.tabBarIcon({
                focused,
                color: focused
                    ? tabBarItemActiveColor
                    : tabBarItemInactiveColor,
                size: 20,
            });
        }, [options, focused]);

        return (
            <TabBarItem
                label={renderedLabel}
                icon={renderedIcon}
                focused={focused}
                onPress={onPress}
            />
        );
    },
);

export const AnimatedBottomTabBar = ({
    state,
    navigation,
    descriptors,
}: BottomTabBarProps) => {
    const { styles } = useStyles();
    const { width: screenWidth } = useWindowDimensions();
    const { bottom } = useSafeAreaInsets();
    const { routes } = state;
    const selectedTab = state.index;
    const tabCount = routes.length;

    // Memoize expensive calculations
    const tabWidth = useMemo(
        () => screenWidth / tabCount,
        [screenWidth, tabCount],
    );

    // Animated style for the indicator
    const animatedStyle = useAnimatedStyle(
        () => ({
            transform: [
                {
                    translateX: withTiming(tabWidth * selectedTab, {
                        duration: 250,
                    }),
                },
            ],
        }),
        [tabWidth, selectedTab],
    );

    // Memoize tab creation to prevent unnecessary re-renders
    const tabItems = useMemo(
        () =>
            routes.map((route, index) => {
                const focused = index === state.index;
                const { options } = descriptors[route.key];

                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                return {
                    route,
                    index,
                    focused,
                    options,
                    label,
                };
            }),
        [routes, state.index, descriptors],
    );

    // Create memoized onPress handlers
    const createOnPressHandler = useCallback(
        (route: any, index: number, focused: boolean) => {
            return () => {
                const event = navigation.emit({
                    type: 'tabPress',
                    target: state.routes[index].key,
                    canPreventDefault: true,
                });

                if (!focused && !event.defaultPrevented) {
                    navigation.navigate(route.name);
                }
            };
        },
        [navigation, state.routes],
    );

    return (
        <View style={[styles.tabBar, { paddingBottom: bottom }]}>
            <TabBarIndicator
                tabCount={tabCount}
                animatedStyle={animatedStyle}
                height={2}
                color={tabBarItemActiveColor}
            />
            <View style={styles.content}>
                {tabItems.map(({ route, index, focused, options, label }) => {
                    const onPress = createOnPressHandler(route, index, focused);

                    return (
                        <MemoizedTabBarItem
                            key={route.key}
                            route={route}
                            focused={focused}
                            options={options}
                            label={label}
                            onPress={onPress}
                        />
                    );
                })}
            </View>
        </View>
    );
};

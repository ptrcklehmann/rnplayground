import React from 'react';
import { View, ViewStyle } from 'react-native';
import { palette } from '../../styles';
import { useSaveScreenTopGap } from '../../hooks/useSaveScreenTopGap';

const styles: {
    container: ViewStyle;
} = {
    container: {
        flex: 1,
        backgroundColor: palette.white,
    },
};

export const SaveScreen = ({
    children,
    testID,
}: {
    children: React.ReactNode;
    testID?: string;
}) => {
    const saveScreenTopGap = useSaveScreenTopGap();
    return (
        <View
            style={{
                ...styles.container,
                paddingTop: saveScreenTopGap,
            }}
            testID={testID}
        >
            {children}
        </View>
    );
};

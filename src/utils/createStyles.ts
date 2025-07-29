import { useMemo } from 'react';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import useDisplay, { DisplayInfo } from '../hooks/useDisplay';

type Style = ViewStyle | TextStyle | ImageStyle;

type InputStyles = {
    [key: string]: Style | ((display: DisplayInfo, ...args: any[]) => Style);
};

export type OutputStyles<T> = {
    [P in keyof T]: T[P] extends (...args: any[]) => any
        ? (
              ...args: Parameters<T[P]> extends [any, ...infer Args] ? Args : []
          ) => ReturnType<T[P]>
        : T[P];
};

function createStyles<T extends InputStyles>(
    styles: T,
): () => { styles: OutputStyles<T> } & DisplayInfo {
    return () => {
        const display = useDisplay();
        return useMemo(
            () => ({
                styles: Object.entries(styles).reduce(
                    (acc, [key, style]) => ({
                        ...acc,
                        [key]:
                            style instanceof Function
                                ? (...args: any[]) =>
                                      style({ ...display }, ...args)
                                : style,
                    }),
                    {} as OutputStyles<T>,
                ),
                ...{
                    ...display,
                },
            }),
            [display],
        );
    };
}

export default createStyles;

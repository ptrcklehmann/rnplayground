module.exports = {
    root: true,
    extends: '@react-native',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'jest'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-shadow': ['error'],
                '@typescript-eslint/no-unused-vars': [
                    'error',
                    {
                        vars: 'all',
                        args: 'after-used',
                        ignoreRestSiblings: true,
                        argsIgnorePattern: '^_',
                    },
                ],
                'react-native/no-inline-styles': 'off',
                'no-shadow': 'off',
                'no-undef': 'off',
                'no-console': 'error',
            },
        },
        {
            files: ['*.test.js', '*.test.ts', '*.test.tsx'],
            env: {
                'jest/globals': true,
            },
        },
    ],
};

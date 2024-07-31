module.exports = {
    env: {
        browser: true,

        es2021: true,
    },

    extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],

    parser: '@typescript-eslint/parser',

    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },

        ecmaVersion: 'latest',

        sourceType: 'module',
    },

    plugins: ['react', '@typescript-eslint', 'i18next'],

    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'i18next/no-literal-string': ['error', { markupOnly: true }],
        indent: [2, 4],

        'import/no-unresolved': 'off',

        'react/jsx-filename-extension': [
            2,
            { extensions: ['.jsx', '.js', '.tsx'] },
        ],
        'import/prefer-default-export': 'off',
        'react/react-in-jsx-scope': 'off',
        'linebreak-style': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'warn',
        'no-underscore-dangle': 'off',
    },
    globals: {
        __IS_DEV__: true,
    },
};

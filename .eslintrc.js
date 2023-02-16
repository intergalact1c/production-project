module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true, // ESLint: 'describe' is not defined.(no-undef)
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
        'react/jsx-indent': [2, 4], // отступы для jsx. 2 - означает, что будет выбрасываться ошибка при не соблюдении праваила
        'react/jsx-indent-props': [2, 4], // отступы для пропсов в jsx
        indent: [2, 4], // отступы для остального кода
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }], // разрешаем расширение JSX в файлах '.js', '.jsx', '.tsx'
        'import/no-unresolved': 'off', // абсолютные пути
        'import/prefer-default-export': 'off', // дефолтный экспорт по умолчанию
        'no-unused-vars': 'warn', // неиспользуемые переменные
        'react/require-default-props': 'off', // подсветка дефолтных свойств (?)
        'react/react-in-jsx-scope': 'off', // импорт React по умолчанию
        'react/jsx-props-no-spreading': 'warn', // spread оператор
        'react/function-component-definition': 'off', // объявление jsx компонентов как functional expression
        'no-shadow': 'off', // ESLint: 'ThemeButton' is already declared in the upper scope on line 5 column 13.(no-shadow)
        'import/extensions': 'off', // импорты
        'import/no-extraneous-dependencies': 'warn', // ESLint: 'webpack' should be listed in the project's dependencies, not devDependencies.(import/no-extraneous-dependencies)
        'no-underscore-dangle': 'off', // двойное подчеркивание
        'i18next/no-literal-string': [2, { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] }],
        'max-len': [2, { code: 120, ignoreComments: true }], // длина строки
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};

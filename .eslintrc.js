module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    globals: {
        window: false,
        navigator: false,
        document: false,
        mount: false,
        shallow: false,
        render: false,
        describe: false,
        it: false,
        jest: false,
        expect: false,
        beforeEach: false,
        afterEach: false,
        beforeAll: false,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'import/no-extraneous-dependencies': ['off'],
        'comma-dangle': ['off'],
        'import/no-named-as-default': ['off'],
        indent: ['error', 4],
        'key-spacing': ['error', { mode: 'minimum' }],
        'max-len': ['off'],
        'no-plusplus': ['off'],
        'no-trailing-spaces': ['error', { skipBlankLines: true }],
        'no-restricted-syntax': [
        // copied from airbnb default and modified to allow ForOfStatement
        // https://github.com/airbnb/javascript/blob/95286eb496acf09fb8360d5368f798b040a0b5c1/packages/eslint-config-airbnb-base/rules/style.js#L334
            'error',
            {
                selector: 'ForInStatement',
                message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],
        'no-underscore-dangle': ['off'],
        'no-use-before-define': ['off'],
        'object-curly-newline': ['error', {
            'ObjectPattern': { 'consistent': true },
        }],
        'jsx-a11y/label-has-for': [2, {
            'required': {
                'every': ['id']
            }
        }],
        'one-var': ['off'],
        'one-var-declaration-per-line': ['off'],
        'quote-props': ['off'],
        'radix': ['off'],
        'react/forbid-prop-types': ['off'],
        'react/jsx-boolean-value': ['off'],
        'react/jsx-filename-extension': [1, { 'extensions': ['.jsx'] }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/no-danger': 'error', // SD Elements T36
        'react/sort-comp': ['off'],
        'semi': ['error', 'never'],
        'custom-rules/no-react-create-element': 'error', // SD Elements T36
        'custom-rules/no-unencoded-uri': 'error', // SD Elements T36
        'custom-rules/no-unencoded-uri-set-attribute': 'error', // SD Elements T36
        'custom-rules/no-unsafe-rendering': 'warn', // SD Elements T37
        'custom-rules/no-unsafe-set-attribute-for-event-handler': 'warn', // SD Elements T37
    },
}

/* eslint-disable max-len, quote-props */

// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    notify: true,

    // A preset that is used as a base for Jest's configuration
    // preset: 'react-native-web',

    // The test environment that will be used for testing
    testEnvironment: 'node',

    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',
    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/prop-definitions/',
        '/images/',
        '/styles/',
        '/test-data/',
        '/mocks/',
        '/action-types/'
    ],

    // A map from regular expressions to paths to transformers
    transform: {
        // '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js'
        '^.+\\.jsx?$': 'babel-jest',
    },

    // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
    transformIgnorePatterns: [
        // 'node_modules/(?!(jest-)?react-native|react-navigation)',
        'node_modules/(?!react-(.*-)?native(-.*)?)'
    ],

    testPathIgnorePatterns: [
        '/fixtures/',
        '/scripts/'
    ],
    moduleNameMapper: {
        // '.*\\.(svg|png|jpg|gif|ttf)$': '<rootDir>/flow/stub/url-loader.js',
        // 'react-native': '<rootDir>/node_modules/react-native-web',
        '^react-native$': 'react-native-web',
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy'
    },
    moduleFileExtensions: [
        'web.js',
        'js',
        'json'
    ]
};

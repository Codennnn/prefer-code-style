"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var IS_TS_PROJECT = fs_1.default.existsSync(path_1.default.join(process.cwd() || '.', './tsconfig.json'));
var parser = IS_TS_PROJECT
    ? '@typescript-eslint/parser'
    : '@babel/eslint-parser';
var _extends = (function () {
    return [
        'eslint:recommended',
        IS_TS_PROJECT ? 'plugin:@typescript-eslint/recommended' : null,
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
    ].filter(function (el) { return el && typeof el === 'string'; });
})();
var rules = __assign({ 'simple-import-sort/imports': 1, 'simple-import-sort/exports': 1, 'sort-imports': 0, 'import/order': 0, 'react/jsx-sort-props': [
        2,
        {
            callbacksLast: true,
            shorthandFirst: true,
            shorthandLast: false,
            ignoreCase: false,
            noSortAlphabetically: false,
            reservedFirst: true,
        },
    ] }, (IS_TS_PROJECT
    ? {
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-use-before-define': 2,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/consistent-type-imports': [
            2,
            {
                prefer: 'type-imports',
                disallowTypeAnnotations: true,
            },
        ],
    }
    : {}));
module.exports = {
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    parser: parser,
    extends: _extends,
    plugins: ['simple-import-sort'],
    rules: rules,
};

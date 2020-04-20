module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        true,
        true,
        "plugin:import/errors",
        true,
        "airbnb",
        "plugin:prettier/recommended",
        true
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "react",
        "prettier",
        "unicorn",
        "import",
        "react-hooks",
        true
    ],
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx"
                ]
            }
        }
    },
    "rules": {
        "sort-imports": [
            "error",
            {
                "ignoreCase": true,
                "ignoreDeclarationSort": true,
                "ignoreMemberSort": false
            }
        ],
        "unicorn/filename-case": "error",
        "unicorn/no-abusive-eslint-disable": "error",
        "import/order": [
            "error",
            {
                "newlines-between": "always",
                "pathGroups": [
                    {
                        "pattern": "react",
                        "group": "external",
                        "position": "before"
                    }
                ],
                "pathGroupsExcludedImportTypes": [
                    "builtin"
                ],
                "alphabetize": {
                    "order": "asc",
                    "caseInsensitive": true
                }
            }
        ],
        "import/no-extraneous-dependencies": "off",
        "import/prefer-default-export": "off",
        "import/extensions": [
            "error",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/no-unused-expressions": "error"
    }
};

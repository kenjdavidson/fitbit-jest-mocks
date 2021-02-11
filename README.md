# Fitbit Jest Mocks

Demonstration project with regards to getting [Fitbit](https://dev.fitbit.com/getting-started/) setup with [Typescript](https://www.typescriptlang.org/) and [Jest](https://jestjs.io/).

## Fitbit SDK Types

The project is configured with [fitbit-sdk-types](https://github.com/SergioMorchon/fitbit-sdk-types) which seems like the `standard` for Fitbit Typescript.

## Community

The following discussions/posts were related (and followed) with regards to setting up the Jest environment:

- [Unit tests using Jest](https://community.fitbit.com/t5/SDK-Development/Unit-tests-using-Jest/m-p/2896771)
- [Jest is not able to find Fitbit packages while calculating code coverage](https://community.fitbit.com/t5/SDK-Development/Jest-is-not-able-to-find-Fitbit-packages-while-calculating-code-coverage/m-p/3866333)

## Keys

Due to the way in which `fitbit-sdk-types` works, in that it needs to be included in the individual project `tsconfig` files:

```json
// ./tsconfig.json
{
  "extends": "./node_modules/@fitbit/sdk/sdk-tsconfig.json",
  "compilerOptions": {
    "typeRoots": [
      "./node_modules/@types"
    ],
    "types": [
      "node",
      "jest"
    ]
  },
}
```

```json
// ./app/tsconfig.json
{
    "extends": "../tsconfig.json",
    "compilerOptions": {
        "typeRoots": [
          "../node_modules/@types",          
        ],
        "types": [
          "node",
          "jest",
        ]
      },
	"include": ["**/*.ts", "../node_modules/fitbit-sdk-types/types/device"]
}
```

where the app `tsconfig` extends the project `tsconfig`.  Jest must be configured to look at the app specific version:

```json
// package.json
  "jest": {
    "transform": {
      ".(t|j)sx?": "ts-jest"
    },
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx"
    ],
    "globals": {
      "ts-jest": {
        "tsconfig": "<rootDir>/app/tsconfig.json"
      }
    },
    "moduleNameMapper": {
      "appbit": "<rootDir>/app/__mocks__/appbit.ts",
      "geolocation": "<rootDir>/__mocks__/geolocation.ts"
    },
    "testRegex": ".*\\.(test|spec)\\.(t|j)sx?$",
    "clearMocks": true,
    "restoreMocks": true,
    "testEnvironment": "node"
  }
```

where the important lines are:

- **moduleNameMapper** required configuration for only Fitbit SDK imports.  Using node_module modules or definitions (like `simple-fitbit-settings`) does not require this
- **globals/ts-jest/tsconfig** required to point at the individual app `tsconfig` file.  To ensure that the types are available from the `includes:[]` instead of the `types:[]`.


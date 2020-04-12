# ReactJS Example
This is a ReactJS web application that includes simple examples of the following technologies/libaries/etc.:
* [Material-UI](https://material-ui.com/) for the navigation bar
* [Jest](https://jestjs.io/) for unit testing
* [Enzyme](https://airbnb.io/enzyme/) for testing React components
* [React-Router-Dom](https://www.npmjs.com/package/react-router-dom) for routing
* [Redux](https://redux.js.org/) for state management
* [Redux Sagas](https://redux-saga.js.org/) for Redux side effects
* [Typescript](https://www.typescriptlang.org/) for typing

I got most of the base code for Todos and Reddit Posts from the [Redux tutorials](https://redux.js.org/basics/basic-tutorial/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run
To run this project, install it locally using yarn:
```
$ cd ../react-redux-example
$ yarn install
$ yarn start
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn lint`

Launches the TypeScript linter. The linter configuration file is `tslint.json`.

### `yarn test`

Launches the Jest test runner and will run all files that have a suffix of `.test.` or `.spec.` added before the file extension (e.g. `app.test.tsx`). To run a specific file, add `-- filename` (e.g. `yarn test -- posts` will run all tests that have file names that start with 'posts').

The configuration file for all jest tests is `jest.config.js`

### `yarn test:coverage`

Launches the Jest test runner the same as `yarn test` and will also provide a coverage report at the end. Coverage settings can be found in `jest.config.js` and are currently set to 100% coverage.

### `yarn test:debug`

To run the tests in debug mode:
* Insert `debugger` in the test file as a new line where you would like a breakpoint to be.
* Open Chrome and navigate to `chrome://inspect`
* Click on "Open dedicated DevTools for Node"
* In your terminal, type `yarn test:debug -- fileName`
You should now be able to step through your code in the Chrome DevTools.
I found these instructions [here](https://artsy.github.io/blog/2018/08/24/How-to-debug-jest-tests/).

I have the debug set to automatically turn on the watcher, so it will update with your changes. If you prefer to not have watch turned on, enter the following in your terminal:
`node --inspect node_modules/.bin/jest --runInBand --config ./jest.config.js -- fileName`

### `yarn test:watch`

Launches the Jest test runner with a watcher, which allows the tests to continue to run and update as you make code changes. Just like the other commands, you can specify a file by adding `-- filename`.

While the watcher is running, to view options, press `w` and to quit, press `q`.

## Configure VSCode

### Linter

* Install the TSLint extension in VSCode
* Open Settings and search "tslint"
* Add "tslint.json" to the Tslint: Config File setting
* Uncheck "Tslint: JS Enable"
* Change the "Tslint: Packge Manager" to yarn

### Editor Config

I created a .editorconfig file for settings like indent style. For it to work, you must also install the EditorConfig for VS Code extension.

## Notes

### TSLint

The tslint file may have settings that you don't like or find too opinionated. You can find all configuration settings [here](https://palantir.github.io/tslint/rules/).

### Yarn

This project was built using yarn. If you use npm, it will create a package.lock that will potentially conflict with the yarn.lock among other problems. If you wish to use npm, you will need to remove the yarn.lock file first.

### Snapshots

Jest has a feature called [Snapshot Testing](https://jestjs.io/docs/en/snapshot-testing) that has been integrated into this project. By default, Jest creates a separate snapshots folder in the location the test was run. I preferred to not have another folder added, so I added the `snapshotResolver.js` file, which instead just adds the snapshot file into the same folder as the test. If you wish to stick with the default, remove the "snapshotResolver" line from `jest.config.js`.

### Types

A common problem that you may run into with Typescript is an error on import that looks something like:
`Could not find a declaration file for module 'redux-logger'. '/Users/chegan/Documents/reactjs-template/react-redux/node_modules/redux-logger/dist/redux-logger.js' implicitly has an 'any' type.
  Try `npm install @types/redux-logger` if it exists or add a new declaration (.d.ts) file containing `declare module 'redux-logger';`

Usually, following the error's instructions and running `yarn add @types/package-name --dev` will solve the issue.

### Environment Files

You can read about how React handles environment variables [here](https://create-react-app.dev/docs/adding-custom-environment-variables/). A few things to note:
* `yarn start` runs in development mode and will use .env.development
* All custom variables must start with "REACT_APP_"

### Saga

[Sagas](https://reactjs.org/tutorial/tutorial.html) are used with Redux. Redux actions are synchrounous, pure functions and sagas are a way to perform asynchronous or impure functions with the store. There are alternatives to redux-saga such as thunk.

### Redux Reducers

I used two different ways to create reducers. In the todos reducer, I used the more traditional switch statement. In the Posts reducer, I used [typesafe-actions](https://github.com/piotrwitek/typesafe-actions), which aims to "reduce types verbosity and complexity in Redux Architecture".

## Tutorials

* [React](https://reactjs.org/tutorial/tutorial.html)
* [Redux - Basic](https://redux.js.org/basics/basic-tutorial/)
* [Redux - Advanced](https://redux.js.org/advanced/advanced-tutorial/)
* [Redux-Saga](https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html)

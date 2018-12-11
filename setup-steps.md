Using NVM

Latest Node.js, React, Redux + deps:
* `$ nvm install node`
* `$ npm install -g create-react-app`
* `$ create-react-app zone-test`
* `$ cd zone-test/`
* `$ npm install redux react-redux redux-thunk --save`

UI Framework:
* `$ yarn add semantic-ui-react`
* `$ npm install babel-loader`

Linting:
* `$ npm install eslint@5.6.0`
* `$ ./node_modules/.bin/eslint --init`

```
? How would you like to configure ESLint? Use a popular style guide
? Which style guide do you want to follow? Airbnb (https://github.com/airbnb/javascript)
? Do you use React? Yes
? What format do you want your config file to be in? JavaScript
Checking peerDependencies of eslint-config-airbnb@latest
The config that you've selected requires the following dependencies:

eslint-config-airbnb@latest eslint@^4.19.1 || ^5.3.0 eslint-plugin-import@^2.14.0 eslint-plugin-jsx-a11y@^6.1.1 eslint-plugin-react@^7.11.0
? Would you like to install them now with npm? Yes
```

* Add rule to support JSX in JS

`eslint.rc`:
```
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    },
```

Unit testing:
* `$ npm install --save-dev jest enzyme enzyme-adapter-react-16 chai chai-enzyme react-test-renderer redux-mock-store fetch-mock node-fetch`

Supporting React packages
* `$ npm install redux-logger react-pure-lifecycle prop-types`

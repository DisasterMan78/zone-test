Using NVM

* `$ nvm install node //update node`
* `$ npm install -g create-react-app`
* `$ create-react-app zone-test`
* `$ cd zone-test/`
* `$ npm install redux react-redux redux-thunk --save`
* `$ yarn add semantic-ui-react`
* `$ npm install --save-dev eslint`
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

* Add `eslint.rc` rule to support JSX in JS
```
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    },
```


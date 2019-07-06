This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

###

+ = will add the current value on the screen to itself

continually pressing equals does nothing

TODO:

Implement shrinking view pane as numbers get too big

### Usage

This is a calculator designed only to allow `+` and `-` operators.

#### '=' operator

If a valid expression has been entered it returns the resultant operation, if there is a previous sum and a user has backspaced it will return the previous sum, assuming a user has cleared out the previous expression operator.

For example, if a user types 1 + 1 and '=' the calculator will return 2.

If a user then types, '+' followed by '3', then presses 'CE' 2x, the screen will then go black (the user just deleted the 3 and the previous operator '+')

At this time if a user presses equals, it will return the previous sum of 2.

#### '+' operator

Can only be used after a numerical entry or after a valid expression returning a result from a previous entry.  

For example, pressing `+` initially will do nothing; however, `1 + 1 +` will return `2`.  Pressing `3 +` after that will return 5.  `1 + 1 =` will return 2.

#### '-' operator

If no initial entry has been made, the calculator assumes the user is attempting to enter a negative number to start.  For example, pressing `-` and `3` and `3` will display and be treated as `-33`.

For all uses of `-` after an initial entry or operation, the calculator will assume the user is attempting to subtract from the previous value.

#### operators in general

operators perform the function a user would assume they do.  If a user continually presses an operator it will have no effect.  However, if a user presses the `+` operator while the `-` operator is in the buffer as the last entry, the calculator will replace the current operator with the previous operator.  For example, if a user presses `33 + + + - 44` the result will be -11.

#### Values

The calculator can handle and display values up to and including scientific numbers.  

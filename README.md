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

#### Operators In General

operators perform the function a user would assume they do.  If a user continually presses an operator it will have no effect.  However, if a user presses the `+` operator while the `-` operator is in the buffer as the last entry, the calculator will replace the current operator with the previous operator.  For example, if a user presses `33 + + + - 44` the result will be -11.

#### Values

The calculator can handle and display values up to and including scientific numbers.  

### TODO:

Implement shrinking view pane as numbers get too big

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Dependencies

- Docker (version 18.09.0)
- Node (version 10.11.0)
- NPM (version 6.4.1)

## Available Scripts

In the project directory, you can run:

### `npm start`

Use this for quick starts, hot reload while developing, and local development

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Use this option if intending to deploy via AWS S3.  After the build is complete, copy all files into the relevant bucket and make them public.

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

### `sudo docker build -f Dockerfile -t calculator:latest .`

Note: this assumes you are using a mac or linux based system.

Use this to build the docker image locally on your system.  

### `docker run -it -p 80:80 --rm calculator:latest`

Note: this assumes you are using a mac or linux based system.

Run after the docker build to see the docker run on your local system.  After running docker exposes the calculator app on port 80 on your localhost.

# Getting Started with Create React App

<!-- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). -->
This project was bootstrapped with [Create React App](https://reactjs.org/docs/create-a-new-react-app.html).
create-react-app is a package used to create a react app instead of typing the code from scratch.

## Ways to install create-react-app package :

1) Using npm to install globally ```-g``` 
```npm``` will download the package and will consume storage forever and then install

```bash
npm install -g create-react-app
```
Or
2) Using npx will be like borrowing the package and after installing not consuminng the storage to keep the original package file.
```bash
npx create-react-app my-app
```
Will create a react app of name ```my-app```.

---

- Fyi, package.json and package-lock.json has the details of package to be installed in node_modules

- React components will be placed in ```src``` folder.

---

Check index.html, 
WITH THE HELP OF JAVASCRIPT THIS div id="root" WILL BE POPULATED. 
Major code of the components will be in src folder 

```src``` folder :-
index.js - Entry point
App.js - A component (Major thing to edit)

React code of index.js works in a way that whatever changes are made in components say App.js they will be rendered in index.js and sent to root element of index.html

---

In the **project directory**, you can run:

### `npm start` or `npm run start`

This will run the app  means ```npm start``` starts by showing the content of ```App.js```!!
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

---
---

# Imp Facts about ReactJS :

- A component imported will always end with backward slash eg.   ```<Component/>```
- Whatever is in curly braces that will be resolved as JS as it is JS. Eg. ````<h1>Hello {name}</h1>```` has ```let name = "Meet"``` as JS statement.

- Rect has 2 types of components -
  - Class based (old and can be confusing)
  - Function based (New easy trend, also easy syntax)
  
Therefore, now create-react-app also uses function based components. Eg. App.js has function App()
```bash
function App() {
    return(
        JSX (HTML which has worn a Javascript's crown with little change in tags naming convention)
        JSX is basically a syntax extension to write HTML with Javascript.

        This return() must only contain 1 primary div/element and then all other nested inside it. 
        Can't use div, h1, h2 multiple elements together.
        If want to use multiple tags then use 
        JSX fragment <>...h1,div,etc....</> to wrap multiple tags within return()

        Javascript uses semi-colon to end statement and semi colon after every statment in JSX might look bad 
        that's why return() has parenthesis (); 
        So we don't need to write ; for JS statements in JSX.
    )
}
```
- Babel compiles JSX down to React.createElement() calls.

These two examples are identical:

```bash
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```
The above one is easy syntax for us to write and Babel converts the above syntax to the below one of React. Otherwise without this above syntax writing React would be a nightmare : (
```bash
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

##Tips : 

- If emmet for JSX is not enabled in vs code then,
  - Go to settings by ```Ctrl``` + ```,```
  - Search for emmets
  - In includeLanguages section, add key:value pair as ```javascript```: ```javascriptreact``` 
  - Or in settings.json do ```"javascript": "javascriptreact"``` in ```emmet.includeLanguages``` section
  
  This means when .js file extension is there then it will work as  javascriptreact.

---

### `App.js`

It imports App.css so can make custom elements in App.js and write their css in App.css
(* Can directly access any imported file in vs code by pressing ```Ctrl``` and then clicking on it.)

Imported logo so it gives a warning as it's code is commented. So will comment logo import logo statement too.

---

### `npm install`  or `npm i`
It installs all the dependencies required for the react app. The information regarding these dependencies is in the package.json file and with the help of it the installation happens.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

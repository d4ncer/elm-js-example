# Elm / JavaScript Example 

This is a sample counter that demonstrates the usage of Elm & JavaScript together. 

# Installation & Usage

To install dependencies:

```bash
npm install 
```

To run the local server:

```bash
npm run server
```

The server can be accessed at http://localhost:8070

To run the Babel watcher (if you plan on modifying the JS source code):

```bash
npm run watch
```

If you want to play around with the Elm source code, you'll need the elm-platform, available [here](http://elm-lang.org/install). The compiled code is available as part of the repo.

# Elm vs Redux

There are two JS source files available for bundling (can be changed in webpack.config.js):

- app-with-elm.js
- app-without-elm.js

The goal is to get an idea of what both scenarios look like, and to hopefully demonstrate that moving some parts of your codebase to Elm is a very feasible task.


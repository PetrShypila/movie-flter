## General
The project represents simple front-end application which shows a list of movies with and allows user to filter that list by
**country**, **writer**, and **genre**.

## Tech stack
In order to implement that application following stack of technologies has been used:
* Build tool: Webpack
* JS Version: ES2015 with Babel transpiler
* Front end library: React
* Stylesheet: Bootstrap v4
* Development server: Webpack development server.
* Platform: NodeJS v8

## Usage
First for all installation of all dependecies is required:
```text
yarn install
```
Then you have two options: 
1. `yarn run build` Builds project and puts files into `dist` directory. Ready to be used in production
2. `yarn start` Starts development server with enabled hot reloading. Should be used for development purpose only.
Script starts a development server on `localhost:8080` where application is accessible.
3. In order to execute tests run `yarn run test`
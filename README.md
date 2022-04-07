# MFE Boiler Plate

You can use this file structure to build MFE.
It has two parts:
1. Host APP : It acts as a container to host the application
2. POC APP : It is dummy POC app that will be rendered via host app
## To Test the application on development

Install The npm package, using the command:

### npm install

In the project directory, you can run:

### npm run start

Open http://localhost:8080 on your browser.
To just check the POC app open http://localhost:8081 on your browser

## Developer Information

- React application using webpack 5 for module federation.
- `/src` This contains application source code.
- `/src/components` This contains elements that don't interact with the backend. You may expose these components too.
- `/src/Bootstrap.tsx` is where the relevant App is determined from the location hash.
- `/src/index.ts` is the main entry point.
- `/config` contains the webpack configuration.
- `/config/webpack.common.ts` defines the `ModuleFederationPlugin`.
- `/config/webpack.dev.ts` contains development env configuration.
- `/config/webpack.prod.ts is an empty directory but will consists of prod env configuration.

## Code Conventions

1. Use PascalCase naming convention while creating new component files
2. Use `.tsx` file only (do not use `.jsx`)
3. Create Functional and Class Components using PascalCase naming convention

## Recommendations:
1. Recommed to use `Node version: 14.2.0` in development machine.

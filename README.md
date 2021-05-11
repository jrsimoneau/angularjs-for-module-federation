# AngularJS Module Federation for POC

## Instructions for running
1. `yarn install`
2. `yarn start`
3. Visit http://localhost:8080

## About 
Using this repo as a POC for module federation. Goal is to have this application run inside of an Angular11 shell application. That repo can be found [here](https://github.com/jrsimoneau/client-hr)

### Branch - fix/angular-not-defined-in-shell-app

We're possibly getting this error in the shell app because we have no reference to angularjs in the shell app. In this app, we're using a cdn for angularjs. We're going to install the angularjs npm package and import angular in our js file.

1. Ran `yarn add angular@1.8.0`
2. Importing angular in our app.module.js file:
    ```
    import angular from 'angular.min';
    ```
3. Removing the CDN reference in the index.html file
4. Ran `yarn start` - while the app is running, we're getting a waning:
    ```
    WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
    Entrypoints:
      main (329 KiB)
          bundle.js
      ```

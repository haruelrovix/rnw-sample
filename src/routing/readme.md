# Routing and Navigation
Because routing and navigation are so different between web and native the libraries cannot be shared cross platform.
The files in this folder work around that by taking advantage of reacts platform code splitting file extension as 
outlined in React Natives [Platform Specific Code](https://facebook.github.io/react-native/docs/platform-specific-code) 

When using react-native-web we also have access to `.web.js`. If a file has the same name then when Platform === 'web'
the web file will be used instead - if it exists.

Harnessing this power we created a native and web version for the routers and the navigation methods.

## Router
For native we use [react-navigation](https://reactnavigation.org)

For web we use [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)

## Navigation
The navigator.js and navigator.web.js contain the same method names with the same params so that depending
on the platform calling the code the correct navigator will be loaded and used. This makes our navigation 
calls from within components agnostic.

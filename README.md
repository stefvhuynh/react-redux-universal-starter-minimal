React Redux Universal Starter Minimal
=====================================

This is an extremely minimal, unopinionated boilerplate for universal
react-redux applications. There is no extra tooling, no styling libraries, etc.
It only contains the literal bare minimum of what you would need to set up and
develop a universal application.

You will need to determine how to serve assets, how you will implement styling,
what you would like in a production build, etc. The code in this starter is very
straightforward and easy to understand, so it is easy to extend according to
your needs.

There are two modes for developing: hot module reload and server-side rendering.

To develop with hot module reload, run
```
npm run dev:client
```
and navigate to `localhost:8080`. This will not perform any server-side
rendering.

To develop server-side rendering, run
```
npm run dev:ssr
```
and navigate to `localhost:3000`. This will start a nodemon watch process on
the server code and restart the server whenever you make changes to your app.
It will also start a webpack watch process to keep your javascript asset up to
date. Both of these are necessary because the server-side code executes your
app's code when it serves the initial page; however, once the page is on the
client, it fetches the asset from `localhost:3000/public`. This asset needs to
be transpiled and ready for the browser.

A good workflow would be to run both of these dev processes and open up two tabs
or windows in your browser. You will be able to see your immediate changes in
the window with hot module reload and you will be able to refresh the other
window to ensure your code works when it is server rendered, as well.

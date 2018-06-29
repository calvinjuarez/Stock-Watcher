# Stock Watcher

A simple app that employs the [IEX API](https://iextrading.com/developer/docs/) and is built on
[Vue.js](https://vuejs.org).

# Styles

Global styles are compiled with Less to _/public/css/styles.css_.  Styles specific to a component
are contained in the component's _.vue_ file in _/src/components/_.

# App

The global setup is found in _/src/main.js_.  That contains all the methods available everywhere.
The `request()` and `getStock()` methods fetch data from the API, `addStock()` and `removeStock()`
manage the internal stocks array, and similarly, `addMessage()` and `removeMessage()` manage the
internal messages array, which contain user messages.

There's a lot of console interaction in the code still.  Rather than remove it, before setting up a
good and proper production environment, I'd wanna put all that logging behind a `DEBUG` flag that
could be configured per-environment.  Since the purpose of this App is not to be 100% production-
ready, however, I've elected to leave them in rather than remove them entirely.

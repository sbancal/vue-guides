# jokester

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


There’s three items to the Vuex Recipe:

1. The store centralizes all state in one global store object. That way, all components have access to the same state. As a result, updating state happens in a very controlled and predictable manner.

2. Mutations represent the only way to update state. By having very specific function names, these mutations can be committed from actions anywhere in the application in order to modify the state.

3. Actions commit mutations. These actions signal a mutation to fire from anywhere in the application.

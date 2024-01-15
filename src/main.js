import { createApp, h } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable';  // Importa DefaultApolloClient

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass, faUserSecret } from '@fortawesome/free-solid-svg-icons';

library.add(faUserSecret, faMagnifyingGlass);

const httpLink = createHttpLink({
  uri: 'https://countries.trevorblades.com/', 
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const app = createApp({
  render: () => h(App),
});

app.use(store).use(router).component('font-awesome-icon', FontAwesomeIcon);

app.provide(DefaultApolloClient, apolloClient);

app.mount('#app');

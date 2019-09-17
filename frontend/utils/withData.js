import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

function createClient({ headers }) {
  const cache = new InMemoryCache();

  const client = new ApolloClient({
    cache,
    uri:
      process.env.NODE_ENV === 'development'
        ? process.env.DEV_ENDPOINT
        : process.env.PROD_ENDPOINT,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },

    resolvers: {
      Query: {},
      Mutation: {},
    },
  });

  return client;
}

export default withApollo(createClient);

import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'

// Helps avoid making heuristic queries for union types in Strapi Dynamic Zones
import possibleTypes from '~/possibleTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: possibleTypes,
});

export default ({req, app}) => {
  return {
    httpEndpoint: (process.env.BACKEND_URL || "http://localhost:1337") + "/graphql",
    cache: new InMemoryCache({ fragmentMatcher })
  }
}
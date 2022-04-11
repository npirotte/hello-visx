import { GraphQLClient } from 'graphql-request';

export const getGqlClient = () => {
  return new GraphQLClient('https://kind-urchin-96.hasura.app/v1/graphql', {
    headers: {
      'x-hasura-admin-secret':
        'E6Vy6f5BVWJZcaU1cC0Rh240B3xBaBClB0vLwuP1MJNUP1YBPRlfybDTR4QJ31Ng',
    },
  });
};

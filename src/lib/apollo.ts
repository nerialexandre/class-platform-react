import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4r3w2wp0kgg01z544ugdkzo/master',
  cache: new InMemoryCache()
})

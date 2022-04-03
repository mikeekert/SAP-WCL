import {ApolloClient, InMemoryCache} from "@apollo/client";

const graphQLClient = new ApolloClient({
    uri: "https://www.warcraftlogs.com/api/v2/client",
    cache: new InMemoryCache()
});

export default graphQLClient;

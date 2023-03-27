import { useQuery } from "@apollo/client";
import { graphql } from "./gql";

const GET_PRODUCTS = graphql(`
  query GetProducts {
    products(first: 10) {
      edges {
        node {
          id
          title
          description
          createdAt
        }
      }
    }
  }
`);

function App() {
  const { loading, data } = useQuery(GET_PRODUCTS);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {data?.products.edges.map(
        ({ node: { createdAt, description, title } }) => {
          return <li>{[title, description, createdAt].join("// ")}</li>;
        }
      )}
    </ul>
  );
}

export default App;

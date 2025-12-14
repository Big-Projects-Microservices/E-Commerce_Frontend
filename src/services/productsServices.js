import  {graphqlClient}  from "./graphqlClient";

export const getAllProducts = async () => {
  const query = `
    query {
      products {
        id
        name
        image
        additional_image
        price
        discount_price
        category
        description
        availability
        size
      }
    }
  `;

  const data = await graphqlClient(query);
  return data.products;
};

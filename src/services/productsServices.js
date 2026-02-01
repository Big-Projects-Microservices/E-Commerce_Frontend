import { graphqlClient } from "./graphqlClient";

export const getAllProducts = async (lang = "en") => {
  const query = `
    query GetProducts($lang: String!) {
      products(where: { locale: { _eq: $lang } }) {
        id
        name
        image
        additional_image
        colors
        price
        discount_price
        category
        description
        availability
        size
        locale
      }
    }
  `;
  const variables = { lang };
  const data = await graphqlClient(query, variables);
  return data.products;
};

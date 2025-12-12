const HASURA_URL = import.meta.env.VITE_HASURA_URL;
const HASURA_SECRET = import.meta.env.VITE_HASURA_ADMIN_SECRET;

export async function getAllProducts() {
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

  const response = await fetch(HASURA_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": HASURA_SECRET,
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(`Network error: ${response.status}`);
  }

  const json = await response.json();
  console.log("Hasura response:", json);

  if (json.errors) {
    console.error("GraphQL errors:", json.errors);
    throw new Error("GraphQL query failed");
  }

  return json.data.products;
}

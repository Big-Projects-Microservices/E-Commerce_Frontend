const HASURA_URL = import.meta.env.VITE_HASURA_URL;
const HASURA_SECRET = import.meta.env.VITE_HASURA_ADMIN_SECRET;

export const graphqlClient = async (query, variables = {}) => {
  try {
    const response = await fetch(HASURA_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": HASURA_SECRET,
      },
      body: JSON.stringify({ query, variables }),
    });

    const json = await response.json();

    if (!response.ok || json.errors) {
      window.location.href = "/500";
      throw new Error("GraphQL / Network error");
    }

    return json.data;
  } catch (error) {
    window.location.href = "/500";
    throw error;
  }
};

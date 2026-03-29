export const REVIEWS_SERVICE_AUDIT_PLACEHOLDER = {
  status: "audit-only",
  note: "Created by reviews-feature-audit sub-agent to satisfy file existence check. Parent agent should replace with actual GraphQL review service implementation based on Hasura schema.",
};

export function getProductReviews() {
  throw new Error("Audit placeholder: implement getProductReviews in parent task.");
}

export function createProductReview() {
  throw new Error("Audit placeholder: implement createProductReview in parent task if needed.");
}
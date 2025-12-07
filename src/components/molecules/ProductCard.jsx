import { PriceText, ProductName, StarRaitung } from "../atoms";


export default function ProductCard({ product, isHot = false }) {
  return (
    <div
      style={{
        position: "relative",
        border: "1px solid #eee",
        borderRadius: "5px",
        textAlign: "center",
        width: "298px",
        margin: "10px",
      }}
    >
      {isHot && (
        <span
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            backgroundColor: "#f8d7da",
            color: "red",
            padding: "5px 10px",
            fontSize: "12px",
            fontWeight: "bold",
            borderRadius: "5px 0 5px 0",
          }}
        >
          HOT
        </span>
      )}

      <div
        style={{
          height: "301px",
          backgroundColor: "#f9f9f9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          
        }}
      >
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        ) : (
          "[Image Placeholder]"
        )}
      </div>

      <ProductName name={product.name}/>
      <StarRaitung rating={product.rating} />
      <PriceText
        current={product.price}
        discount={product.discount_price}
      />
      <p>{product.size}</p>
      </div>
  );
}

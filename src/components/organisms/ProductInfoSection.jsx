import { ProductGallery, ProductActions } from "@molecules";
import { StarRaitung, PriceText } from "@atoms";

export default function ProductInfoSection({ product }) {
  const allImages = [product.image, ...(product.additional_image || [])].filter(
    (img) => img,
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <ProductGallery images={allImages} />

      <div className="flex flex-col">
        <h1 className="text-3xl font-medium text-gray-900 mb-4">
          {product.name}
        </h1>

        <div className="flex items-center gap-4 mb-4">
          <StarRaitung stars={product.rating} reviews={product.reviewsCount} />
          <button className="text-blue-400 text-sm hover:underline">
            Submit a review
          </button>
        </div>

        <PriceText current={product.price} discount={product.discount_price} />

        <ProductActions product={product} />
      </div>
    </div>
  );
}

import { StarRaitung, PriceText } from "@atoms";

export default function SidebarBestSeller() {
  const product = {
    title: "Nike Men's running",
    price: 499,
    oldPrice: 599,
    image: "https://via.placeholder.com/300x200?text=Best+Seller+Shoe",
    rating: 5,
  };

  return (
    <div className="border border-gray-200 rounded-lg p-6 hidden lg:block bg-white">
      <h3 className="text-gray-400 text-xs font-bold mb-6 uppercase tracking-wider">
        Best Seller
      </h3>

      <div className="mb-4 bg-gray-50 rounded-lg p-2 flex justify-center">
        <img
          src={product.image}
          alt="Best Seller"
          className="w-full h-auto object-contain max-h-[150px] mix-blend-multiply"
        />
      </div>

      <div className="text-center space-y-2">
        <div className="flex justify-center">
          <StarRaitung stars={product.rating} reviews={0} />
        </div>
        <PriceText />
      </div>
    </div>
  );
}

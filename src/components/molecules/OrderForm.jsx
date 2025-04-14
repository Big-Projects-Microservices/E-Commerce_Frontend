export default function OrderForm() {
  const subtotal = 998;
  const shippingFee = 20;
  const coupon = "No";
  const total = 118;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xs mx-auto font-sans border-t border-gray-200 space-y-4 w-full"
    >
      <div className="flex justify-between">
        <label htmlFor="subtotal">Subtotal</label>
        <span id="subtotal">${subtotal}</span>
      </div>

      <div className="flex justify-between">
        <label htmlFor="shipping">Shipping fee</label>
        <span id="shipping">${shippingFee}</span>
      </div>

      <div className="flex justify-between">
        <label htmlFor="coupon">Coupon</label>
        <span id="coupon">{coupon}</span>
      </div>

      <hr className="my-2" />

      <div className="flex justify-between items-center text-lg font-bold">
        <label htmlFor="total" className="text-black">
          TOTAL
        </label>
        <span id="total">${total}</span>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Check out
      </button>
    </form>
  );
}

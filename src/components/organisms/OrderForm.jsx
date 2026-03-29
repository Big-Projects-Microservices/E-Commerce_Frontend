import { useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import { totalPrice } from "@recoil/selectors/totalPrice";
import PaymentModal from "./PaymentModal";

export default function OrderForm() {
  const subTotal = useRecoilValue(totalPrice);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const shippingFee = 20;
  const coupon = "No";
  const total = useMemo(() => subTotal + shippingFee, [subTotal, shippingFee]);

  const handleCheckoutClick = () => {
    setIsPaymentModalOpen(true);
  };

  const handleClosePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  return (
    <>
      <section className="w-full max-w-xs space-y-4 border-t border-gray-200 font-sans">
        <div className="flex justify-between pt-4">
          <span>Subtotal</span>
          <span>${subTotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping fee</span>
          <span>${shippingFee}</span>
        </div>

        <div className="flex justify-between">
          <span>Coupon</span>
          <span>{coupon}</span>
        </div>

        <hr className="my-2" />

        <div className="flex items-center justify-between text-lg font-bold">
          <span className="text-black">TOTAL</span>
          <span>${total}</span>
        </div>

        <button
          type="button"
          onClick={handleCheckoutClick}
          className="w-full rounded bg-blue-500 py-2 text-[20px] text-white transition hover:bg-blue-600"
        >
          Check out
        </button>
      </section>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={handleClosePaymentModal}
      />
    </>
  );
}

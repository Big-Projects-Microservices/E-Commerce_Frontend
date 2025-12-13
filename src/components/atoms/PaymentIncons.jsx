import { FaCcVisa, FaCcMastercard, FaPaypal } from "react-icons/fa";

export default function PaymentIcons() {
  return (
    <div className="flex space-x-4 justify-end">
      <FaCcMastercard size={40} />
      <FaPaypal size={40} />
      <FaCcVisa size={40} />
    </div>
  );
}

import { Icon } from "@atoms";
import { FeatureCard } from "@molecules";
import refund from "../../assets/info-features/refund.svg";
import shipping from "../../assets/info-features/shipping.svg";
import support from "../../assets/info-features/support.svg";
export default function InfoFeatures() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 text-center py-10">
      <FeatureCard
        icon={<Icon src={shipping} className="w-24 h-16 mb-2 justify-center" />}
        title="Free Shipping"
        description={"Enjoy fast and \n free delivery on all orders"}
        className="whitespace-pre-line"
      />
      <FeatureCard
        icon={<Icon src={refund} className="w-24 h-16 mb-2 justify-center" />}
        title="100% Refund"
        description={"Not satisfied? \n Get a full refund with no hassle"}
        className="whitespace-pre-line"
      />
      <FeatureCard
        icon={<Icon src={support} className="w-24 h-16 mb-2 justify-center" />}
        title="Support 24/7"
        description={"We're here for you \n anytime, day or night"}
        className="whitespace-pre-line"
      />
    </div>
  );
}

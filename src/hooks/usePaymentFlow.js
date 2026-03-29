import { useEffect, useMemo, useState } from "react";
import {
  confirmStripePayment,
  createStripeContext,
} from "@services/stripeService";

const INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  address: "",
  orderNotes: "",
  paymentMethod: "paypal",
  cardNumber: "",
  expiry: "",
  cvv: "",
};

const METHOD_OPTIONS = [
  { value: "paypal", label: "PayPal" },
  { value: "bank-transfer", label: "Bank Transfer" },
];

export default function usePaymentFlow({
  isOpen,
  onClose,
  publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY,
}) {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState(INITIAL_FORM_VALUES);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stripeContext, setStripeContext] = useState({
    isAvailable: false,
    stripePromise: null,
    Elements: null,
    CardNumberElement: null,
    CardExpiryElement: null,
    CardCvcElement: null,
  });

  useEffect(() => {
    let isMounted = true;

    if (isOpen) {
      createStripeContext(publishableKey).then((context) => {
        if (isMounted) {
          setStripeContext(context);
        }
      });
    }

    return () => {
      isMounted = false;
    };
  }, [isOpen, publishableKey]);

  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setValues(INITIAL_FORM_VALUES);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const methodOptions = useMemo(() => METHOD_OPTIONS, []);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;

    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  };

  const handleMethodChange = (paymentMethod) => {
    setValues((currentValues) => ({
      ...currentValues,
      paymentMethod,
    }));
  };

  const handlePersonalSubmit = (event) => {
    event.preventDefault();
    setStep(2);
  };

  const handlePaymentSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await confirmStripePayment({
        paymentMethod: values.paymentMethod,
        customer: values,
      });

      if (result.success) {
        setStep(3);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleComplete = () => {
    onClose?.();
  };

  return {
    step,
    values,
    isSubmitting,
    stripeContext,
    methodOptions,
    handleFieldChange,
    handleMethodChange,
    handlePersonalSubmit,
    handlePaymentSubmit,
    handleComplete,
  };
}

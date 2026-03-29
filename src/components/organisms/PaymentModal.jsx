import { useTranslation } from "react-i18next";
import {
  CardDetailsForm,
  PersonalInfoForm,
  SuccessMessage,
} from "@molecules";
import { StepIndicator } from "@atoms";
import usePaymentFlow from "../../hooks/usePaymentFlow";

function PaymentModalContent({ flow, onClose }) {
  const { t } = useTranslation();
  const {
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
  } = flow;

  const isStepOne = step === 1;
  const isStepTwo = step === 2;
  const isStepThree = step === 3;

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "14px",
        color: "#0f172a",
        "::placeholder": {
          color: "#94a3b8",
        },
      },
      invalid: {
        color: "#ef4444",
      },
    },
  };

  const content = (
    <>
      <div className="mb-6 flex items-center justify-between">
        <button
          type="button"
          onClick={onClose}
          className="text-lg text-sky-500 transition hover:text-sky-600"
          aria-label="Close payment modal"
        >
          ←
        </button>

        <div className="space-y-3 text-center">
          <p className="text-2xl font-medium text-sky-500">
            {t("payment.title")}
          </p>
          <StepIndicator currentStep={step} totalSteps={3} />
        </div>

        <button
          type="button"
          onClick={onClose}
          className="text-lg text-sky-500 transition hover:text-sky-600"
          aria-label="Dismiss payment modal"
        >
          ×
        </button>
      </div>

      {isStepOne && (
        <PersonalInfoForm
          values={values}
          methodOptions={methodOptions}
          onFieldChange={handleFieldChange}
          onMethodChange={handleMethodChange}
          onSubmit={handlePersonalSubmit}
        />
      )}

      {isStepTwo && (
        <CardDetailsForm
          values={values}
          onFieldChange={handleFieldChange}
          onSubmit={handlePaymentSubmit}
          cardElementReady={stripeContext.isAvailable}
          cardNumberElement={
            stripeContext.CardNumberElement ? (
              <stripeContext.CardNumberElement options={cardElementOptions} />
            ) : null
          }
          expiryElement={
            stripeContext.CardExpiryElement ? (
              <stripeContext.CardExpiryElement options={cardElementOptions} />
            ) : null
          }
          cvvElement={
            stripeContext.CardCvcElement ? (
              <stripeContext.CardCvcElement options={cardElementOptions} />
            ) : null
          }
        />
      )}

      {isStepThree && <SuccessMessage onComplete={handleComplete} />}

      {isSubmitting && (
        <p className="mt-4 text-center text-sm text-slate-500">
          {t("payment.processing")}
        </p>
      )}
    </>
  );

  if (stripeContext.isAvailable && stripeContext.Elements) {
    const ElementsComponent = stripeContext.Elements;

    return (
      <ElementsComponent stripe={stripeContext.stripePromise}>
        {content}
      </ElementsComponent>
    );
  }

  return content;
}

export default function PaymentModal({ isOpen, onClose }) {
  const flow = usePaymentFlow({ isOpen, onClose });

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4 py-10">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
        <PaymentModalContent flow={flow} onClose={onClose} />
      </div>
    </div>
  );
}

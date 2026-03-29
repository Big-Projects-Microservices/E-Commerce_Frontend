let stripeModulesPromise = null;

async function loadStripeModules() {
  if (!stripeModulesPromise) {
    stripeModulesPromise = Promise.allSettled([
      import("@stripe/stripe-js"),
      import("@stripe/react-stripe-js"),
    ]).then(([stripeJsResult, reactStripeResult]) => ({
      stripeJs:
        stripeJsResult.status === "fulfilled" ? stripeJsResult.value : null,
      reactStripe:
        reactStripeResult.status === "fulfilled"
          ? reactStripeResult.value
          : null,
    }));
  }

  return stripeModulesPromise;
}

export async function getStripeAvailability() {
  const modules = await loadStripeModules();

  return {
    isAvailable: Boolean(modules.stripeJs && modules.reactStripe),
    ...modules,
  };
}

export async function createStripeContext(publishableKey) {
  const availability = await getStripeAvailability();

  if (!availability.isAvailable || !publishableKey) {
    return {
      isAvailable: false,
      stripePromise: null,
      Elements: null,
      CardNumberElement: null,
      CardExpiryElement: null,
      CardCvcElement: null,
    };
  }

  return {
    isAvailable: true,
    stripePromise: availability.stripeJs.loadStripe(publishableKey),
    Elements: availability.reactStripe.Elements,
    CardNumberElement: availability.reactStripe.CardNumberElement,
    CardExpiryElement: availability.reactStripe.CardExpiryElement,
    CardCvcElement: availability.reactStripe.CardCvcElement,
  };
}

export async function confirmStripePayment() {
  await new Promise((resolve) => setTimeout(resolve, 700));

  return {
    success: true,
    transactionId: `txn_${Date.now()}`,
  };
}

export default function StepIndicator({
  currentStep = 1,
  totalSteps = 3,
  className = "",
}) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      {Array.from({ length: totalSteps }, (_, index) => {
        const step = index + 1;
        const isActive = step === currentStep;
        const isCompleted = step < currentStep;

        return (
          <div
            key={step}
            className={`h-3 w-3 rounded-full border transition-all duration-300 ${
              isActive || isCompleted
                ? "border-sky-500 bg-sky-500"
                : "border-slate-300 bg-slate-200"
            }`}
            aria-label={`Step ${step}`}
          />
        );
      })}
    </div>
  );
}

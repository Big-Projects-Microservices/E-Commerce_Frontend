export default function CardVisual({
  cardNumber = "1234 5678 9123 4567",
  cardHolder = "CARD HOLDER",
  expiry = "09/30",
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-500 via-slate-400 to-slate-700 p-5 text-white shadow-lg">
      <div className="absolute right-0 top-0 h-24 w-24 -translate-y-6 translate-x-6 rounded-full bg-white/10" />
      <div className="absolute bottom-0 left-0 h-20 w-20 -translate-x-6 translate-y-6 rounded-full bg-white/10" />

      <div className="relative flex min-h-[180px] flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="h-8 w-12 rounded-md bg-white/25" />
          <span className="text-sm font-semibold tracking-[0.25em]">VISA</span>
        </div>

        <div className="space-y-4">
          <p className="text-xl font-semibold tracking-[0.28em] sm:text-2xl">
            {cardNumber}
          </p>

          <div className="flex items-end justify-between text-xs uppercase tracking-[0.22em] text-white/80">
            <div>
              <p className="mb-1 text-[10px] text-white/60">Card Holder</p>
              <p className="text-sm text-white">{cardHolder}</p>
            </div>

            <div className="text-right">
              <p className="mb-1 text-[10px] text-white/60">Expiry</p>
              <p className="text-sm text-white">{expiry}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

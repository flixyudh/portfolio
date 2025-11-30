export const StatCard = ({ number, label }) => (
  <div className="bg-white/60 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 text-center shadow-sm dark:shadow-none">
    <div className="text-2xl md:text-3xl font-bold text-teal-600 dark:text-teal-400 mb-1">{number}</div>
    <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">{label}</div>
  </div>
);
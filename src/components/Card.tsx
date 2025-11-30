export const Card = ({ children, className = "" }) => (
  <div className={`bg-white/60 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 rounded-xl p-6 hover:border-teal-500/50 transition-colors duration-300 shadow-xl dark:shadow-none ${className}`}>
    {children}
  </div>
);
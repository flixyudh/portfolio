export const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank"
    className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-white dark:hover:text-white hover:bg-teal-500 dark:hover:bg-teal-600 hover:-translate-y-1 transition-all duration-300"
  >
    {icon}
  </a>
);
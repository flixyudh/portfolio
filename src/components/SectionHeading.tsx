export const SectionHeading = ({ children, isVisible }) => (
  <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-500">
      {children}
    </span>
  </h2>
);
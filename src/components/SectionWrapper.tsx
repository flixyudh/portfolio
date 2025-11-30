import { useOnScreen } from "../hooks/useOnScreen";
import { SectionHeading } from "./SectionHeading";

export const SectionWrapper = ({ id, title, children }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  
  return (
    <section id={id} ref={ref} className="py-20 px-6 max-w-6xl mx-auto">
      {title && <SectionHeading isVisible={isVisible}>{title}</SectionHeading>}
      <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {children}
      </div>
    </section>
  );
};
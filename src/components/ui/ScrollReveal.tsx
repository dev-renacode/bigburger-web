import { useEffect, useRef, useState, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  once?: boolean; // si quieres que se anime una sola vez
};

const ScrollReveal = ({
  children,
  className = "",
  once = true,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

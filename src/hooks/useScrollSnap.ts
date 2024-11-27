import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';

export const useScrollSnap = () => {
  const [currSection, setCurreSection] = useState(0);
  const controls = useAnimation();
  let isScrolling = false;

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Array.from(sections).indexOf(
              entry.target as HTMLElement
            );
            setCurreSection(index);
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    sections.forEach(section => observer.observe(section));

    const onWheelOnce = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrolling) return;
      isScrolling = true;

      const dir = e.deltaY > 0 ? 1 : -1;
      const nextSection = Math.max(
        0,
        Math.min(currSection + dir, sections.length - 1)
      );
      const targetPosition = sections[nextSection].offsetTop;

      controls
        .start({
          y: -targetPosition,
          transition: { duration: 0.8, ease: 'easeInOut' }
        })
        .then(() => {
          isScrolling = false;
        });
    };

    window.addEventListener('wheel', onWheelOnce, { passive: false });

    return () => {
      window.removeEventListener('wheel', onWheelOnce);
      sections.forEach(section => observer.unobserve(section));
    };
  }, [currSection]);

  return { currSection, controls };
};

import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function Typing({ strings }: { strings: string[] }) {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        duration: 1,
        delay: 1,
        stagger: 0.1,
        ease: 'back'
      }
    );
  }, []);

  return (
    <p ref={textRef} className="flex flex-col w-full">
      {strings.map((string, index) => (
        <span
          className={index === 2 * index - 1 ? 'self-start' : 'self-end'}
          key={index}
        >
          {string}
        </span>
      ))}
    </p>
  );
}

import { useScrollSnap } from '@/hooks/useScrollSnap';
import { HTMLMotionProps, motion } from 'framer-motion';

const Container = ({
  className,
  children,
  ...props
}: HTMLMotionProps<'main'>) => {
  const { controls } = useScrollSnap();

  return (
    <motion.main
      animate={controls}
      className="init bg-noise-texture px-28"
      {...props}
    >
      {children}
    </motion.main>
  );
};
export default Container;

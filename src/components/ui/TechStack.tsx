import { cn } from '@/utils/helper';
import React from 'react';

type TechStackProps = {
  bgColor?: string;
  color?: string;
  className?: string;
  children: React.ReactNode;
};

const TechStack = ({
  bgColor,
  color = '#fff',
  className,
  children
}: TechStackProps) => (
  <div
    className={cn(
      'flex-center-center w-fit p-[0.438rem_0.75rem] font-bold',
      className
    )}
    style={{ backgroundColor: bgColor, color }}
  >
    {children}
  </div>
);

export default TechStack;

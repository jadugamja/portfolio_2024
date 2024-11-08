import React from 'react';

const TechStack = ({
  bgColor,
  color = '#fff',
  children
}: {
  bgColor?: string;
  color?: string;
  children: React.ReactNode;
}) => (
  <div
    className="flex-center-center w-fit p-[0.438rem_0.75rem] font-bold"
    style={{ backgroundColor: bgColor, color }}
  >
    {children}
  </div>
);

export default TechStack;

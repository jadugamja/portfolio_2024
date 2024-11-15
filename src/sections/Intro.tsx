import Typing from '@/components/ui/Typing';
import { cn } from '@/utils/helper';
import { forwardRef } from 'react';

const Intro = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <section
        className={cn('flex-col-center-center w-full min-h-dvh', className)}
        ref={ref}
        {...props}
      >
        <h1 className="relative flex flex-col w-full text-neutral-5 leading-none font-normal text-[11.25rem] max-w-full font-dela-gothic-one break-words">
          <Typing strings={['FRONT-END', 'PORTFOLIO']} />
        </h1>
        <div className="relative flex flex-col items-end w-full -bottom-[12vh]">
          <hr className="w-[43.75rem] h-[0.063rem] bg-neutral-5" />
          <p className="text-2xl mt-[0.625rem] tracking-[0.42rem]">
            더 나은 사용자 경험을 향하여
          </p>
        </div>
      </section>
    );
  }
);

export default Intro;

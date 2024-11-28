import TechStack from '@/components/ui/TechStack';
import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const skills = [
  { name: 'Next', bgColor: '#585858' },
  { name: 'JavaScript', bgColor: '#F7DF1E', color: '#1a1a1a' },
  { name: 'TypeScript', bgColor: '#0474BF' },
  { name: 'React', bgColor: '#61DAFB', color: '#1a1a1a' },
  { name: 'TailwindCSS', bgColor: '#37BCC7', color: '#1a1a1a' },
  { name: 'Recoil', bgColor: '#0983FD' },
  { name: 'Redux', bgColor: '#7F4DD1' },
  { name: 'React Query', bgColor: '#FF4154' },
  { name: 'Git', bgColor: '#F05032' },
  { name: 'Zustand', bgColor: '#4C3E2E' }
];

const Profile = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section
      className="relative flex-center-center w-full min-h-dvh"
      {...props}
    >
      <div className="max-w-[44.5rem] flex-col-center-center w-full gap-y-12">
        <Introduce />
        <Skills />
        <Contact />
      </div>
    </section>
  );
};

const Introduce = () => {
  return (
    <div>
      <h2 className="text-[3.2rem] font-[350]">
        최적의 <span className="font-bold">사용자 경험</span>을 추구합니다.
      </h2>
      <hr className="w-full my-3" />
      <p className="text-xl font-extralight flex flex-col px-1">
        개발자로서의 전문성{`·`}명확한 의사 전달{`·`}높은 품질을 위한 끊임없는
        검토라는 세 가지 가치를 추구하며, 이를 바탕으로 비즈니스의 성공에
        능동적으로 기여하는 개발자가 되고자 합니다.
      </p>
    </div>
  );
};

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false });

  const carouselVariants: Variants = {
    hidden: { x: '0%' },
    visible: {
      x: '-100%',
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 40,
        ease: 'linear'
      }
    }
  };

  return (
    <div className="flex flex-col items-start w-full gap-y-[0.625rem]">
      <h3 className="font-noto-sans-kr text-2xl font-medium">Tech Stack</h3>
      <div className="relative w-full overflow-hidden" ref={containerRef}>
        <motion.div
          className="flex gap-3 flex-nowrap"
          variants={carouselVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skills.map(skill => (
            <TechStack
              key={skill.name}
              bgColor={skill.bgColor}
              color={skill.color}
              className="flex-shrink-0 max-w-full"
            >
              {skill.name}
            </TechStack>
          ))}
          {skills.map(skill => (
            <TechStack
              key={skill.name + '-duplicate'}
              bgColor={skill.bgColor}
              color={skill.color}
              className="flex-shrink-0"
            >
              {skill.name}
            </TechStack>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="flex flex-col items-start w-full gap-y-[0.625rem]">
      <h3 className="font-noto-sans-kr text-2xl font-medium">Find Me Here</h3>
      <div className="relative flex flex-col gap-y-2 z-20">
        <a
          href="mailto:gheedong2@gmail.com"
          className="flex items-center gap-x-[0.625rem]"
        >
          <motion.span
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <IoIosMail fontSize="1.75rem" />
          </motion.span>
          <span className="text-xl font-extralight tracking-[0.2rem]">
            gheedong2@gmail.com
          </span>
        </a>
        <a
          href="https://github.com/jadugamja"
          className="flex items-center gap-x-[0.625rem] w-fit"
        >
          <motion.span
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaGithub fontSize="1.625rem" />
          </motion.span>
          <span className="text-xl font-extralight tracking-[0.2rem]">
            github.com/jadugamja
          </span>
        </a>
      </div>
    </div>
  );
};

export default Profile;

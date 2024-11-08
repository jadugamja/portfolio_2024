import TechStack from '@/components/ui/TechStack';
import { FaGithub } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const skills = [
  { name: 'Next', bgColor: '#585858' },
  { name: 'TypeScript', bgColor: '#007ACC' },
  { name: 'React', bgColor: '#61DAFB', color: '#3A3A3A' },
  { name: 'TailwindCSS', bgColor: '#21AFBB' },
  { name: 'Redux', bgColor: '#7F4DD1' },
  { name: 'React Query', bgColor: '#FF4154' },
  { name: 'Git', bgColor: '#F05032' }
];

const Profile = () => {
  return (
    <section className="flex-center-center w-full min-h-dvh">
      <div className="max-w-[44.5rem] flex-col-center-center w-full gap-y-12">
        <div>
          <h2 className="text-[3.2rem] font-[350]">
            최적의 <span className="font-bold">사용자 경험</span>을 추구합니다.
          </h2>
          <hr className="w-full h-[0.188rem] bg-neutral-5 my-3" />
          <p className="text-xl font-extralight flex flex-col">
            개발자로서의 전문성{`·`}명확한 의사 전달{`·`}높은 품질을 위한
            끊임없는 검토라는 세 가지 가치를 추구하며, 이를 바탕으로 비즈니스의
            성공에 능동적으로 기여하는 개발자가 되고자 합니다.
          </p>
        </div>
        <div className="flex flex-col items-start w-full gap-y-[0.625rem]">
          <h3 className="font-noto-sans-kr text-2xl font-medium">Tech Stack</h3>
          <div className="flex gap-3">
            {skills.map(skill => (
              <TechStack
                key={skill.name}
                bgColor={skill.bgColor}
                color={skill.color}
              >
                {skill.name}
              </TechStack>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start w-full gap-y-[0.625rem]">
          <h3 className="font-noto-sans-kr text-2xl font-medium">
            Find Me Here
          </h3>
          <div className="flex flex-col gap-y-2">
            <a
              href="mailto:gheedong2@gmail.com"
              className="flex items-center gap-x-[0.625rem]"
            >
              <IoIosMail fontSize="1.75rem" />
              <span className="text-xl font-extralight tracking-wider">
                gheedong2@gmail.com
              </span>
            </a>
            <a
              href="https://github.com/jadugamja"
              className="flex items-center gap-x-[0.625rem] w-fit"
            >
              <FaGithub fontSize="1.625rem" />
              <span className="text-xl font-extralight tracking-wider">
                github.com/jadugamja
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

import Typing from '@/components/ui/Typing';

export default function Intro() {
  return (
    <section className="flex-col-center-center w-full min-h-dvh p-[0_7.125rem]">
      <h1 className="relative flex flex-col w-full text-[#e7e7e7] leading-none font-normal text-[11.25rem] max-w-full font-dela-gothic-one break-words">
        <Typing strings={['FRONT-END', 'PORTFOLIO']} />
      </h1>
      <div className="relative flex flex-col items-end w-full bottom-[-9vh]">
        <hr className="w-[43.75rem] h-[0.063rem] bg-[#e7e7e7]" />
        <p className="text-2xl mt-[0.625rem]">더 나은 사용자 경험을 향하여</p>
      </div>
    </section>
  );
}

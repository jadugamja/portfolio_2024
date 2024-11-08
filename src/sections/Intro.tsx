export default function Intro() {
  return (
    <section className="flex-col-between-center w-full min-h-dvh p-[0 7.125rem]">
      <h1 className="relative flex flex-col text-[#e7e7e7] leading-none font-normal text-[clamp(5.3rem, 16.8vw, 11.25rem)]"></h1>
      <div className="relative bottom- flex flex-col items-end">
        <hr className="w-[43.75rem] h-[0.063rem] bg-[#e7e7e7]" />
        <p className="text-2xl mt-[0.625rem]">더 나은 사용자 경험을 향하여</p>
      </div>
    </section>
  );
}

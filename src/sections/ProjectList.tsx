const projects = [
  {
    name: '플로디텍터',
    role: '프론트엔드 개발'
  },
  {
    name: '끝짱',
    role: '기획, 디자인, 프론트엔드 개발'
  },
  {
    name: '新위성정보시스템',
    company: '㈜엔지스',
    role: '디자인, 웹 애플리케이션 개발'
  },
  {
    name: '통합관리사이트',
    company: '㈜엔지스',
    role: '웹 애플리케이션, 리눅스 배치 프로그램 개발'
  }
];

const ProjectList = () => {
  return (
    <section className="flex relative w-full min-h-dvh pt-[7.8rem] gap-x-[13.5rem]">
      <h2 className="flex flex-col basis-[21.25rem] font-dela-gothic-one text-[5rem] h-fit leading-none">
        <span className="self-end">PROJ</span>
        <span className="self-start">ECTS</span>
      </h2>
      <ul className="flex-grow flex flex-col gap-y-[4rem]">
        {projects.map(({ name, company, role }, index) => (
          <li key={index}>
            <div className="flex items-center gap-x-7 last:gap-x-1">
              <span className="font-actor text-[3.375rem]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-[2.5rem] font-medium">{name}</span>
              {company && (
                <span className="self-end mb-4 text-lg font-light -ml-3">
                  {company}
                </span>
              )}
            </div>
            <div className="text-xl font-light">{`ㆍ ${role}`}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default ProjectList;

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 px-28 max-h-[6.5rem] size-full p-[0 7.5rem] backdrop-blur-sm z-10">
      <ul className="flex-between-center h-full">
        <li>
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="font-jacques-francois text-[1.375rem] tracking-[0.4em]">
              2024
            </span>
          </Link>
        </li>
        <li className="text-xl font-gowun-dodam tracking-[0.5em]">유지수</li>
      </ul>
    </header>
  );
};
export default Header;

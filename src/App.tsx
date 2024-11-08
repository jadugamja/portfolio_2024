import Header from './components/layout/Header';
import Intro from './sections/Intro';
import Profile from './sections/Profile';

export default function App() {
  return (
    <div className="init bg-noise-texture">
      <Header />
      <Intro />
      <Profile />
    </div>
  );
}

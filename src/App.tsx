import Header from './components/layout/Header';
import Intro from './sections/Intro';
import Profile from './sections/Profile';
import ProjectList from './sections/ProjectList';

export default function App() {
  return (
    <main className="init bg-noise-texture">
      <Header />
      <Intro />
      <Profile />
      <ProjectList />
    </main>
  );
}

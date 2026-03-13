import { NavLink, Route, Routes } from 'react-router';

export const App: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <nav className="flex gap-4 border-b p-4">
        <NavLink className={({ isActive }) => (isActive ? 'font-bold' : '')} end to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'font-bold' : '')} to="/about">
          About
        </NavLink>
      </nav>

      <main className="flex flex-1 items-center justify-center">
        <Routes>
          <Route element={<Home />} index />
          <Route element={<About />} path="about" />
        </Routes>
      </main>
    </div>
  );
};

const Home: React.FC = () => <h1 className="text-4xl font-bold">Home</h1>;

const About: React.FC = () => <h1 className="text-4xl font-bold">About</h1>;

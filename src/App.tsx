/* Core */
import { Link, NavLink, Outlet } from 'react-router';

/* Components */
import { ThemeToggle } from '@/components/ThemeToggle';

/* Instruments */
import { cn } from '@/helpers/cn';

export const App = () => {
  const navJSX = navItems.map((item) => {
    return (
      <NavLink
        className={({ isActive }) => {
          return cn(
            'text-sm transition-colors hover:text-foreground',
            isActive ? 'text-foreground' : 'text-muted-foreground',
          );
        }}
        end={item.end}
        key={item.to}
        to={item.to}>
        {item.label}
      </NavLink>
    );
  });

  return (
    <div className='flex min-h-dvh flex-col'>
      <header className='flex items-center gap-6 border-b px-6 py-4'>
        <Link className='font-mono text-sm font-semibold tracking-tight' to='/'>
          inner-marker
        </Link>

        <nav className='mr-auto flex gap-5'>{navJSX}</nav>

        <ThemeToggle />
      </header>

      <main className='flex flex-1 flex-col'>
        <Outlet />
      </main>
    </div>
  );
};

/* Helpers */
const navItems = [
  { end: true, label: 'home', to: '/' },
  { end: false, label: 'lab', to: '/lab' },
];

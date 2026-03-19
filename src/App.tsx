/* Core */
import { NavLink, Outlet } from 'react-router';

import { cn } from '@/helpers/cn';

export const AppShell: React.FC = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <nav
        className='flex items-center justify-between border-b px-6 py-4'
        style={{ viewTransitionName: 'app-nav' }}>
        <span className='font-mono text-sm font-semibold tracking-tight text-foreground'>
          inner-marker
        </span>
        <div className='flex gap-6'>
          <NavLink
            className={({ isActive }) =>
              cn(
                'text-sm transition-colors hover:text-foreground',
                isActive
                  ? 'font-semibold text-foreground'
                  : 'text-muted-foreground',
              )
            }
            end
            to='/'
            viewTransition>
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(
                'text-sm transition-colors hover:text-foreground',
                isActive
                  ? 'font-semibold text-foreground'
                  : 'text-muted-foreground',
              )
            }
            to='/work'
            viewTransition>
            Work
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(
                'text-sm transition-colors hover:text-foreground',
                isActive
                  ? 'font-semibold text-foreground'
                  : 'text-muted-foreground',
              )
            }
            to='/stack'
            viewTransition>
            Stack
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(
                'text-sm transition-colors hover:text-foreground',
                isActive
                  ? 'font-semibold text-foreground'
                  : 'text-muted-foreground',
              )
            }
            to='/about'
            viewTransition>
            About
          </NavLink>
        </div>
      </nav>

      <main className='flex flex-1 flex-col'>
        <Outlet />
      </main>
    </div>
  );
};

export const Home: React.FC = () => {
  return (
    <div
      className='mx-auto max-w-2xl px-6 py-20'
      style={{ viewTransitionName: 'page-content' }}>
      <h1 className='mb-4 text-5xl font-bold tracking-tight text-foreground'>
        Building things that feel right.
      </h1>
      <p className='mb-12 text-lg leading-relaxed text-muted-foreground'>
        Frontend engineer obsessed with interaction design, smooth animations,
        and interfaces that spark joy. Currently exploring React 19, View
        Transitions, and the edges of what CSS can do.
      </p>
      <div className='flex gap-4'>
        {stats.map((stat) => (
          <div
            className='rounded-md border bg-card px-4 py-3 text-center'
            key={stat.label}>
            <div className='text-2xl font-bold text-foreground'>
              {stat.value}
            </div>
            <div className='text-xs text-muted-foreground'>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Work: React.FC = () => {
  return (
    <div
      className='mx-auto max-w-2xl px-6 py-20'
      style={{ viewTransitionName: 'page-content' }}>
      <h1 className='mb-10 text-4xl font-bold tracking-tight text-foreground'>
        Work
      </h1>
      <div className='grid gap-6'>
        {workItems.map((item) => (
          <div className='rounded-lg border bg-card p-6' key={item.title}>
            <h2 className='mb-2 text-xl font-semibold text-foreground'>
              {item.title}
            </h2>
            <p className='mb-4 text-sm text-muted-foreground'>{item.desc}</p>
            <div className='flex flex-wrap gap-2'>
              {item.tech.map((t) => (
                <span
                  className='rounded-sm bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground'
                  key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Stack: React.FC = () => {
  return (
    <div
      className='mx-auto max-w-2xl px-6 py-20'
      style={{ viewTransitionName: 'page-content' }}>
      <h1 className='mb-10 text-4xl font-bold tracking-tight text-foreground'>
        Stack
      </h1>
      <div className='grid gap-8'>
        {stackGroups.map((group) => (
          <div key={group.label}>
            <h2 className='mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground'>
              {group.label}
            </h2>
            <div className='flex flex-wrap gap-2'>
              {group.items.map((item) => (
                <span
                  className='rounded-md border bg-card px-3 py-1.5 text-sm font-medium text-foreground'
                  key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const About: React.FC = () => {
  return (
    <div
      className='mx-auto max-w-2xl px-6 py-20'
      style={{ viewTransitionName: 'page-content' }}>
      <h1 className='mb-8 text-4xl font-bold tracking-tight text-foreground'>
        About
      </h1>
      <div className='space-y-5 text-base leading-relaxed text-muted-foreground'>
        <p>
          I've been building UIs professionally for over 6 years, starting with
          jQuery spaghetti and graduating through Angular, Vue, and now firmly
          in the React ecosystem. I care deeply about the craft — the difference
          between a component that works and one that feels alive.
        </p>
        <p>
          When I'm not pushing pixels, I'm probably reading about compilers,
          tinkering with Go side-projects, or convincing my colleagues that
          animation timing functions are worth arguing about. (They are.)
        </p>
        <p>
          This app is my personal sandbox — a place to prototype ideas before
          they become real products. View Transitions, fine-grained reactivity,
          design tokens — if it's on the frontier, it's probably somewhere in
          here.
        </p>
      </div>
    </div>
  );
};

/* Helpers */
const stats = [
  { label: 'Years', value: '6+' },
  { label: 'Projects', value: '40+' },
  { label: 'Coffee', value: '∞' },
];

/* Types */
type TWorkItem = { title: string; tech: string[]; desc: string };
type TStackGroup = { label: string; items: string[] };

/* Data */
const workItems: TWorkItem[] = [
  {
    desc: 'Personal prototyping sandbox for exploring React patterns, View Transitions, and component architecture.',
    tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS'],
    title: 'inner-marker',
  },
  {
    desc: 'Component library built on Radix primitives with a token-based theming system and full a11y coverage.',
    tech: ['Radix UI', 'CVA', 'Storybook', 'Figma Tokens'],
    title: 'Design System',
  },
  {
    desc: 'Live analytics dashboard handling 10k+ events/sec with optimistic UI updates and smart cache invalidation.',
    tech: ['React Query', 'WebSockets', 'Recharts', 'Zustand'],
    title: 'Real-time Dashboard',
  },
];

const stackGroups: TStackGroup[] = [
  {
    items: ['TypeScript', 'JavaScript', 'Go', 'CSS', 'HTML'],
    label: 'Languages',
  },
  {
    items: ['React', 'Next.js', 'Vite', 'React Router', 'Tailwind CSS'],
    label: 'Frameworks',
  },
  {
    items: [
      'Biome',
      'Vitest',
      'Playwright',
      'Figma',
      'Docker',
      'GitHub Actions',
    ],
    label: 'Tools',
  },
];

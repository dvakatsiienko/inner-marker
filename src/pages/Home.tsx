/* Core */
import { Link } from 'react-router';

export const Home = () => {
  const wiredJSX = wired.map((item) => {
    return (
      <li className='flex gap-4' key={item.name}>
        <span className='w-24 shrink-0 font-mono text-xs leading-6 text-muted-foreground'>
          {item.name}
        </span>
        <span className='text-sm leading-6'>{item.note}</span>
      </li>
    );
  });

  return (
    <section className='mx-auto w-full max-w-2xl px-6 py-16'>
      <h1 className='font-mono text-2xl font-semibold tracking-tight'>
        inner-marker
      </h1>

      <p className='mt-3 max-w-prose leading-relaxed text-muted-foreground'>
        A vite playground. Start in{' '}
        <code className='rounded-sm bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground'>
          src/pages/Lab.tsx
        </code>{' '}
        — it renders at{' '}
        <Link className='underline' to='/lab'>
          /lab
        </Link>{' '}
        and is meant to be overwritten.
      </p>

      <ul className='mt-10 space-y-3 rounded-md border bg-card p-6 shadow-sm'>
        {wiredJSX}
      </ul>
    </section>
  );
};

/* Helpers */
const wired = [
  { name: 'vite', note: 'dev server and build, with the react compiler on' },
  { name: 'react router', note: 'routes declared in src/main.tsx' },
  { name: 'tailwind', note: 'theme tokens in src/theme/tailwind.css' },
  { name: 'shadcn', note: 'components land in src/components/ui' },
  { name: 'biome', note: 'pnpm check lints and formats' },
  { name: 'typescript', note: 'pnpm typecheck runs tsc' },
];

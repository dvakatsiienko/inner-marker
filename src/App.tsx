/* Core */
import { useState, memo, useActionState } from "react";
import waait from "waait";

/* Instruments */
import "./App.scss";

async function increment(previousState: { count: number }, formData: FormData) {
  console.log("🚀 ~ increment ~ formData:", formData.getAll("count"));

  await waait(1000);

  return {
    count: previousState.count + 1,
  };
}

export function App() {
  const [count, setCount] = useState(0);

  const [state, formAction, isPending] = useActionState(increment, {
    count: 1,
  });

  return (
    <main className="min-h-screen grid place-content-center gap-8">
      <h1 className="text-4xl font-bold">Vite Foundation</h1>

      <form className="grid gap-4" action={formAction}>
        <h1 className="text-2xl">Form state: {state.count}</h1>
        <input className="border border-gray-700 py-1 px-2 rounded" type="text" name="count" value={state.count} />
        <button
          disabled={isPending}
          className="text-9xl text-amber-400 disabled:opacity-50"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </form>

      <Button />
      <Button />
    </main>
  );
}

const Button = memo(() => {
  const [count, setCount] = useState(0);

  return (
    <section className="grid gap-2">
      <Text />

      <button
        className="text-9xl text-amber-400"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </section>
  );
});

const Text = memo(() => {
  return <h6 className="text-2xl">Hello, World!</h6>;
});

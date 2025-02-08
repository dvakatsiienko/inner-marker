/* Core */
import { useState, memo, useActionState } from "react";
import waait from "waait";

/* Instruments */
import "./App.scss";

async function increment(previousState: number, formData: FormData) {
  console.log("🚀 ~ increment ~ formData:", formData);

  await waait(2000);

  return previousState + 1;
}

export function App() {
  const [count, setCount] = useState(0);

  const [state, formAction, isPending] = useActionState(increment, 1);

  return (
    <main className="min-h-screen grid place-content-center gap-8">
      <h1 className="text-4xl">Vite Foundation</h1>

      <form action={formAction}>
        <h1 className="text-2xl">Form state: {state}</h1>

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

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  );
}

const Button = memo(() => {
  const [count, setCount] = useState(0);

  return (
    <section>
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

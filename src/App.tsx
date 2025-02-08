import { useState, memo } from "react";
import "./App.scss";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen grid place-content-center gap-8">
      <h1 className="text-4xl">Vite / React / TS</h1>
      <button
        className="text-9xl text-amber-400"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>

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
  return <p className="text-2xl">Hello, World!</p>;
});

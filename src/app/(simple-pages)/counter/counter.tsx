"use client";

import { useState } from "react";

type Props = {};

const Counter = ({}: Props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <p className="text-2xl font-bold">{count}</p>
      <div className="flex gap-x-10">
        <button
          onClick={() => setCount((pre) => pre + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Increment
        </button>
        <button
          disabled={count === 0}
          onClick={() => setCount((pre) => (pre > 0 ? pre - 1 : 0))}
          className="bg-red-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;

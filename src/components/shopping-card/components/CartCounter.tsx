'use client';
import { useState } from 'react';

export const CartCounter = () => {
  const [counter, setCounter] = useState(10);
  return (
    <div className="flex flex-col items-center justify-cente">
      <span className="font-semibold">Productos en el carrito</span>
      <span className="text-3xl">{counter}</span>
      <div className="flex  gap-4 ">
        <button
          onClick={() => setCounter((prev) => prev + 1)}
          className="bg-cyan-950 text-white py-1 px-5 rounded-md"
        >
          +1
        </button>
        <button
          onClick={() => setCounter((prev) => prev + 2)}
          className="bg-cyan-950 text-white py-1 px-5 rounded-md"
        >
          +2
        </button>
        <button
          onClick={() => setCounter((prev) => prev - 1)}
          className="bg-cyan-950 text-white py-1 px-5 rounded-md"
        >
          -1
        </button>
        <button
          onClick={() => setCounter((prev) => prev - 2)}
          className="bg-cyan-950 text-white py-1 px-5 rounded-md"
        >
          -2
        </button>
      </div>
    </div>
  );
};

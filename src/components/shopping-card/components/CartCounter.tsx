'use client';
import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, initialValue, resetCounter, substractOne } from '@/store/counter/counterSlice';
import { useEffect } from 'react';

const getApiCounter = async () => {
  const response = await fetch('http://localhost:3000/api/counter');

  const data = await response.json();
  return data;
};

export const CartCounter = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initialValue(count)));
  }, [dispatch]);
  return (
    <div className="flex flex-col items-center justify-cente">
      <span className="font-semibold">Productos en el carrito</span>
      <span className="text-8xl">{count}</span>
      <div className="flex  gap-4 ">
        <button onClick={() => dispatch(addOne())} className="bg-cyan-950 text-white py-1 px-5 rounded-md">
          +1
        </button>

        <button
          onClick={() => dispatch(substractOne())}
          className="bg-cyan-950 text-white py-1 px-5 rounded-md"
        >
          -1
        </button>
        <button
          onClick={() => dispatch(resetCounter(2))}
          className="bg-cyan-950 text-white py-1 px-5 rounded-md"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

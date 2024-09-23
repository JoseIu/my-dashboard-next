import { CartCounter } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Counter Page',
  description: 'Local state example',
};

const CounterPage = () => {
  return (
    <section className="text-zinc-900 ">
      <h2 className="mb-16 text-4xl font-bold p-4 ">Counter Page</h2>

      <CartCounter />
    </section>
  );
};

export default CounterPage;

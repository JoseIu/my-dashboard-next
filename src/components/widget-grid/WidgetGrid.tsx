'use client';
import { useAppSelector } from '@/store';
import { IoNuclearOutline } from 'react-icons/io5';
import SimpleWidget from '../simple-widget/SimpleWidget';

export const WidgetGrid = () => {
  const counter = useAppSelector((state) => state.counter.count);
  return (
    <div>
      <SimpleWidget
        title={counter}
        subTitle="Counter"
        label="Counter"
        icon={<IoNuclearOutline size={50} />}
        href="/dashboard/counter"
      />
    </div>
  );
};

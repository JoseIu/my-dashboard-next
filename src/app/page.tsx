import { redirect } from 'next/navigation';

const HomePage = () => {
  return redirect('/dashboard/main');
};

export default HomePage;

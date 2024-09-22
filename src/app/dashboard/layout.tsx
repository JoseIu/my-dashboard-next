import { SideBar } from '../components';

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-100  w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="grid grid-cols-[auto_1fr]  w-screen">
        <SideBar />

        {children}
      </div>
    </div>
  );
};

export default DashBoardLayout;

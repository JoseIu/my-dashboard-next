import { SideBar } from '@/components';

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-100  h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="grid grid-cols-[auto_1fr] ">
        <SideBar />

        {children}
      </div>
    </div>
  );
};

export default DashBoardLayout;

import Image from 'next/image';
import { IoBriefcaseOutline, IoCalculatorOutline, IoFootballOutline, IoLogoReact } from 'react-icons/io5';
import { SideBarMenuItem } from '../sidebar-menu-item/SideBarMenuItem';

const menuItem = [
  {
    path: '/dashboard/main',
    icon: <IoBriefcaseOutline size={25} className="self-start" />,
    title: 'Main',
    subTitle: 'Data Overview',
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculatorOutline size={25} className="self-start" />,
    title: 'Counter',
    subTitle: 'Local State',
  },
  {
    path: '/dashboard/pokemos',
    icon: <IoFootballOutline size={25} className="self-start" />,
    title: 'Pokemos',
    subTitle: 'Static Generation',
  },
];

export const SideBar = () => {
  return (
    <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 h-screen">
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center gap-1 text-lg md:text-2xl font-bold text-white">
          <IoLogoReact />
          Dash<span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              loading="lazy"
              width={32}
              height={32}
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="avatar image"
            />
          </span>
          <span className="text-sm md:text-base font-bold">Edward Tompson</span>
        </a>
      </div>

      <nav id="nav" className="w-full px-6 flex flex-col gap-5">
        {menuItem.map((item) => (
          <SideBarMenuItem key={item.path} {...item} />
        ))}
      </nav>
    </div>
  );
};

'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SideBarMenuItemProps = {
  path: string;
  icon: JSX.Element;
  title: string;
  subTitle: string;
};

export const SideBarMenuItem = ({ path, title, subTitle, icon }: SideBarMenuItemProps) => {
  const pathMenu = usePathname();

  const isActive = pathMenu === path && 'bg-blue-800';
  return (
    <Link
      href={path}
      className={`w-full px-2 flex flex-row items-center gap-2 rounded-md border-slate-700 py-3 ${isActive} hover:bg-white/5 transition ease-linear duration-150`}
    >
      {icon}
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">{subTitle}</span>
      </div>
    </Link>
  );
};

import React from 'react'
import { Home, LayoutDashboard, Settings } from 'lucide-react'
import { Link, linkOptions } from '@tanstack/react-router'

export default function Sidebar() {

    const options = linkOptions([
  {
    to: '/dashboard',
    label: 'Summary',
    activeOptions: { exact: true },
    icon: <LayoutDashboard size={20} />
  },
  {
    to: '/post',
    label: 'Invoices',
    icon:<Settings size={20} />
  },
  {
    to: '/users',
    label: 'Users',
    icon:<Settings size={20} />
  },])

  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col p-4">
      <div className="text-2xl font-bold mb-8">MyApp</div>

      <nav className="flex flex-col gap-2"> 
        {options.map((option) => {
          return (
            <Link
              {...option}
              key={option.to}
              activeProps={{ className: `font-bold` }}
              className="p-2"
            >
             <div className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700 cursor-pointer transition-all">
      {option.icon}
      <span>{option.label}</span>
    </div>
            </Link>
          )
        })}
        {/* <SidebarItem icon={<LayoutDashboard size={20} />} label="Dashboard" />
        <SidebarItem icon={<Home size={20} />} label="Menu 1" />
        <SidebarItem icon={<Settings size={20} />} label="Menu 2" />
        <SidebarItem icon={<Settings size={20} />} label="Menu 3" /> */}
      </nav>
    </div>
  )
}

function SidebarItem({ icon, label,path }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700 cursor-pointer transition-all">
      {icon}
      <span>{label}</span>
    </div>
  )
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Cloud, Bell, CheckCircle, Settings, PieChart, Shield } from 'lucide-react';

export default function Sidebar() {
  const navItems = [
    { icon: <PieChart className="w-5 h-5" />, label: 'Dashboard', path: '/' },
    { icon: <Bell className="w-5 h-5" />, label: 'Alerts', path: '/alerts' },
    { icon: <CheckCircle className="w-5 h-5" />, label: 'Validations', path: '/validations' },
    { icon: <Cloud className="w-5 h-5" />, label: 'Cloud Services', path: '/cloud-services' },
    { icon: <Settings className="w-5 h-5" />, label: 'Settings', path: '/settings' }
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white p-4">
      <div className="flex items-center gap-2 mb-8">
        <Shield className="w-8 h-8 text-blue-400" />
        <span className="text-xl font-bold">CloudGuard</span>
      </div>
      
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 w-full px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
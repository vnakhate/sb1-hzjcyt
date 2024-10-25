import React from 'react';
import { BarChart3, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { icon: <AlertTriangle className="w-6 h-6" />, label: 'Active Alerts', value: '24', change: '+12%' },
    { icon: <CheckCircle className="w-6 h-6" />, label: 'Validated', value: '156', change: '+8%' },
    { icon: <Shield className="w-6 h-6" />, label: 'Security Score', value: '94%', change: '+2%' },
    { icon: <BarChart3 className="w-6 h-6" />, label: 'Response Time', value: '1.2m', change: '-15%' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <span className={`text-sm ${
                  stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>
                  {stat.change}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
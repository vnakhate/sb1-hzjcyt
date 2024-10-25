import React from 'react';
import { Bell, Shield, Cloud, Mail, User, Lock } from 'lucide-react';

export default function Settings() {
  const sections = [
    {
      title: "Alert Settings",
      icon: <Bell className="w-5 h-5" />,
      settings: [
        {
          name: "Email Notifications",
          description: "Receive email alerts for high severity incidents",
          enabled: true
        },
        {
          name: "Slack Integration",
          description: "Send alerts to Slack channels",
          enabled: false
        }
      ]
    },
    {
      title: "Security Policies",
      icon: <Shield className="w-5 h-5" />,
      settings: [
        {
          name: "Two-Factor Authentication",
          description: "Require 2FA for all admin actions",
          enabled: true
        },
        {
          name: "IP Whitelisting",
          description: "Restrict access to specific IP ranges",
          enabled: true
        }
      ]
    },
    {
      title: "Cloud Integration",
      icon: <Cloud className="w-5 h-5" />,
      settings: [
        {
          name: "AWS Integration",
          description: "Connect to AWS CloudTrail and GuardDuty",
          enabled: true
        },
        {
          name: "Azure Integration",
          description: "Connect to Azure Security Center",
          enabled: true
        }
      ]
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Configure system preferences and integrations</p>
      </div>

      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.title} className="bg-white rounded-lg shadow">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                {section.icon}
                <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
              </div>
            </div>

            <div className="p-4 space-y-4">
              {section.settings.map((setting) => (
                <div key={setting.name} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">{setting.name}</h3>
                    <p className="text-sm text-gray-500">{setting.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={setting.enabled}
                      onChange={() => {}}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import AlertCard from '../components/AlertCard';
import { Search, Filter } from 'lucide-react';

export default function Alerts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeverity, setSelectedSeverity] = useState('all');

  const alerts = [
    {
      title: "Unusual IAM Activity Detected",
      description: "Multiple failed login attempts from unrecognized IP address in AWS us-east-1",
      severity: "high",
      status: "pending",
      timestamp: "2024-03-15 14:23",
      source: "AWS CloudTrail"
    },
    {
      title: "Suspicious Network Traffic",
      description: "Outbound traffic spike detected to known malicious IP range in Azure West Europe",
      severity: "medium",
      status: "validated",
      timestamp: "2024-03-15 14:20",
      source: "Azure Security Center"
    },
    {
      title: "Storage Bucket Policy Change",
      description: "Public access granted to GCP storage bucket containing sensitive data",
      severity: "high",
      status: "false-positive",
      timestamp: "2024-03-15 14:15",
      source: "Google Cloud Audit"
    }
  ] as const;

  const filteredAlerts = alerts.filter(alert => {
    const matchesSearch = alert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alert.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity = selectedSeverity === 'all' || alert.severity === selectedSeverity;
    return matchesSearch && matchesSeverity;
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Security Alerts</h1>
        <p className="text-gray-600">Review and manage security alerts across your infrastructure</p>
      </div>

      <div className="mb-6 flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search alerts..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <select
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
            value={selectedSeverity}
            onChange={(e) => setSelectedSeverity(e.target.value)}
          >
            <option value="all">All Severities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAlerts.map((alert, index) => (
          <AlertCard key={index} {...alert} />
        ))}
      </div>
    </div>
  );
}
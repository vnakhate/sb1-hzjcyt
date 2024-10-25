import React from 'react';
import MetricsGrid from '../components/Dashboard';
import AlertCard from '../components/AlertCard';

export default function Dashboard() {
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

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Security Operations Dashboard</h1>
        <p className="text-gray-600">Monitor and validate security alerts across your cloud infrastructure</p>
      </div>

      <MetricsGrid />

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Alerts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alerts.map((alert, index) => (
            <AlertCard key={index} {...alert} />
          ))}
        </div>
      </div>
    </div>
  );
}
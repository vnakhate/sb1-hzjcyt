import React from 'react';
import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';

type AlertSeverity = 'high' | 'medium' | 'low';
type AlertStatus = 'pending' | 'validated' | 'false-positive';

interface AlertCardProps {
  title: string;
  description: string;
  severity: AlertSeverity;
  status: AlertStatus;
  timestamp: string;
  source: string;
}

export default function AlertCard({
  title,
  description,
  severity,
  status,
  timestamp,
  source
}: AlertCardProps) {
  const severityColors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-blue-100 text-blue-800'
  };

  const statusIcons = {
    pending: <AlertCircle className="w-5 h-5 text-yellow-500" />,
    validated: <CheckCircle2 className="w-5 h-5 text-green-500" />,
    'false-positive': <XCircle className="w-5 h-5 text-red-500" />
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <span className={`text-sm px-2 py-1 rounded-full ${severityColors[severity]}`}>
            {severity.charAt(0).toUpperCase() + severity.slice(1)}
          </span>
        </div>
        {statusIcons[status]}
      </div>
      
      <p className="text-gray-600 mb-3">{description}</p>
      
      <div className="flex justify-between text-sm text-gray-500">
        <span>{timestamp}</span>
        <span>{source}</span>
      </div>
    </div>
  );
}
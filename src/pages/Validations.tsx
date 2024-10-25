import React from 'react';
import { CheckCircle2, XCircle, AlertTriangle, Clock } from 'lucide-react';

export default function Validations() {
  const validations = [
    {
      id: 1,
      title: "AWS IAM Policy Review",
      description: "Validate new IAM policy changes for production environment",
      status: "completed",
      assignee: "Sarah Chen",
      dueDate: "2024-03-20",
      priority: "high"
    },
    {
      id: 2,
      title: "Network Access Rules Audit",
      description: "Review and validate updated firewall rules for compliance",
      status: "in-progress",
      assignee: "Mike Johnson",
      dueDate: "2024-03-22",
      priority: "medium"
    },
    {
      id: 3,
      title: "Security Group Configuration",
      description: "Validate security group changes for database instances",
      status: "pending",
      assignee: "Alex Kumar",
      dueDate: "2024-03-25",
      priority: "low"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-blue-500" />;
      case 'pending':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      default:
        return <XCircle className="w-5 h-5 text-red-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Validation Tasks</h1>
        <p className="text-gray-600">Track and manage security validation tasks</p>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="grid grid-cols-6 gap-4 p-4 border-b border-gray-200 bg-gray-50 font-medium text-gray-700">
          <div className="col-span-2">Task</div>
          <div>Status</div>
          <div>Assignee</div>
          <div>Due Date</div>
          <div>Priority</div>
        </div>

        {validations.map((task) => (
          <div key={task.id} className="grid grid-cols-6 gap-4 p-4 border-b border-gray-200 items-center">
            <div className="col-span-2">
              <div className="font-medium text-gray-900">{task.title}</div>
              <div className="text-sm text-gray-500">{task.description}</div>
            </div>
            <div className="flex items-center gap-2">
              {getStatusIcon(task.status)}
              <span className="capitalize">{task.status}</span>
            </div>
            <div>{task.assignee}</div>
            <div>{task.dueDate}</div>
            <div>
              <span className={`px-2 py-1 rounded-full text-sm ${getPriorityColor(task.priority)}`}>
                {task.priority}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
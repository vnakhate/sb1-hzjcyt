import React from 'react';
import { Cloud, Shield, AlertTriangle, Check } from 'lucide-react';

export default function CloudServices() {
  const services = [
    {
      provider: "AWS",
      services: [
        {
          name: "EC2 Instances",
          status: "healthy",
          alerts: 0,
          region: "us-east-1"
        },
        {
          name: "S3 Buckets",
          status: "warning",
          alerts: 2,
          region: "us-west-2"
        },
        {
          name: "RDS Databases",
          status: "healthy",
          alerts: 0,
          region: "eu-west-1"
        }
      ]
    },
    {
      provider: "Azure",
      services: [
        {
          name: "Virtual Machines",
          status: "healthy",
          alerts: 0,
          region: "East US"
        },
        {
          name: "Storage Accounts",
          status: "healthy",
          alerts: 0,
          region: "West Europe"
        }
      ]
    },
    {
      provider: "Google Cloud",
      services: [
        {
          name: "Compute Engine",
          status: "warning",
          alerts: 1,
          region: "us-central1"
        },
        {
          name: "Cloud Storage",
          status: "healthy",
          alerts: 0,
          region: "europe-west1"
        }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return <Check className="w-5 h-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      default:
        return <Shield className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Cloud Services</h1>
        <p className="text-gray-600">Monitor security status across cloud providers</p>
      </div>

      <div className="space-y-6">
        {services.map((provider) => (
          <div key={provider.provider} className="bg-white rounded-lg shadow">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Cloud className="w-6 h-6 text-blue-500" />
                <h2 className="text-xl font-semibold text-gray-900">{provider.provider}</h2>
              </div>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {provider.services.map((service) => (
                  <div
                    key={service.name}
                    className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-900">{service.name}</h3>
                      {getStatusIcon(service.status)}
                    </div>
                    <div className="text-sm text-gray-500">Region: {service.region}</div>
                    <div className="mt-2">
                      {service.alerts > 0 ? (
                        <span className="text-sm text-yellow-600 font-medium">
                          {service.alerts} active alerts
                        </span>
                      ) : (
                        <span className="text-sm text-green-600 font-medium">
                          No active alerts
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
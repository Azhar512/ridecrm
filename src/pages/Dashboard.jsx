import React from 'react';
import { Car, UserCheck, CheckCircle, XCircle, MapPin } from 'lucide-react';
import Card from '../components/common/Card';
import StatusBadge from '../components/common/StatusBadge';
import { mockRideRequests } from '../data/mockData';

const DashboardPage = () => {
  const stats = [
    { title: 'Total Rides Today', value: '24', icon: Car, color: 'blue' },
    { title: 'Active Drivers', value: '8', icon: UserCheck, color: 'green' },
    { title: 'Completed Rides', value: '18', icon: CheckCircle, color: 'emerald' },
    { title: 'Cancelled Rides', value: '3', icon: XCircle, color: 'red' }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-6">
              <div className="flex items-center">
                <div className={`flex-shrink-0 p-3 bg-${stat.color}-100 rounded-lg`}>
                  <Icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Recent Ride Requests & Mini Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Ride Requests</h3>
          <div className="space-y-4">
            {mockRideRequests.slice(0, 5).map(request => (
              <div key={request.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                <div>
                  <p className="font-medium">{request.rider}</p>
                  <p className="text-sm text-gray-600">{request.pickup} → {request.destination}</p>
                </div>
                <div className="text-right">
                  <StatusBadge status={request.status} />
                  <p className="text-sm text-gray-500 mt-1">{request.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Mini Map Placeholder */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Live Map</h3>
          <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Live driver locations</p>
              <p className="text-sm text-gray-400">Map integration pending</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
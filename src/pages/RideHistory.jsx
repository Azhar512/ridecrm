import React, { useState, useContext } from 'react';

import  Button  from "../components/common/Button";
import Card from '../components/common/Card';
import  Modal  from "../components/common/Modal";
import  StatusBadge  from "../components/common/StatusBadge";
import { AuthContext } from '../context/AuthContext';
// Import the mockRideHistory data
import { mockRideHistory } from '../data/mockData'; // Adjust path as needed
import { 
  Users, 
  Car, 
  MapPin, 
  Bell, 
  Settings, 
  BarChart3, 
  Calendar,
  History,
  LogOut,
  Eye,
  UserCheck,
  UserX,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Plus,
  Filter,
  Search,
  Send,
  Edit,
  Trash2,
  Menu,
  X
} from 'lucide-react';

const RideHistoryPage = () => {
  const [dateFilter, setDateFilter] = useState('today');
  const [statusFilter, setStatusFilter] = useState('all');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Ride History</h1>
        <div className="flex items-center space-x-4">
          <select 
            value={dateFilter} 
            onChange={(e) => setDateFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
          <select 
            value={statusFilter} 
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rider</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Driver</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Route</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fare</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockRideHistory.map(ride => (
                <tr key={ride.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium">{ride.rider}</p>
                      <p className="text-sm text-gray-500">{ride.phone}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">{ride.driver}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <p>{ride.pickup}</p>
                      <p className="text-gray-500">→ {ride.destination}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">{ride.fare}</td>
                  <td className="px-6 py-4 text-sm">
                    <div>
                      <p>{ride.date}</p>
                      <p className="text-gray-500">{ride.time}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={ride.status} />
                  </td>
                  <td className="px-6 py-4">
                    <Button size="sm" variant="secondary">
                      <Eye size={14} className="mr-1" />
                      Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default RideHistoryPage;
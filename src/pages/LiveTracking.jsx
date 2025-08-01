import React, { useState, useContext } from 'react';

import  Button  from "../components/common/Button";
import Card from '../components/common/Card';
import  Modal  from "../components/common/Modal";
import  StatusBadge  from "../components/common/StatusBadge";
import { AuthContext } from '../context/AuthContext';
// Import both mockRideRequests and mockDrivers
import { mockRideRequests, mockDrivers } from '../data/mockData';
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

const LiveTrackingPage = () => {
  // Changed mockData.drivers to mockDrivers
  const trackingData = mockDrivers.map(driver => ({
    ...driver,
    coordinates: '40.7128, -74.0060',
    speed: '25 mph',
    lastUpdate: '2 min ago'
  }));

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Live Driver Tracking</h1>

      {/* Map Placeholder */}
      <Card className="p-6">
        <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center mb-6">
          <div className="text-center">
            <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-500 mb-2">Live Map View</p>
            <p className="text-gray-400">Real-time driver locations would be displayed here</p>
            <div className="mt-4 flex justify-center space-x-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Online</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Busy</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Offline</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Driver Location Table */}
      <Card>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Driver Locations</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Driver</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Coordinates</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Speed</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Update</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {trackingData.map(driver => (
                  <tr key={driver.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-xs font-medium">{driver.name[0]}</span>
                        </div>
                        <div>
                          <p className="font-medium">{driver.name}</p>
                          <p className="text-sm text-gray-500">{driver.phone}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={driver.status} />
                    </td>
                    <td className="px-6 py-4 text-sm">{driver.location}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{driver.coordinates}</td>
                    <td className="px-6 py-4 text-sm">{driver.speed}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{driver.lastUpdate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LiveTrackingPage;
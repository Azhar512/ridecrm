import React, { useState, useContext } from 'react';

import  Button  from "../components/common/Button";
import Card from '../components/common/Card';
import  Modal  from "../components/common/Modal";
import  StatusBadge  from "../components/common/StatusBadge";
import { AuthContext } from '../context/AuthContext';
// Import both mockDrivers and mockRideRequests
import { mockDrivers, mockRideRequests } from '../data/mockData';

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

const DriversPage = () => {
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Drivers Management</h1>
        <Button>
          <Plus size={16} className="mr-2" />
          Add Driver
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockDrivers.map(driver => (
          <Card key={driver.id} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">{driver.name[0]}</span>
                </div>
                <div>
                  <h3 className="font-semibold">{driver.name}</h3>
                  <p className="text-sm text-gray-600">{driver.phone}</p>
                </div>
              </div>
              <StatusBadge status={driver.status} />
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Location:</span>
                <span>{driver.location}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Rating:</span>
                <span>{driver.rating} ⭐</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Rides:</span>
                <span>{driver.ridesCompleted}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Earnings:</span>
                <span>{driver.earnings}</span>
              </div>
            </div>

            <div className="flex space-x-2">
              <Button size="sm" variant="secondary" className="flex-1">
                <Eye size={14} className="mr-1" />
                View
              </Button>
              <Button 
                size="sm" 
                className="flex-1"
                onClick={() => {
                  setSelectedDriver(driver);
                  setShowAssignModal(true);
                }}
              >
                Assign Ride
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Assign Ride Modal */}
      <Modal 
        isOpen={showAssignModal} 
        onClose={() => setShowAssignModal(false)}
        title="Assign Ride"
      >
        <div className="space-y-4">
          <p>Assign a ride to <strong>{selectedDriver?.name}</strong></p>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
            <option>Select a ride request</option>
            {mockRideRequests.filter(r => r.status === 'pending').map(request => (
              <option key={request.id}>{request.rider} - {request.pickup}</option>
            ))}
          </select>
          <div className="flex space-x-2">
            <Button variant="secondary" onClick={() => setShowAssignModal(false)}>Cancel</Button>
            <Button>Assign Ride</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DriversPage;
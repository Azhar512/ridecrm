import React, { useState, useContext } from 'react';

import Button from "../components/common/Button";
import Card from '../components/common/Card';
import Modal from "../components/common/Modal";
import StatusBadge from "../components/common/StatusBadge";
import { AuthContext } from '../context/AuthContext';
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
  X,
  Navigation,
  Phone
} from 'lucide-react';

const RideRequestsPage = () => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [selectedDriver, setSelectedDriver] = useState('');

  // Filter requests based on status
  const filteredRequests = mockRideRequests.filter(request => 
    statusFilter === 'all' || request.status === statusFilter
  );

  // Get available drivers for assignment
  const availableDrivers = mockDrivers.filter(driver => 
    driver.status === 'online'
  );

  const handleAssignRide = () => {
    if (selectedDriver && selectedRequest) {
      // Here you would typically update the request status and assign the driver
      console.log(`Assigning ride ${selectedRequest.id} to driver ${selectedDriver}`);
      setShowAssignModal(false);
      setSelectedDriver('');
      setSelectedRequest(null);
    }
  };

  const handleViewDetails = (request) => {
    setSelectedRequest(request);
    setShowDetailsModal(true);
  };

  const handleAssignClick = (request) => {
    setSelectedRequest(request);
    setShowAssignModal(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Ride Requests</h1>
        <div className="flex items-center space-x-4">
          <select 
            value={statusFilter} 
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="all">All Requests</option>
            <option value="pending">Pending</option>
            <option value="accepted">Accepted</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <Button>
            <Plus size={16} className="mr-2" />
            Manual Request
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-4">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold">
                {mockRideRequests.filter(r => r.status === 'pending').length}
              </p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Accepted</p>
              <p className="text-2xl font-bold">
                {mockRideRequests.filter(r => r.status === 'accepted').length}
              </p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded-lg">
              <XCircle className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Cancelled</p>
              <p className="text-2xl font-bold">
                {mockRideRequests.filter(r => r.status === 'cancelled').length}
              </p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Car className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Available Drivers</p>
              <p className="text-2xl font-bold">{availableDrivers.length}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Requests Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rider</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Route</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Driver</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fare</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredRequests.map(request => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-medium">{request.rider[0]}</span>
                      </div>
                      <div>
                        <p className="font-medium">{request.rider}</p>
                        <p className="text-sm text-gray-500 flex items-center">
                          <Phone size={12} className="mr-1" />
                          {request.phone}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <p className="flex items-center">
                        <MapPin size={12} className="mr-1 text-green-500" />
                        {request.pickup}
                      </p>
                      <p className="text-gray-500 flex items-center mt-1">
                        <Navigation size={12} className="mr-1 text-red-500" />
                        {request.destination}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {request.driver || (
                      <span className="text-gray-400 italic">Not assigned</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-green-600">
                    {request.fare}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {request.time}
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={request.status} />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="secondary"
                        onClick={() => handleViewDetails(request)}
                      >
                        <Eye size={14} className="mr-1" />
                        Details
                      </Button>
                      {request.status === 'pending' && (
                        <Button 
                          size="sm"
                          onClick={() => handleAssignClick(request)}
                        >
                          <UserCheck size={14} className="mr-1" />
                          Assign
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Assign Driver Modal */}
      <Modal 
        isOpen={showAssignModal} 
        onClose={() => {
          setShowAssignModal(false);
          setSelectedDriver('');
          setSelectedRequest(null);
        }}
        title="Assign Driver"
      >
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 mb-2">Ride Request:</p>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-medium">{selectedRequest?.rider}</p>
              <p className="text-sm text-gray-600">
                {selectedRequest?.pickup} → {selectedRequest?.destination}
              </p>
              <p className="text-sm font-medium text-green-600">{selectedRequest?.fare}</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Available Driver:
            </label>
            <select 
              value={selectedDriver} 
              onChange={(e) => setSelectedDriver(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="">Choose a driver...</option>
              {availableDrivers.map(driver => (
                <option key={driver.id} value={driver.id}>
                  {driver.name} - {driver.location} (Rating: {driver.rating})
                </option>
              ))}
            </select>
          </div>

          <div className="flex space-x-2 pt-4">
            <Button 
              variant="secondary" 
              onClick={() => {
                setShowAssignModal(false);
                setSelectedDriver('');
                setSelectedRequest(null);
              }}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleAssignRide}
              disabled={!selectedDriver}
            >
              Assign Driver
            </Button>
          </div>
        </div>
      </Modal>

      {/* Details Modal */}
      <Modal 
        isOpen={showDetailsModal} 
        onClose={() => {
          setShowDetailsModal(false);
          setSelectedRequest(null);
        }}
        title="Ride Request Details"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-700">Rider:</p>
              <p className="text-lg">{selectedRequest?.rider}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Phone:</p>
              <p className="text-lg">{selectedRequest?.phone}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Route:</p>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="flex items-center mb-2">
                <MapPin size={16} className="mr-2 text-green-500" />
                <span className="font-medium">Pickup:</span>
                <span className="ml-2">{selectedRequest?.pickup}</span>
              </p>
              <p className="flex items-center">
                <Navigation size={16} className="mr-2 text-red-500" />
                <span className="font-medium">Destination:</span>
                <span className="ml-2">{selectedRequest?.destination}</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-700">Fare:</p>
              <p className="text-lg font-medium text-green-600">{selectedRequest?.fare}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Time:</p>
              <p className="text-lg">{selectedRequest?.time}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Status:</p>
              <StatusBadge status={selectedRequest?.status} />
            </div>
          </div>

          {selectedRequest?.driver && (
            <div>
              <p className="text-sm font-medium text-gray-700">Assigned Driver:</p>
              <p className="text-lg">{selectedRequest.driver}</p>
            </div>
          )}

          <div className="flex justify-end pt-4">
            <Button 
              variant="secondary"
              onClick={() => {
                setShowDetailsModal(false);
                setSelectedRequest(null);
              }}
            >
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RideRequestsPage;
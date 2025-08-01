import React, { useState, useContext } from 'react';
// Import both mockDrivers and mockShifts as named exports
import { mockDrivers, mockShifts } from '../data/mockData';

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
import Button from "../components/common/Button";
import Card from '../components/common/Card';
import Modal from "../components/common/Modal";
import StatusBadge from "../components/common/StatusBadge";
import Badge from '../components/common/badge';

const ShiftManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [newShift, setNewShift] = useState({
    title: '',
    driver: '',
    time: '',
    location: '',
  });

  const handleAddShift = () => {
    // Add logic to store newShift
    console.log('Adding new shift:', newShift);
    setShowModal(false);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Shift Management</h2>
        <Button onClick={() => setShowModal(true)}>
          <Plus size={16} className="mr-2" />
          Add New Shift
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockShifts.map((shift) => (
          <Card key={shift.id} className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{shift.driver}</h3>
                <StatusBadge status={shift.status} />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock size={16} className="mr-2" />
                  <span>{shift.startTime} - {shift.endTime}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar size={16} className="mr-2" />
                  <span>{shift.date}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="secondary" className="flex-1">
                  <Edit size={14} className="mr-1" />
                  Edit
                </Button>
                <Button size="sm" variant="secondary" className="flex-1">
                  <Trash2 size={14} className="mr-1" />
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Add New Shift Modal */}
      <Modal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Add New Shift"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Driver
            </label>
            <select
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              value={newShift.driver}
              onChange={(e) => setNewShift({ ...newShift, driver: e.target.value })}
            >
              <option value="">Select Driver</option>
              {mockDrivers.map((driver) => (
                <option key={driver.id} value={driver.name}>
                  {driver.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Start Time
            </label>
            <input
              type="time"
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              value={newShift.startTime}
              onChange={(e) => setNewShift({ ...newShift, startTime: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              End Time
            </label>
            <input
              type="time"
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              value={newShift.endTime}
              onChange={(e) => setNewShift({ ...newShift, endTime: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              value={newShift.date}
              onChange={(e) => setNewShift({ ...newShift, date: e.target.value })}
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button 
              variant="secondary" 
              onClick={() => setShowModal(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleAddShift}>
              Add Shift
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ShiftManagement;
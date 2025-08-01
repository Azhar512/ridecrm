import React, { useState, useContext } from 'react';

import Button from "../components/common/Button";
import Card from '../components/common/Card';
import Modal from "../components/common/Modal";
import StatusBadge from "../components/common/StatusBadge";
import { AuthContext } from '../context/AuthContext';
import { mockNotifications, mockDrivers } from '../data/mockData'; // ✅ FIXED
import {
  AlertCircle, CheckCircle, Send
} from 'lucide-react';

const NotificationsPage = () => {
  const [showSendNotification, setShowSendNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationTarget, setNotificationTarget] = useState('all');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <Button onClick={() => setShowSendNotification(true)}>
          <Send size={16} className="mr-2" />
          Send Notification
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Send Notification Form */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Send</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Target</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option value="all">All Drivers</option>
                <option value="online">Online Drivers</option>
                <option value="offline">Offline Drivers</option>
                <option value="specific">Specific Driver</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md h-24"
                placeholder="Enter your message..."
              />
            </div>
            <Button className="w-full">
              <Send size={16} className="mr-2" />
              Send Now
            </Button>
          </div>
        </Card>

        {/* Notification History */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Notifications</h3>
          <div className="space-y-4">
            {mockNotifications.map(notification => (
              <div key={notification.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className={`p-2 rounded-full ${
                  notification.type === 'info' ? 'bg-blue-100' :
                  notification.type === 'warning' ? 'bg-yellow-100' :
                  'bg-green-100'
                }`}>
                  {notification.type === 'info' && <AlertCircle className="text-blue-600" size={16} />}
                  {notification.type === 'warning' && <AlertCircle className="text-yellow-600" size={16} />}
                  {notification.type === 'success' && <CheckCircle className="text-green-600" size={16} />}
                </div>
                <div className="flex-1">
                  <p className="text-sm">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                </div>
                {!notification.read && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Send Notification Modal */}
      <Modal 
        isOpen={showSendNotification} 
        onClose={() => setShowSendNotification(false)}
        title="Send Notification"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Recipients</label>
            <select 
              value={notificationTarget}
              onChange={(e) => setNotificationTarget(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="all">All Drivers</option>
              <option value="online">Online Drivers Only</option>
              <option value="offline">Offline Drivers Only</option>
              {mockDrivers.map(driver => (
                <option key={driver.id} value={driver.id}>{driver.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea 
              value={notificationMessage}
              onChange={(e) => setNotificationMessage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md h-32"
              placeholder="Type your notification message..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option value="normal">Normal</option>
              <option value="high">High Priority</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>
          <div className="flex space-x-2">
            <Button variant="secondary" onClick={() => setShowSendNotification(false)}>Cancel</Button>
            <Button>Send Notification</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NotificationsPage;

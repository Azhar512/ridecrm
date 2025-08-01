export const mockUsers = [
  { id: 1, email: 'admin@ride.com', password: 'admin123', role: 'admin', name: 'Admin User' },
  { id: 2, email: 'dispatcher@ride.com', password: 'dispatch123', role: 'dispatcher', name: 'Dispatcher' }
];

export const mockDrivers = [
  { id: 1, name: 'John Doe', phone: '+1-555-0101', status: 'online', location: 'Downtown', rating: 4.8, ridesCompleted: 245, earnings: '$2,450' },
  { id: 2, name: 'Sarah Wilson', phone: '+1-555-0102', status: 'offline', location: 'Airport', rating: 4.9, ridesCompleted: 198, earnings: '$1,980' },
  { id: 3, name: 'Mike Johnson', phone: '+1-555-0103', status: 'online', location: 'Mall Area', rating: 4.7, ridesCompleted: 312, earnings: '$3,120' },
  { id: 4, name: 'Emma Davis', phone: '+1-555-0104', status: 'busy', location: 'Business District', rating: 4.6, ridesCompleted: 156, earnings: '$1,560' }
];

export const mockRideRequests = [
  { id: 1, rider: 'Alice Brown', phone: '+1-555-0201', pickup: '123 Main St', destination: '456 Oak Ave', status: 'pending', time: '2 min ago', fare: '$12.50' },
  { id: 2, rider: 'Bob Smith', phone: '+1-555-0202', pickup: '789 Pine St', destination: 'Airport Terminal', status: 'accepted', time: '5 min ago', fare: '$25.00', driver: 'John Doe' },
  { id: 3, rider: 'Carol White', phone: '+1-555-0203', pickup: 'Mall Plaza', destination: '321 Elm St', status: 'pending', time: '1 min ago', fare: '$8.75' }
];

export const mockRideHistory = [
  { id: 1, rider: 'David Green', phone: '+1-555-0301', driver: 'Sarah Wilson', pickup: 'Hotel Plaza', destination: 'Conference Center', fare: '$15.00', status: 'completed', date: '2025-07-31', time: '14:30' },
  { id: 2, rider: 'Lisa Johnson', phone: '+1-555-0302', driver: 'Mike Johnson', pickup: 'Train Station', destination: '567 Broadway', fare: '$18.50', status: 'completed', date: '2025-07-31', time: '13:45' },
  { id: 3, rider: 'Tom Wilson', phone: '+1-555-0303', driver: 'John Doe', pickup: 'Shopping Mall', destination: 'Residential Area', fare: '$22.00', status: 'cancelled', date: '2025-07-31', time: '12:20' }
];

export const mockShifts = [
  { id: 1, driver: 'John Doe', startTime: '08:00', endTime: '16:00', status: 'active', date: '2025-07-31' },
  { id: 2, driver: 'Sarah Wilson', startTime: '16:00', endTime: '00:00', status: 'scheduled', date: '2025-07-31' },
  { id: 3, driver: 'Mike Johnson', startTime: '00:00', endTime: '08:00', status: 'completed', date: '2025-07-31' }
];

export const mockNotifications = [
  { id: 1, message: 'New driver registration pending approval', type: 'info', time: '10 min ago', read: false },
  { id: 2, message: 'System maintenance scheduled for tonight', type: 'warning', time: '1 hour ago', read: true },
  { id: 3, message: 'Peak hours pricing activated', type: 'success', time: '2 hours ago', read: true }
];
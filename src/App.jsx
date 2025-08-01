import React, { useContext } from 'react';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { AppProvider, AppContext } from './context/AppContext';
import Layout from './components/common/Layout';
import './styles/index.css';


// Import all page components
import LoginPage from './pages/Login';
import DashboardPage from './pages/Dashboard';
import DriversPage from './pages/Drivers';
import RideRequestsPage from './pages/RideRequests';
import RideHistoryPage from './pages/RideHistory';
import LiveTrackingPage from './pages/LiveTracking';
import ShiftManagementPage from './pages/ShiftManagement';
import NotificationsPage from './pages/Notifications';
import SettingsPage from './pages/Settings';

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { currentPage } = useContext(AppContext);

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'drivers':
        return <DriversPage />;
      case 'ride-requests':
        return <RideRequestsPage />;
      case 'ride-history':
        return <RideHistoryPage />;
      case 'live-tracking':
        return <LiveTrackingPage />;
      case 'shift-management':
        return <ShiftManagementPage />;
      case 'notifications':
        return <NotificationsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <Layout>
      {renderCurrentPage()}
    </Layout>
  );
};

// Root Component with Providers
const RideCRMDashboard = () => {
  return (
    <AuthProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </AuthProvider>
  );
};

export default App;
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import Reports from './pages/Reports';
// import Tables from './pages/Tables';
// import Charts from './pages/Charts';
// import ProtectedLayout from './components/Layout/ProtectedLayout';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/charts" element={<Charts />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

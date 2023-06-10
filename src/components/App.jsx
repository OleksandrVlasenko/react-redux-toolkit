import { Navigate, Route, Routes } from 'react-router-dom';
import Counter from './Counter/Counter';
import { LoginPage, DashboardPage } from './pages';
import Layout from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="counter" element={<Counter />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

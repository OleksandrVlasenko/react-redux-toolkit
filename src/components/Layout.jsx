import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';

export default function Layout() {
  return (
    <div>
      <AppBar />
      <br />
      <Outlet />
    </div>
  );
}

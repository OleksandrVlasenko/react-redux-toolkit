import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';
import { useSelector } from 'react-redux';

export default function AppBar() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between' }}>
      <nav>
        <Link to="/login">Log In</Link>
      </nav>
      {isLoggedIn && <UserMenu />}
    </header>
  );
}

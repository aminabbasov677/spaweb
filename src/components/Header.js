import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-link">Saat</NavLink>
      <NavLink to="/stopwatch" className="nav-link">Saniyəölçən</NavLink>
      <NavLink to="/timer" className="nav-link">Taymer</NavLink>
    </nav>
  );
}

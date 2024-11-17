import { Link, NavLink } from 'react-router-dom';
import { CaravanIcon } from 'lucide-react';

export default function Navbar() {
  const activeStyles = "font-bold text-orange-500 underline";

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-orange-500">
          <CaravanIcon size={32} />
          <span>#VANLIFE</span>
        </Link>
        
        <div className="flex items-center space-x-8">
          <NavLink 
            to="/host"
            className={({ isActive }) => isActive ? activeStyles : ""}
          >
            Host
          </NavLink>
          <NavLink 
            to="/about"
            className={({ isActive }) => isActive ? activeStyles : ""}
          >
            About
          </NavLink>
          <NavLink 
            to="/vans"
            className={({ isActive }) => isActive ? activeStyles : ""}
          >
            Vans
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
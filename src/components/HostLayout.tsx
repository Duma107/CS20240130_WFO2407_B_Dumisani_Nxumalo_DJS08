import { Outlet, NavLink } from 'react-router-dom';

export default function HostLayout() {
  const activeStyles = "font-bold text-orange-500 underline";

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="flex space-x-6 mb-8">
        <NavLink 
          to="."
          end
          className={({ isActive }) => isActive ? activeStyles : ""}
        >
          Dashboard
        </NavLink>
        <NavLink 
          to="income"
          className={({ isActive }) => isActive ? activeStyles : ""}
        >
          Income
        </NavLink>
        <NavLink 
          to="vans"
          className={({ isActive }) => isActive ? activeStyles : ""}
        >
          Vans
        </NavLink>
        <NavLink 
          to="reviews"
          className={({ isActive }) => isActive ? activeStyles : ""}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
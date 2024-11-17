import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, NavLink } from 'react-router-dom';

interface Van {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
}

export default function HostVanDetail() {
  const { id } = useParams();
  const [van, setVan] = useState<Van | null>(null);

  useEffect(() => {
    // Simulated data - in a real app, this would come from an API
    setVan({
      id: "1",
      name: "Modest Explorer",
      price: 60,
      description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl: "https://images.unsplash.com/photo-1533591380348-14193f1de18f?auto=format&fit=crop&w=800&q=60",
      type: "simple"
    });
  }, [id]);

  if (!van) {
    return <div>Loading...</div>;
  }

  const activeStyles = "font-bold text-orange-500 underline";

  return (
    <div className="max-w-4xl mx-auto">
      <Link to=".." relative="path" className="inline-block mb-8 text-gray-600 hover:text-gray-900">
        ← Back to all vans
      </Link>
      
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <div className="flex items-center mb-6">
          <img
            src={van.imageUrl}
            alt={van.name}
            className="w-32 h-32 object-cover rounded mr-6"
          />
          <div>
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2
              ${van.type === 'simple' ? 'bg-orange-200' :
                van.type === 'rugged' ? 'bg-green-200' :
                'bg-black text-white'}`}>
              {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
            </span>
            <h2 className="text-2xl font-bold">{van.name}</h2>
            <p className="text-gray-600">${van.price}/day</p>
          </div>
        </div>

        <nav className="flex space-x-6 border-b pb-4 mb-8">
          <NavLink
            to="."
            end
            className={({ isActive }) => isActive ? activeStyles : ""}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            className={({ isActive }) => isActive ? activeStyles : ""}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            className={({ isActive }) => isActive ? activeStyles : ""}
          >
            Photos
          </NavLink>
        </nav>

        <Outlet context={{ van }} />
      </div>
    </div>
  );
}
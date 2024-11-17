import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Van {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export default function HostVans() {
  const [vans, setVans] = useState<Van[]>([]);

  useEffect(() => {
    // Simulated data - in a real app, this would come from an API
    setVans([
      {
        id: "1",
        name: "Modest Explorer",
        price: 60,
        imageUrl: "https://images.unsplash.com/photo-1533591380348-14193f1de18f?auto=format&fit=crop&w=800&q=60"
      }
    ]);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Your listed vans</h1>
      <div className="space-y-4">
        {vans.map(van => (
          <Link to={`/host/vans/${van.id}`} key={van.id}>
            <div className="flex items-center bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow">
              <img
                src={van.imageUrl}
                alt={van.name}
                className="w-24 h-24 object-cover rounded mr-6"
              />
              <div>
                <h3 className="text-xl font-bold">{van.name}</h3>
                <p className="text-gray-600">${van.price}/day</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

interface Van {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
}

export default function Vans() {
  const [vans, setVans] = useState<Van[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');

  const displayedVans = typeFilter
    ? vans.filter(van => van.type.toLowerCase() === typeFilter)
    : vans;

  useEffect(() => {
    // Simulated data - in a real app, this would come from an API
    setVans([
      {
        id: "1",
        name: "Modest Explorer",
        price: 60,
        description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
        imageUrl: "https://images.unsplash.com/photo-1533591380348-14193f1de18f?auto=format&fit=crop&w=800&q=60",
        type: "simple"
      },
      {
        id: "2",
        name: "Beach Bum",
        price: 80,
        description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
        imageUrl: "https://images.unsplash.com/photo-1606140227895-0e34da0c3d20?auto=format&fit=crop&w=800&q=60",
        type: "rugged"
      },
      {
        id: "3",
        name: "Reliable Red",
        price: 100,
        description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, perfect for making meals you can enjoy on the road.",
        imageUrl: "https://images.unsplash.com/photo-1565361849078-2d5eb43b4400?auto=format&fit=crop&w=800&q=60",
        type: "luxury"
      }
    ]);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Explore our van options</h1>
      
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setSearchParams({ type: 'simple' })}
          className={`px-4 py-2 rounded ${typeFilter === 'simple' ? 'bg-orange-500 text-white' : 'bg-orange-100'}`}
        >
          Simple
        </button>
        <button
          onClick={() => setSearchParams({ type: 'rugged' })}
          className={`px-4 py-2 rounded ${typeFilter === 'rugged' ? 'bg-orange-500 text-white' : 'bg-orange-100'}`}
        >
          Rugged
        </button>
        <button
          onClick={() => setSearchParams({ type: 'luxury' })}
          className={`px-4 py-2 rounded ${typeFilter === 'luxury' ? 'bg-orange-500 text-white' : 'bg-orange-100'}`}
        >
          Luxury
        </button>
        {typeFilter && (
          <button
            onClick={() => setSearchParams({})}
            className="px-4 py-2 underline"
          >
            Clear filters
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedVans.map(van => (
          <Link to={`/vans/${van.id}`} key={van.id} className="block">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src={van.imageUrl} alt={van.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{van.name}</h3>
                  <p className="font-bold">${van.price}/day</p>
                </div>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold
                  ${van.type === 'simple' ? 'bg-orange-200' :
                    van.type === 'rugged' ? 'bg-green-200' :
                    'bg-black text-white'}`}>
                  {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
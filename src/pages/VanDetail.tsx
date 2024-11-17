import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Van {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
}

export default function VanDetail() {
  const { id } = useParams();
  const [van, setVan] = useState<Van | null>(null);

  useEffect(() => {
    // Simulated data - in a real app, this would come from an API
    const vanData = {
      id: "1",
      name: "Modest Explorer",
      price: 60,
      description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl: "https://images.unsplash.com/photo-1533591380348-14193f1de18f?auto=format&fit=crop&w=800&q=60",
      type: "simple"
    };
    setVan(vanData);
  }, [id]);

  if (!van) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/vans" className="inline-block mb-8 text-gray-600 hover:text-gray-900">
        ← Back to all vans
      </Link>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={van.imageUrl} alt={van.name} className="w-full h-96 object-cover" />
        <div className="p-8">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4
            ${van.type === 'simple' ? 'bg-orange-200' :
              van.type === 'rugged' ? 'bg-green-200' :
              'bg-black text-white'}`}>
            {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
          </span>
          <h1 className="text-4xl font-bold mb-4">{van.name}</h1>
          <p className="text-2xl font-bold mb-6">${van.price}/day</p>
          <p className="text-gray-600 mb-8">{van.description}</p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg text-xl font-semibold hover:bg-orange-600 transition-colors w-full">
            Rent this van
          </button>
        </div>
      </div>
    </div>
  );
}
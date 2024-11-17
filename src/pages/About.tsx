export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <img 
        src="https://images.unsplash.com/photo-1602091676903-331a4857afa8?q=80&w=2664&auto=format&fit=crop" 
        alt="Van life" 
        className="w-full h-[400px] object-cover rounded-lg mb-8"
      />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Don't squeeze in a sedan when you could relax in a van.</h1>
        <p className="text-lg mb-6">
          Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
          (Hitch costs extra 😉)
        </p>
        <p className="text-lg mb-8">
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>
        <div className="bg-orange-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Your destination is waiting.</h2>
          <h2 className="text-2xl font-bold mb-6">Your van is ready.</h2>
          <a href="/vans" className="bg-black text-white px-6 py-3 rounded-lg inline-block hover:bg-gray-800 transition-colors">
            Explore our vans
          </a>
        </div>
      </div>
    </div>
  );
}
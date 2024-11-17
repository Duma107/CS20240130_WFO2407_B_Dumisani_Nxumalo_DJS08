export default function Home() {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center text-white"
         style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1533591380348-14193f1de18f?q=80&w=2664&auto=format&fit=crop")' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl font-bold mb-6">You got the travel plans, we got the travel vans.</h1>
        <p className="text-xl mb-8">Add adventure to your life by joining the #vanlife movement.</p>
        <p className="text-lg mb-8">Rent the perfect van to make your perfect road trip.</p>
        <a href="/vans" className="bg-orange-500 text-white px-8 py-3 rounded-lg text-xl font-semibold hover:bg-orange-600 transition-colors">
          Find your van
        </a>
      </div>
    </div>
  );
}
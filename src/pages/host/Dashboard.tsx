export default function Dashboard() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="bg-orange-100 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-4">Welcome!</h2>
        <p className="mb-4">Income last <span className="font-bold">30 days</span></p>
        <h3 className="text-3xl font-bold mb-4">$2,260</h3>
        <Link to="income" className="text-blue-600 hover:underline">Details</Link>
      </div>
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Review score</h2>
          <Link to="reviews" className="text-blue-600 hover:underline">Details</Link>
        </div>
        <p className="text-2xl font-bold">⭐ 5.0/5</p>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your listed vans</h2>
          <Link to="vans" className="text-blue-600 hover:underline">View all</Link>
        </div>
        <div className="space-y-4">
          {/* Placeholder for van listings */}
          <div className="flex items-center p-4 bg-gray-50 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1533591380348-14193f1de18f?auto=format&fit=crop&w=100&q=60"
              alt="Van"
              className="w-16 h-16 object-cover rounded mr-4"
            />
            <div>
              <h3 className="font-bold">Modest Explorer</h3>
              <p className="text-gray-600">$60/day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
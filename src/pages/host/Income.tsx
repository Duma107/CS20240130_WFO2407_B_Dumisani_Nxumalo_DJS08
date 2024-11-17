export default function Income() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Income</h1>
      <div className="bg-orange-100 p-6 rounded-lg mb-8">
        <p className="mb-4">Last <span className="font-bold">30 days</span></p>
        <h2 className="text-4xl font-bold mb-4">$2,260</h2>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Your transactions (3)</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded">
            <h3 className="font-bold">$720</h3>
            <p>1/12/23</p>
          </div>
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded">
            <h3 className="font-bold">$560</h3>
            <p>1/5/23</p>
          </div>
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded">
            <h3 className="font-bold">$980</h3>
            <p>12/29/22</p>
          </div>
        </div>
      </div>
    </div>
  );
}
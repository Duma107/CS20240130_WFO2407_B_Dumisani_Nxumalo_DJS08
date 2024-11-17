export default function Reviews() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Your Reviews</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center mb-8">
          <h2 className="text-2xl font-bold mr-4">5.0</h2>
          <span className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</span>
          <span className="ml-4 text-gray-600">overall rating</span>
        </div>
        <div className="space-y-6">
          <div className="border-b pb-6">
            <div className="flex items-center mb-2">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              <p className="ml-2 font-bold">John D.</p>
              <p className="ml-auto text-gray-600">December 1, 2022</p>
            </div>
            <p>Great van, amazing trip! Would definitely rent again.</p>
          </div>
          <div className="border-b pb-6">
            <div className="flex items-center mb-2">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              <p className="ml-2 font-bold">Sarah M.</p>
              <p className="ml-auto text-gray-600">November 23, 2022</p>
            </div>
            <p>The van was perfect for our weekend getaway. Very clean and well-maintained.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
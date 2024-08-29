import Layout from '@/components/AdminDashboardPage/index';
import Footer from '@/components/HomePage/Footer';
import Navbar from '@/components/HomePage/Navbar';

const Dashboard: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Layout>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Overview</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-green-100 rounded-lg">
                <h3 className="text-green-600 font-semibold">Income</h3>
                <p className="text-2xl font-bold">$20,000</p>
                <p className="text-green-500">+70%</p>
              </div>
              <div className="p-4 bg-red-100 rounded-lg">
                <h3 className="text-red-600 font-semibold">Customer</h3>
                <p className="text-2xl font-bold">50,000</p>
                <p className="text-red-500">-10%</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Popular Product</h2>
            <ul>
              <li className="flex justify-between mb-2">
                <span>Green Sandal</span>
                <span>$40.00</span>
              </li>
              <li className="flex justify-between mb-2">
                <span>Headset</span>
                <span>$20.00</span>
              </li>
              <li className="flex justify-between">
                <span>White Shoes</span>
                <span>$20.00</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg col-span-2">
            <h2 className="text-xl font-bold mb-4">Statistic</h2>
            <div className="bg-gray-200 rounded-lg p-4">
              {/* Replace with your chart */}
              <p>Chart Placeholder</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg col-span-2">
            <h2 className="text-xl font-bold mb-4">Top Client</h2>
            <div className="flex space-x-4">
              {/* Replace these with actual client images */}
              <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
              <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
              <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
              <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
              <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg col-span-2">
            <h2 className="text-xl font-bold mb-4">Comment & Message</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="font-bold">Alfredo Torres</p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur?
              </p>
              <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg">
                Reply
              </button>
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default Dashboard;

import {
  LineChart,
  Line,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

const DashBoardCards = () => {
  // 📊 Sample Data
  const lineData = [
    { name: "Mon", value: 20 },
    { name: "Tue", value: 45 },
    { name: "Wed", value: 30 },
    { name: "Thu", value: 60 },
    { name: "Fri", value: 40 },
    { name: "Sat", value: 80 },
    { name: "Sun", value: 50 },
  ];

  const pieData = [
    { name: "Satisfied", value: 93.4 },
    { name: "Unsatisfied", value: 6.6 },
  ];

  const barData = [
    { name: "", value: 40 },
    { name: "", value: 50 },
    { name: "", value: 35 },
    { name: "", value: 90 },
    { name: "", value: 125 },
    { name: "", value: 40 },
    { name: "", value: 35 },
    { name: "", value: 85 },
    { name: "", value: 65 },
    { name: "", value: 75 },
    { name: "", value: 15 },
    { name: "", value: 25 },
    { name: "", value: 35 },
  ];

  const COLORS = ["#3b82f6", "#f59e0b"];

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {/* New Users (Bar Graph) */}
        <div className="bg-white dark:bg-gray-900 p-5 rounded shadow-md">
          <p className="text-lg font-semibold text-gray-600 dark:text-gray-300">
            New Users
          </p>

          <div className="h-20 mt-3">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <Bar dataKey="value" fill="#f97316" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-between mt-3">
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              97%
            </span>
            <span className="text-green-500 text-sm">+9.2%</span>
          </div>
        </div>

        {/* Views */}
        <div className="bg-white dark:bg-gray-900 p-5 rounded shadow-md">
          <p className="text-lg font-semibold text-gray-600 dark:text-gray-300">
            Views
          </p>
          <p className="text-blue-500 text-3xl py-3">37.44k</p>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="text-green-500 font-bold">▲ 973</span> /day
          </p>
        </div>

        {/* Growth */}
        <div className="bg-white dark:bg-gray-900 p-5 rounded shadow-md">
          <p className="text-lg font-semibold text-gray-600 dark:text-gray-300">
            Growth
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            (Last 30 Days)
          </p>
          <p className="text-3xl mt-6 text-gray-900 dark:text-white">
            20.23%
          </p>
        </div>

        {/* Rating (Pie Chart) */}
        <div className="bg-white dark:bg-gray-900 p-5 rounded shadow-md row-span-2 flex flex-col items-center justify-center">
          <p className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-4">
            Rating
          </p>

          <div className="w-40 h-40">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <p className="text-xl font-bold mt-2 text-gray-800 dark:text-white">
            93.4%
          </p>
          <p className="text-sm text-gray-500">Customers</p>

          <div className="flex gap-4 mt-3 text-sm">
            <span className="text-blue-500">● 93.4%</span>
            <span className="text-yellow-500">● 6.6%</span>
          </div>
        </div>

        {/* User Growth (Line Graph) */}
        <div className="bg-white dark:bg-gray-900 p-5 rounded shadow-md md:col-span-2 lg:col-span-1">
          <p className="text-lg font-semibold text-gray-600 dark:text-gray-300">
            User % Growth
          </p>

          <div className="h-24 mt-3">
            <ResponsiveContainer>
              <LineChart data={lineData}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <p className="text-blue-500 text-xl mt-2">45,320</p>
          <p className="text-sm text-gray-500">Since last month</p>
        </div>

        {/* Avg Users */}
        <div className="bg-white dark:bg-gray-900 p-5 rounded shadow-md">
          <p className="text-lg font-semibold text-gray-600 dark:text-gray-300">
            Avg. Users
          </p>
          <p className="text-gray-500 text-sm">(Last 30 Days)</p>
          <p className="text-4xl mt-6 text-gray-900 dark:text-white">
            1172
          </p>
        </div>

        {/* Avg Time */}
        <div className="bg-white dark:bg-gray-900 p-5 rounded shadow-md">
          <p className="text-lg font-semibold text-gray-600 dark:text-gray-300">
            Avg. Time
          </p>
          <p className="text-green-500 text-3xl mt-3">3:54s</p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            <span className="text-red-500 font-bold">▼ 3.5%</span> /day
          </p>
        </div>

      </div>
    </div>
  );
};

export default DashBoardCards;
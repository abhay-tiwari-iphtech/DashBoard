import {
  Users,
  ShoppingCart,
  TrendingDown,
  DollarSign,
  MessageSquare,
  Mail,
  FileText,
  User,
} from "lucide-react";

const DashboardStats = () => {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-md rounded p-6 space-y-6 mt-5 transition-colors duration-300">
      
      {/* 🔝 TOP STATS */}
      <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-2 grid-cols-1">
        
        {/* Visitors */}
        <div>
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
              <Users className="text-blue-500 dark:text-blue-300" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-700 dark:text-white">523</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">New Visitors</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 py-5">
              Quick Links
            </h3>
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span className="flex gap-2">
                <MessageSquare size={16} /> New Comments
              </span>
            </div>
          </div>

          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span className="flex gap-2">
              <Mail size={16} /> Emails
            </span>
          </div>
        </div>

        {/* Sales */}
        <div>
          <div className="flex items-center gap-3">
            <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
              <ShoppingCart className="text-green-500 dark:text-green-300" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-700 dark:text-white">104</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">New Sales</p>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 pt-15">
              <span className="flex gap-2">
                <MessageSquare size={16} /> New Messages
              </span>
            </div>
          </div>

          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span className="flex gap-2">
              <Mail size={16} /> Support Requests
            </span>
          </div>
        </div>

        {/* Bounce */}
        <div>
          <div className="flex items-center gap-3">
            <div className="bg-yellow-100 dark:bg-yellow-900 p-3 rounded-full">
              <TrendingDown className="text-yellow-500 dark:text-yellow-300" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-700 dark:text-white">45%</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Bounce Rate</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-3 py-4">
              Frequently Used Sections
            </h3>
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span className="flex gap-2">
                <FileText size={16} /> Add New Post
              </span>
            </div>
          </div>

          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span className="flex gap-2">
              <Mail size={16} /> Emails Inbox
            </span>
          </div>
        </div>

        {/* Earnings */}
        <div>
          <div className="flex items-center gap-3">
            <div className="bg-red-100 dark:bg-red-900 p-3 rounded-full">
              <DollarSign className="text-red-500 dark:text-red-300" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-700 dark:text-white">$45,234</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Earning</p>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 pt-15">
              <span className="flex gap-2">
                <MessageSquare size={16} /> Manage Users
              </span>
            </div>
          </div>

          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span className="flex gap-2">
              <User size={16} /> Profile Setting
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardStats;
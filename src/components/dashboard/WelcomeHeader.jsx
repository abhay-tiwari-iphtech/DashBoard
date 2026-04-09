const WelcomeHeader = () => {
  return (
    <div>
      <div>
        <p className="font-bold text-3xl text-gray-800 dark:text-white">
          Hi User, Welcome back
        </p>

        <p className="py-2 text-gray-500 dark:text-gray-400">
          Explore your own powerful admin panel and keep track of all activity of{" "}
          <strong className="text-gray-700 dark:text-gray-200">
            Today's Quick stats
          </strong>
        </p>
      </div>
    </div>
  );
};

export default WelcomeHeader;
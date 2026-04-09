import { useSidebar } from "../../context/sidebarContext";
import DashBoardCards from "./DashBoardCards";
import DashboardStats from "./DashboardStats";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import WelcomeHeader from "./WelcomeHeader";

const DashBoard1 = () => {
  const { openSide } = useSidebar();

  return (
    <div className="flex bg-white dark:bg-gray-900 transition-colors duration-300">
      <SideBar />

      <div
        className={`flex-1 min-h-screen transition-all duration-300
        bg-blue-50 dark:bg-gray-800
        ${!openSide ? "pl-10" : "pl-64"}`}
      >
        <Navbar />

        <div className="p-10">
          <WelcomeHeader />
          <DashboardStats />
          <DashBoardCards />
        </div>
      </div>
    </div>
  );
};

export default DashBoard1;
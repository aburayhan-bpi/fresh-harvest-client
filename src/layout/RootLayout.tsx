import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;

import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <nav>
          <Navbar />
        </nav>

        <main>
          <Outlet />
        </main>
      </div>

      <footer className="bottom-0">
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;

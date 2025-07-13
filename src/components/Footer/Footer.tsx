import { AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { PiPhoneLight } from "react-icons/pi";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="mt-10 bg-gray-50 border-t border-gray-200 py-12 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Apps */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Link to="/">
                <div className="flex gap-1 items-center justify-center">
                  {/* logo */}
                  <img
                    src="https://i.ibb.co/nMPj4dtC/icon.png"
                    alt="fresh_harvest_logo"
                    className="w-10"
                  />
                  <span className="font-bold md:text-sm lg:text-2xl">
                    Fresh Harvest
                  </span>
                </div>
              </Link>
            </div>
            <p className="font-semibold mb-2">Download App:</p>
            <div className="flex gap-3">
              <img src="./footer/downloadwith.png" alt="download_gateway" />
            </div>
          </div>

          {/* Quick Links 1 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Quick links 1
            </h3>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Shop</li>
              <li>About us</li>
              <li>Blog</li>
              <li>Detail Blog</li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Quick links 2
            </h3>
            <ul className="space-y-2">
              <li>Favorites</li>
              <li>Cart</li>
              <li>Sign in</li>
              <li>Register</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Contact us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span>
                  <PiPhoneLight className="text-lime-500 text-lg" />
                </span>{" "}
                1234 5678 90
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <AiOutlineMail className="text-lime-500 text-lg" />
                </span>{" "}
                Freshharvests@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <CiLocationOn className="text-lime-500 text-lg" />
                </span>{" "}
                Tanjung Sari Street, Pontianak, Indonesia
              </li>
            </ul>

            <div className="mt-6">
              <p className="font-semibold mb-2">Accepted Payment Methods:</p>
              <div className="flex gap-4">
                <img src="./footer/paywith.png" alt="payment_gateway" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-6">
          <p className="text-gray-500">
            © Copyright {new Date().getFullYear()}, All Rights Reserved by
            Banana Studio
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <FaTwitter className="text-4xl bg-black text-white rounded-full p-2" />
            <FaFacebookF className="text-4xl bg-black text-white rounded-full p-2" />
            <AiFillInstagram className="text-4xl bg-black text-white rounded-full p-2" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

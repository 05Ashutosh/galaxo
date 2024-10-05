import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function GalFooter() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="w-full max-w-[80vw] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Description */}
          <div>
            <h2 className="text-2xl font-bold text-green-400 mb-4">GALAXO</h2>
            <p className="text-sm">
              This is the space to share the business's contact information. Let
              people know when the business is available, how long it will take
              to get a response, and what the best ways are to get in touch.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p>500 Terry Francine Street,</p>
            <p>San Francisco, CA 94158</p>
            <p>info@mysite.com</p>
            <p>Tel: 123-456-7890</p>
          </div>

          {/* Quick Menu */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-green-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/planets" className="hover:text-green-400">
                  Planets
                </Link>
              </li>
              <li>
                <Link to="/company" className="hover:text-green-400">
                  Company
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-green-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Socials</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-400 flex items-center">
                  <Facebook className="w-5 h-5 mr-2" /> Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 flex items-center">
                  <Instagram className="w-5 h-5 mr-2" /> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 flex items-center">
                  <Youtube className="w-5 h-5 mr-2" /> YouTube
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 flex items-center">
                  <Twitter className="w-5 h-5 mr-2" /> X
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <Link to="/privacy-policy" className="hover:text-green-400">
              Privacy Policy
            </Link>
          </div>
          <div className="text-sm text-gray-500">
            © 2035 by GALAXO. Made BY GALAXO Team™
          </div>
        </div>
      </div>
    </footer>
  );
}

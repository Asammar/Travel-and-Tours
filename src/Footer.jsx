const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-extrabold text-blue-400">TravelX</h2>
            <p className="mt-3 text-gray-400">
              Discover breathtaking destinations with us. Your journey starts
              here!
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
            <p className="mt-2 text-gray-400">
              📍 123 Sample St, Sydney, Australia
            </p>
            <p className="mt-1 text-gray-400">📧 hello@travelx.com</p>
            <p className="mt-1 text-gray-400">📞 +1 (555) 000-0000</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="text-blue-400 hover:text-white transition">
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a href="#" className="text-blue-400 hover:text-white transition">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-blue-400 hover:text-white transition">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="#" className="text-blue-400 hover:text-white transition">
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} TravelX. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

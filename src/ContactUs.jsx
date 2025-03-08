const ContactUs = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
      {/* Left: Contact Form */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows="4"
              placeholder="Type your message..."
            ></textarea>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-gray-700">
              I accept the Terms.
            </label>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            Submit
          </button>
        </form>
      </div>

      {/* Right: Contact Information */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <span className="text-blue-600 text-2xl">📧</span>
            <div>
              <p className="text-gray-600">Email us at</p>
              <p className="text-gray-900 font-medium">hello@relume.io</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-blue-600 text-2xl">📞</span>
            <div>
              <p className="text-gray-600">Call us at</p>
              <p className="text-gray-900 font-medium">+1 (555) 000-0000</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-blue-600 text-2xl">📍</span>
            <div>
              <p className="text-gray-600">Visit our office</p>
              <p className="text-gray-900 font-medium">
                123 Sample St, Sydney NSW 2000 AU
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Get Directions &gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

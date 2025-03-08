const Card = () => {
  const tours = [
    {
      title: "Sigiriya Rock Fortress",
      description:
        "Explore the ancient marvel of Sigiriya, a UNESCO World Heritage site with breathtaking views.",
      img: "https://source.unsplash.com/400x300/?sigiriya,travel",
    },
    {
      title: "Ella Scenic Train Ride",
      description:
        "Experience one of the most beautiful train journeys through lush green landscapes and tea plantations.",
      img: "https://source.unsplash.com/400x300/?train,landscape",
    },
    {
      title: "Mirissa Whale Watching",
      description:
        "Get up close with the majestic blue whales in the pristine waters of Mirissa.",
      img: "https://source.unsplash.com/400x300/?whale,ocean",
    },
    {
      title: "Yala National Park Safari",
      description:
        "Discover Sri Lanka’s diverse wildlife, including leopards and elephants, in Yala National Park.",
      img: "https://source.unsplash.com/400x300/?safari,wildlife",
    },
    {
      title: "Galle Dutch Fort",
      description:
        "Step back in time and walk through the charming streets of Galle’s historic Dutch Fort.",
      img: "https://source.unsplash.com/400x300/?galle,fort",
    },
    {
      title: "Nuwara Eliya Tea Gardens",
      description:
        "Visit the lush tea plantations and taste the finest Ceylon tea in the misty hills of Nuwara Eliya.",
      img: "https://source.unsplash.com/400x300/?tea,plantation",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Popular Destinations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tours.map((tour, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full"
          >
            <img
              src={tour.img}
              alt={`A scenic view of ${tour.title}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-900">
                {tour.title}
              </h3>
              <p className="text-gray-600 mt-2 flex-grow">{tour.description}</p>
              <div className="mt-auto">
                <a
                  href={`/book/${index}`}
                  className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      <div className="flex justify-center mt-8">
        <a
          href="/all-tours"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          View More Tours
        </a>
      </div>
    </section>
  );
};

export default Card;

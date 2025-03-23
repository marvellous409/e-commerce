import { useEffect, useState } from "react";

const Accessories = () => {
  const [userApiState, setUserApiState] = useState([]);
  const [expandedItems, setExpandedItems] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const ApiFetch = async () => {
      if (!navigator.onLine) {
        setError("No Internet Connection please connect to the internet");
        return;
      }

      try {
        const response = await fetch("https://fakestoreapi.com/products/category/women's clothing");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const userData = await response.json();
        setUserApiState(userData);
        setError(null);
      } catch (error) {
        setError("Error fetching API. Please check your internet connection.");
      }
    };

    ApiFetch();
  }, []);

  const toggleShowMore = (id) => {
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      <h1 className="text-2xl text-red-500 mx-auto text-center font-bold mt-8 uppercase">
        All women wear
      </h1>

      {error ? (
        <p className="text-center text-red-500 text-lg mt-80">{error}</p> // Show error message when offline
      ) : userApiState.length === 0 ? (
        <p className="text-center text-blue-500 text-lg mt-80">
          Loading products...
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 sm:p-20">
          {userApiState.slice(0, 15).map((item) => (
            <div key={item.id} className="border p-4 shadow-lg rounded-lg">
              <img
                src={item.image || "https://via.placeholder.com/300"}
                alt={item.title}
                className="w-full max-w-[300px] h-60 sm:h-80 md:h-96 lg:h-[400px] object-cover rounded justify-self-center"
                loading="lazy"
              />

              <h2 className="text-2xl font-bold mt-2">{item.title}</h2>

              <p className="text-lg font-bold mt-4 capitalize">
                {expandedItems[item.id]
                  ? item.description
                  : `${item.description.substring(0, 100)}...`}
              </p>

              <div className="mt-2">
                <button
                  className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-4 py-2 rounded-xl"
                  onClick={() => toggleShowMore(item.id)}
                >
                  {expandedItems[item.id] ? "Show Less" : "Show More"}
                </button>
              </div>

              <p className="text-gray-600 font-bold text-lg mt-2">
                ${item.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accessories;

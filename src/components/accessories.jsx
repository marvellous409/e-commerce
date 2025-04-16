import { useEffect, useState } from "react";
import Loader from "./loader"; // Make sure this path is correct

const Accessories = () => {
  const [userApiState, setUserApiState] = useState([]);
  const [expandedItems, setExpandedItems] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const ApiFetch = async () => {
      if (!navigator.onLine) {
        setError("No Internet Connection. Please connect to the internet.");
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const userData = await response.json();

        if (Array.isArray(userData.products)) {
          // Simulate delay
          setTimeout(() => {
            setUserApiState(userData.products);
            setIsLoading(false);
          }, 1000); // ⏱️ 2 seconds delay
          setError(null);
        } else {
          setError("Invalid API response.");
          setIsLoading(false);
        }
      } catch (error) {
        setError("Error fetching API. Please try again.");
        setIsLoading(false);
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
        All cosmetics available
      </h1>

      {error ? (
        <p className="text-center text-red-500 text-lg mt-80">{error}</p>
      ) : isLoading ? (
        <div className="flex justify-center items-center h-[80vh]">
          <Loader />
        </div>
      ) : (
        // your product list here

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 sm:p-20">
          {userApiState.slice(0, 15).map((item) => (
            <div key={item.id} className="border p-4 shadow-lg rounded-lg">
              <img
                src={item.thumbnail || "https://via.placeholder.com/300"}
                alt={item.title}
                className="w-full max-w-[300px] h-60 sm:h-80 md:h-96 lg:h-[400px] object-cover rounded justify-self-center"
              />

              <h2 className="text-2xl font-bold mt-2">{item.title}</h2>

              <p className="text-lg font-bold mt-4 capitalize">
                {expandedItems[item.id]
                  ? item.description || "No description available"
                  : `${
                      item.description?.substring(0, 100) ||
                      "No description available"
                    }...`}
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

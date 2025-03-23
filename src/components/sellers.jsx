import { useState } from "react";
import Button from "./button";
import ImImage from "../assets/manyellow.jpg";
import ImImage2 from "../assets/redshoe.jpg";
import ImImage3 from "../assets/noel.jpg";
import ImImage4 from "../assets/red.jpg";
import ImImage5 from "../assets/sweeter.jpg";
import Icons from "../assets/currency.svg";
import Icon3 from "../assets/schedule.svg";
import Icon2 from "../assets/progress.svg";
import Icon1 from "../assets/local.svg";

const sellerData = [
  {
    id: 1,
    img: ImImage,
    text: "Elegant blouse with v-flow sleeves",
    price: "$ 520.00",
    press1: "$ -333",
    details:
      "Perfect for both casual and formal events, offering a blend of comfort and sophistication.",
  },
  {
    id: 2,
    img: ImImage2,
    text: "Comfortable high-waisted shoes",
    price: "$ 350.00",
    press2: "$ -333",
    details: "Designed for all-day wear and style.",
  },
  {
    id: 3,
    img: ImImage3,
    text: "Classic comestic to add beauty",
    price: "$ 250.00",
    details: "Designed for all-day wear and style.",
  },
  {
    id: 4,
    img: ImImage4,
    text: "Durable cargo bag with multiple pockets",
    price: "$ 200.00",
    press1: "$ -333",
    details: "Ideal for chilly days while keeping you stylish.",
  },
  {
    id: 5,
    img: ImImage5,
    text: "Fashionable leather jacket with biker style",
    price: "$ 100.00",
    details: "Ideal for chilly days while keeping you stylish.",
  },
];

const Sellers = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="mt-20 p-4">
      {selectedProduct ? (
        // Show only the modal when a product is selected
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-90">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center sm:px-20">
            <img
              className="h-52 max-w-2xl object-cover w-full"
              src={selectedProduct.img}
              alt="product"
            />
            <h3 className="text-xl font-bold">{selectedProduct.text}</h3>
            <p className="mt-2">{selectedProduct.details}</p>
            <p className="text-red-500 text-2xl font-bold mt-4">
              {selectedProduct.price}
            </p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => setSelectedProduct(null)}
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        // Show everything else when no product is selected
        <>
          <h2 className="text-5xl text-center">Best Sellers</h2>
          <hr className="w-12 border-b-4 border-red-500 mx-auto mt-3 rounded-2xl font-extrabold"></hr>
          <div className="max-w-7xl mx-auto  px-10 sm:px-0">
            <p className="text-gray-500 mx-auto">click on the image for better view</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:p-5">
              {sellerData.map((sells) => (
                <div
                  className="bg-white flex flex-col items-center relative overflow-hidden h-[390px] border-4 border-white shadow-lg shadow-[#f0e3e3] rounded-lg"
                  key={sells.id}
                  onClick={() => setSelectedProduct(sells)}
                >
                  <img
                    className="absolute left-0 z-0 h-52 w-full object-cover"
                    src={sells.img}
                    alt="product"
                    loading="lazy"
                  />
                  <div className="relative z-10 text-center mt-52">
                    <p className="text-[18px] font-semibold">{sells.text}</p>
                    <p className="text-red-500 text-2xl font-bold">
                      {sells.price}
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 h-1.5">
                    {sells.press1 && (
                      <Button
                        bg_colour="bg-green-500"
                        value={sells.press1}
                        text_colour="white"
                        font_type="bold"
                      />
                    )}
                  </div>
                  <div className="absolute top-0 left-0 h-1.5">
                    {sells.press2 && (
                      <Button
                        bg_colour="bg-red-500"
                        value={sells.press2}
                        text_colour="white"
                        font_type="bold"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional info section */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center bg-gray-300 max-w-[1080px] h-auto sm:h-[80px] mx-auto gap-2 p-5 rounded-lg">
            <div className="flex items-center border-b-2 sm:border-b-0 sm:border-r-2 border-white py-4 w-full sm:w-1/4 gap-2">
              <img className="w-12 h-12" src={Icon1} alt="Icon1" />
              <div className="flex-1">
                <h4 className="font-bold">New Shipping</h4>
                <p className="text-sm">Ready for all shipment</p>
              </div>
            </div>

            <div className="flex items-center border-b-2 sm:border-b-0 sm:border-r-2 border-white py-4 w-full sm:w-1/4 gap-2">
              <img className="w-12 h-12" src={Icons} alt="Icons" />
              <div className="flex-1">
                <h4 className="font-bold">Fast Delivery</h4>
                <p className="text-sm">Quick & reliable service</p>
              </div>
            </div>

            <div className="flex items-center border-b-2 sm:border-b-0 sm:border-r-2 border-white py-4 w-full sm:w-1/4 gap-2">
              <img className="w-12 h-12" src={Icon2} alt="Icon2" />
              <div className="flex-1">
                <h4 className="font-bold">Secure Packaging</h4>
                <p className="text-sm">Safe and secure shipping</p>
              </div>
            </div>

            <div className="flex items-center py-4 w-full sm:w-1/4 gap-1.5">
              <img className="w-12 h-12" src={Icon3} alt="Icon3" />
              <div className="flex-1">
                <h4 className="font-bold">24/7 Support</h4>
                <p className="text-sm">We're here for you</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sellers;

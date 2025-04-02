import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "./button";
import ImImage1 from "../assets/red.jpg";
import ImImage2 from "../assets/sweeter.jpg";
import ImImage3 from "../assets/brown.jpg";
import ImImage4 from "../assets/shoes.jpg";
import ImImage5 from "../assets/eyeglass.jpg";
import ImImage6 from "../assets/manyellow.jpg";
import ImImage7 from "../assets/gray.jpg";
import ImImage8 from "../assets/fair.jpg";
import ImImage9 from "../assets/redshoe.jpg";
import ImImage10 from "../assets/both.jpg";

const newData = [
  {
    id: 1,
    img: ImImage6,
    text: "Elegant blouse with v-flowy sleeves",
    price: "$ 520.00",
    press1: "$ -333",
    details:
      "Perfect for both casual and formal events, offering a blend of comfort and sophistication.",
  },
  {
    id: 2,
    img: ImImage1,
    text: "Comfortable high-waisted bag with trendy ripped",
    price: "$ 350.00",
    press2: "New",
    details:
      "This fashionable accessory is both spacious and stylish, suitable for everyday use.",
  },
  {
    id: 3,
    img: ImImage8,
    text: "Classic white shirt with slim fit and button-down collar",
    price: "$ 250.00",
    details:
      "Made from breathable fabric, it's perfect for office wear or casual outings.",
  },
  {
    id: 4,
    img: ImImage9,
    text: "Comfortable high-waisted shoe with trendy ripped",
    price: "$ 200.00",
    press1: "$ -333",
    details: "Designed for all-day wear and style.",
  },
  {
    id: 5,
    img: ImImage5,
    text: "Durable cargo eyeglass in affordable prices",
    price: "$ 200.00",
    details: "A stylish yet functional accessory for everyday use.",
  },
  {
    id: 6,
    img: ImImage2,
    text: "Fashionable leather jacket with biker style and zip",
    price: "$ 180.00",
    press1: "$ -333",
    details: "Ideal for chilly days while keeping you stylish.",
  },
  {
    id: 7,
    img: ImImage7,
    text: "Adorable onesie with cute cartoon design and snap",
    price: "$ 150.00",
    press2: "New",
    details: "Made from soft fabric for ultimate comfort.",
  },
  {
    id: 8,
    img: ImImage10,
    text: "Cozy sweatshirt with hood and colorful stripes",
    price: "$ 470.00",
    details: "A must-have for a comfortable and trendy look.",
  },
  {
    id: 9,
    img: ImImage4,
    text: "Stylish sneakers with velcro straps and breather mesh",
    price: "$ 280.00",
    press1: "- $333",
    details: "Designed for both casual wear and active lifestyles.",
  },
  {
    id: 10,
    img: ImImage3,
    text: "A Stylish bag with silver straps",
    price: "$ 180.00",
    details: "Offering both elegance and practicality.",
  },
];

const ArriVal = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="mt-20 px-4">
      <h2 className="text-3xl font-bold text-center">New Arrival</h2>
      <hr className="w-12 border-b-4 border-red-500 mx-auto mt-3 rounded-2xl font-extrabold"></hr>

      {/* Category Buttons */}
      <div className="flex justify-center mt-5 flex-wrap">
        <p className="border border-red-500 px-6 bg-red-500 text-white">New</p>
        <p className="border px-6"><Link to='/accessories'><span className="font-bold text-black">accessories</span></Link></p>
        <p className="border px-6"><Link to='/men'><span className="font-bold text-black">men</span></Link></p>
        <p className="border px-6"><Link to='/women'><span className="font-bold text-black">women</span></Link></p>
      </div>

      {/* Responsive Product Grid */}
      <div className="max-w-7xl mx-auto mt-10 px-10 sm:px-0">
      <p className="text-gray-500 mx-auto">click on the image for better view</p>
        <div className="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-4  sm:p-5">
          {newData.map((items) => (
            <div
              className="flex flex-col items-center relative overflow-hidden h-[380px] border-4 border-white shadow-lg shadow-[#f0e3e3] cursor-pointer"
              key={items.id}
              onClick={() => setSelectedProduct(items)}
            >
              {/* Product Image */}
              <img
                className="h-52 max-w-2xl object-cover w-full"
                src={items.img}
                alt="product"

              />

              {/* Product Details */}
              <p className="text-[18px] mt-4">{items.text}</p>
              <p className="text-red-500 text-2xl font-bold">{items.price}</p>

              {/* Discount/New Button */}
              <div className="absolute top-0 right-0 h-1.5">
                {items.press1 && (
                  <Button
                    bg_colour="bg-green-500"
                    value={items.press1}
                    text_colour="white"
                    font_type="bold"
                  />
                )}
              </div>
              <div className="absolute top-0 left-0 h-1.5">
                {items.press2 && (
                  <Button
                    bg_colour="bg-red-500"
                    value={items.press2}
                    text_colour="white"
                    font_type="bold"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup for more details */}
      {selectedProduct && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
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
      )}
    </div>
  );
};

export default ArriVal;

// <div className="mt-20">
//   <h2 className="text-3xl font-bold"> New Arrival</h2>
//   <div className="flex justify-center">
//     <p className="border border-red-500 px-7.5 bg-red-500 text-white">
//       New
//     </p>
//     <p className="border px-6.5">Woman</p>
//     <p className="border px-6.5">Accessories</p>
//     <p className="border px-6.5">Men</p>
//   </div>
//   <div className="max-w-5xl mx-auto  mt-10">
//     <div className="grid grid-cols-4 gap-4">
//       {newData.map((items) => {
//         return (
//           <div
//             className="flex  justify-center relative overflow-hidden h-[350px] gap-4 border border-amber-700 bg-white shadow-2xl shadow-amber-100"
//             key={items.id}
//           >
//             <img
//               className="absolute left-0 z-0 h-52 w-60 object-cover"
//               src={items.img}
//               alt="product"
//             />
//             <div className="relative z-10" />
//             <div className="adsolute mt-54 z-10 mx-auto  items-center justify-center">
//               <p className="items-center text-[18px]">{items.text}</p>
//               <p className="text-red-500 text-2xl font-bold">
//                 {items.price}
//               </p>
//               <div className="absolute top-0">
//               <Button
//                  bg_colour="bg-green-500"
//                  value={items.press1}
//                  text_colour="white"
//                  font_type="bold"
//               />
//               </div>
//               <div className="absolute top-0 none">
//               <Button
//                  bg_colour="bg-red-500"
//                  value={items.press}
//                  text_colour="white"
//                  font_type="bold"
//               />
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   </div>
// </div>

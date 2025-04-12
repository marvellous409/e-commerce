import { useState } from "react";
import Button from "./button";
import { db } from "./firebase/firebaseconfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

// Images
import ImImage1 from "../assets/red.webp";
import ImImage2 from "../assets/sweeter.webp";
import ImImage3 from "../assets/brown.webp";
import ImImage4 from "../assets/shoes.webp";
import ImImage5 from "../assets/eyeglass.webp";
import ImImage6 from "../assets/manyellow.webp";
import ImImage7 from "../assets/gray.webp";
import ImImage8 from "../assets/fair.webp";
import ImImage9 from "../assets/redshoe.webp";
import ImImage10 from "../assets/both.webp";

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
    press2: "$ New",
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
    press2: "$ New",
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
    press1: "$ -333",
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
  const [cart, setCart] = useState([]);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 9000); // Hide after 9s
  };

  const addToCart = async (item) => {
    try {
      const colRef = collection(db, "cart");
      const snapshot = await getDocs(colRef);

      const exists = snapshot.docs.find(
        (doc) => doc.data().productId === item.id
      );

      if (exists) {
        showToastMessage("🛒 Item already in cart!");
        return;
      }

      const cartItem = {
        productId: item.id,
        text: item.text,
        price: item.price,
        quantity: 1,
        img: item.img,
      };

      await addDoc(colRef, cartItem);
      setCart((prev) => [...prev, cartItem]);
      showToastMessage("✅ Item added to cart!");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {showToast && (
        <div className=" slide-in fixed top-4 left-4 bg-white text-green-600 border border-green-400 shadow-lg px-4 py-3 rounded-lg z-50 animate-slide-in">
          <span className="font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <header className="text-center py-10 mt-30">
        <h1 className="text-4xl font-bold text-gray-800">New Arrivals</h1>
        <hr className="w-12 border-b-4 border-red-500 mx-auto mt-3 rounded-2xl font-extrabold"></hr>
        <p className="text-gray-500 mt-2">Check out our latest collection</p>
      </header>

      {/* Product Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6 pb-10">
        {newData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group relative"
          >
            {/* Product Image */}
            <img
              src={item.img}
              alt={item.text}
              className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-md font-semibold mb-1">{item.text}</h3>
              <p className="text-red-500 text-xl font-bold">{item.price}</p>

              {/* Add to Cart Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(item);
                }}
                className="mt-4 w-full bg-gradient-to-r from-cyan-500 to-pink-500 text-white py-2 rounded-lg hover:scale-105 transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>

            {/* Top Right Label - press1 */}
            {item.press1 && (
              <div className="absolute top-1 right-1 z-10">
                <Button
                  bg_colour="green"
                  value={item.press1}
                  text_colour="white"
                  font_type="bold"
                  width="100px"
                  height="40px"
                />
              </div>
            )}

            {/* Top Left Label - press2 */}
            {item.press2 && (
              <div className="absolute top-1 left-1 z-10">
                <Button
                  bg_colour="red"
                  value={item.press2}
                  text_colour="white"
                  font_type="bold"
                  width="100px"
                  height="40px"
                />
              </div>
            )}
          </div>
        ))}
      </section>
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

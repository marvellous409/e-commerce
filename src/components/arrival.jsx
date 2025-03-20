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
  },
  {
    id: 2,
    img: ImImage1,
    text: "Comfortable high-waisted bag with trendy ripped",
    price: "$ 350.00",
    press2: "New",
  },
  {
    id: 3,
    img: ImImage8,
    text: "Classic white shirt with slim fit and botton-down collar",
    price: "$ 250.00",
  },
  {
    id: 4,
    img: ImImage9,
    text: "Comfortable high-waisted shoe with trendy ripped",
    price: "$ 200.00",
    press1: "$ -333",
  },
  {
    id: 5,
    img: ImImage5,
    text: "Durable cargo eyeglass in affordable prices",
    price: "$ 200.00",
  },
  {
    id: 6,
    img: ImImage2,
    text: "Fashionable leather jacket with biker style and zip",
    price: "$ 180.00",
    press1: "$ -333",
  },
  {
    id: 7,
    img: ImImage7,
    text: "Adorable onesie with cute cartoon design and snap",
    price: "$ 150.00",
  },
  {
    id: 8,
    img: ImImage10,
    text: "Cozy sweatshirt with hood and colorful stripes",
    price: "$ 470.00",
  },
  {
    id: 9,
    img: ImImage4,
    text: "Stylish sneakers with velcro straps and breather mesh",
    price: "$ 280.00",
    press1: "New",
  },
  {
    id: 10,
    img: ImImage3,
    text: "A Stylish bag with silver straps",
    price: "$ 180.00",
  },
];


const ArriVal = () => {
  return (
    <div className="mt-20 px-4">
      <h2 className="text-3xl font-bold text-center">New Arrival</h2>
      <hr className="w-12 border-b-4 border-red-500 mx-auto mt-3 rounded-2xl font-extrabold"></hr>

      {/* Category Buttons */}
      <div className="flex justify-center mt-5  flex-wrap">
        <p className="border border-red-500 px-6 bg-red-500 text-white">New</p>
        <p className="border px-6">Woman</p>
        <p className="border px-6">Accessories</p>
        <p className="border px-6">Men</p>
      </div>

      {/* Responsive Product Grid */}
      <div className="max-w-7xl mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {newData.map((items) => (
            <div
              className="flex flex-col items-center relative overflow-hidden h-[380px] border-4 border-white shadow-lg shadow-[#f0e3e3]"
              key={items.id}
            >
              {/* Product Image */}
              <img className="h-52 max-w-2xl object-cover mt-[-0px] w-full" src={items.img} alt="product" />

              {/* Product Details */}
              <p className="text-[18px] mt-4">{items.text}</p>
              <p className="text-red-500 text-2xl font-bold">{items.price}</p>

              {/* Discount/New Button */}
              <div className="absolute top-0 right-0 h-1.5">
                {items.press1 && (
                  <Button bg_colour="bg-green-500" value={items.press1} text_colour="white" font_type="bold" />
                )}
                <div className="relative -left-41">
                  {items.press2 && (
                    <Button bg_colour="bg-red-500" value={items.press2} text_colour="white" font_type="bold" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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

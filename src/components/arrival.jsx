import Button from "./button";
import ImImage from "../assets/wallpaper.jpg";

const newData = [
  {
    id: 1,
    img: ImImage,
    text: "Elegant blouse with v-flowy sleeves",
    price: "$ 520.00",
    press: "$ -333"
  },
  {
    id: 2,
    img: ImImage,
    text: "Comfortable high-waisted jeans with trendy ripped",
    price: "$ 350.00",
    press: "New"
  },
  {
    id: 3,
    img: ImImage,
    text: "Classic white shirt with slim fit and botton-down collar",
    price: "$ 250.00",
  },
  {
    id: 4,
    img: ImImage,
    text: "Durable cargo pant with multiple pockets",
    price: "$ 200.00",
    press: "$ -333",
  },
  {
    id: 5,
    img: ImImage,
    text: "Fashionable leather jacket with biker style and zip",
    price: "$ 100.00",
    press1: "$ -333",
  },
  {
    id: 6,
    img: ImImage,
    text: "Adorable onesie with cute cartoon design and snap",
    price: "$ 100.00",
  },
  {
    id: 7,
    img: ImImage,
    text: "Cozy sweatshirt with hood and colorful stripes",
    price: "$ 470.00",
    press: "New"
  },
  {
    id: 8,
    img: ImImage,
    text: "Stylish sneakers with velro straps and breather mesh",
    price: "$ 180.00",
  },
];

const ArriVal = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold"> New Arrival</h2>
      <div className="flex justify-center">
        <p className="border border-red-500 px-7.5 bg-red-500 text-white">
          New
        </p>
        <p className="border px-6.5">Woman</p>
        <p className="border px-6.5">Accessories</p>
        <p className="border px-6.5">Men</p>
      </div>
      <div className="max-w-5xl mx-auto  mt-10">
        <div className="grid grid-cols-4 gap-4">
          {newData.map((items) => {
            return (
              <div
                className="flex  justify-center relative overflow-hidden h-[350px] gap-4 border border-amber-700 bg-white shadow-2xl shadow-amber-100"
                key={items.id}
              >
                <img
                  className="absolute left-0 z-0 h-52 w-60 object-cover"
                  src={items.img}
                  alt="product"
                />
                <div className="relative z-10" />
                <div className="adsolute mt-54 z-10 mx-auto  items-center justify-center">
                  <p className="items-center text-[18px]">{items.text}</p>
                  <p className="text-red-500 text-2xl font-bold">
                    {items.price}
                  </p>
                  <div className="absolute top-0">
                  <Button
                     bg_colour="bg-green-500"
                     value={items.press1}
                     text_colour="white"
                     font_type="bold"
                  />
                  </div>    
                  <div className="absolute top-0 none">
                  <Button
                     bg_colour="bg-green-500"
                     value={items.press}
                     text_colour="white"
                     font_type="bold"
                  />
                  </div>    
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArriVal;

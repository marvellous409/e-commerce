import Button from "./button";
import ImImage from "../assets/wallpaper.jpg";

const sellerData = [
  {
    id: 1,
    img: ImImage,
    text: "Elegant blouse with v-flowy sleeves",
    price: "$ 520.00",
  },
  {
    id: 2,
    img: ImImage,
    text: "Comfortable high-waisted jeans",
    price: "$ 350.00",
  },
  {
    id: 3,
    img: ImImage,
    text: "Classic white shirt with slim fit",
    price: "$ 250.00",
  },
  {
    id: 4,
    img: ImImage,
    text: "Durable cargo pant with multiple pockets",
    price: "$ 200.00",
  },
  {
    id: 5,
    img: ImImage,
    text: "Fashionable leather jacket with biker style  ",
    price: "$ 100.00",
    button1: "$ -333",
  },
];

const Sellers = () => {
  return (
    <div className="mt-20">
      <h2 className="text-5xl">Best Sellers</h2>
      <div>
      <div className="max-w-5xl mx-auto  mt-10">
      <div className="grid grid-cols-5 gap-4">
        {sellerData.map((sells) => {
          return (
            <div
              className="flex  justify-center relative overflow-hidden h-[350px] gap-4 border border-amber-700 bg-white shadow-2xl shadow-amber-100"
              key={sells.id}
            >
                
                <img
                  className="absolute left-0 z-0 h-52 w-60 object-cover"
                  src={sells.img}
                  alt="product"
                />
                <div className="relative z-10" />
                <div className="adsolute mt-54 z-10 mx-auto  items-center justify-center">
                  <p className="items-center text-[18px]">{sells.text}</p>
                  <p className="text-red-500 text-2xl font-bold">
                    {sells.price}
                  </p>
                  <div className="absolute top-0 right-0 h-1.5">
                  <Button
                     bg-colour="green-500"
                     value=""
                     text_size="2"
                     text_colour="white"
                     font_type="bold"
                  />
                  </div>
                </div>
            </div>
          );
        })}
        ;
      </div>
    </div>
    <div className="flex justify-center ">
        <p className="border px-20 py-3.5">New</p>
        <p className="border px-20 py-3.5">Woman</p>
        <p className="border px-20 py-3.5">Accessories</p>
        <p className="border px-20 py-3.5">Men</p>
      </div>

    </div>
    </div>
  );
};

export default Sellers;

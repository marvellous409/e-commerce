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
    button1: "$ -333",
  },
  {
    id: 2,
    img: ImImage2,
    text: "Comfortable high-waisted shoes",
    price: "$ 350.00",
    button2: "$ -333",
  },
  {
    id: 3,
    img: ImImage3,
    text: "Classic comestic to add beauty",
    price: "$ 250.00",
  },
  {
    id: 4,
    img: ImImage4,
    text: "Durable cargo bag with multiple pockets",
    price: "$ 200.00",
    button1: "$ -333",
  },
  {
    id: 5,
    img: ImImage5,
    text: "Fashionable leather jacket with biker style  ",
    price: "$ 100.00",
  },
];

const Sellers = () => {
  return (
    <div className="mt-20">
      <h2 className="text-5xl">Best Sellers</h2>
      <hr className="w-12 border-b-4 border-red-500 mx-auto mt-3  rounded-2xl font-extrabold"></hr>
      <div>
        <div className="max-w-7xl mx-auto  mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {sellerData.map((sells) => {
              return (
                <div
                  className="gap-4 bg-white  flex flex-col items-center relative overflow-hidden h-[390px]  border-4  border-white shadow-lg shadow-[#f0e3e3]"
                  key={sells.id}
                >
                  <img
                    className="absolute left-0 z-0  h-52 max-w-7xl  w-full object-cover "
                    src={sells.img}
                    alt="product"
                  />
                  <div className="relative z-10" />
                  <div className="adsolute mt-54 z-10 mx-auto  items-center justify-center">
                    <p className="items-center text-[18px]">{sells.text}</p>
                    <p className="text-red-500 text-2xl font-bold">
                      {sells.price}
                    </p>
                    {sells.button1 && (
                      <div className="absolute top-0 right-0 h-1.5">
                        <Button
                          bg_colour="bg-green-500"
                          value={sells.button1}
                          text_size="2"
                          text_colour="white"
                          font_type="bold"
                        />
                      </div>
                    )}
                    {sells.button2 && (
                      <div className="absolute top-0 right-0 h-1.5">
                        <Button
                          bg_colour="bg-red-500"
                          value={sells.button2}
                          text_size="2"
                          text_colour="white"
                          font_type="bold"
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            ;
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center bg-gray-300 max-w-[1080px] h-auto sm:h-[80px] mx-auto gap-2 p-5 rounded-lg">
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

      </div>
    </div>
  );
};

export default Sellers;

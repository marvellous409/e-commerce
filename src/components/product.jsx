import { Link } from "react-router-dom";
import imImage1 from "../assets/firstlady.jpg";
import imImage2 from "../assets/shoes.jpg";
import imImage3 from "../assets/manyellow.jpg";
import Button from "./button";

const productData = [
  {
    id: 1,
    img: imImage1,
    text: "Women’s",
    link: "/women"
  },
  {
    id: 2,
    img: imImage2,
    text: "Accessories",
    link: "/accessories"
  },
  {
    id: 3,
    img: imImage3,
    text: "Men’s",
    link: "/men"
  },
];

const ProDuct = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center relative overflow-hidden h-[300px] rounded-xl shadow-lg"
          >
            {/* Background Image */}
            <img
              className="absolute left-0 z-0 h-full w-full object-cover"
              src={item.img}
              alt={item.text}
              loading="lazy"
            />

            {/* Dark Overlay */}
            <div className="absolute h-full w-full bg-black opacity-40 z-10" />

            {/* Button */}
            <Link to={item.link} className="relative z-20">
              <Button
                bg_colour="bg-white"
                value={item.text}
                text_size="3xl"
                text_colour="black"
                font_type="bold"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProDuct;

    // <div className="relative items-center">
    //     <div className="w-[85%]  h-16 flex">
    //         <div>
    //         <img  className=""src={imImage} alt="" />
    //         <div className="relative bottom-20 left-65">
    //         <Button bg_colour="white" value="Shop Now!" text_size="3xl" text_colour="white" font_type="bold" />
    //         </div>
    //         </div>
    //         <div>
    //         <img src={imImage} alt="" />
    //         <div className="absolute top-20 left-25">
    //         <Button bg_colour="white" value="Shop Now!" text_size="3xl" text_colour="white" font_type="bold" />
    //         </div>
    //         </div>
    //         <div>
    //         <img src={imImage} alt="" />
    //         <div className="relative top-30 right-75">
    //         <Button bg_colour="white" value="Shop Now!" text_size="3xl" text_colour="white" font_type="bold" />
    //         </div>
    //         </div>
    //     </div>
    // </div>

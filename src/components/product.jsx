import imImage from "../assets/wallpaper.jpg";
import Button from "./button";

const productData = [
  {
    id: 1,
    img: imImage,
    text: "Women`s",
  },
  {
    id: 2,
    img: imImage,
    text: "accessories`s",
  },
  {
    id: 3,
    img: imImage,
    text: "Men`s",
  },
];

const ProDuct = () => {
  return (
    <div className="max-w-5xl mx-auto  mt-10">
      <div className="grid grid-cols-3 gap-4">
        {productData.map((item) => {
          return (
            <div className="flex items-center justify-center relative overflow-hidden h-[300px]" key={item.id}>
              <img
                className="absolute left-0 z-0 h-full w-full object-cover"
                src={item.img}
                alt=""
              />

              <div className="h-full w-full  absolute z-10" />
              <div className="relative z-20">
                <Button
                  bg_colour="bg-white"
                  value={item.text}
                  text_size="3xl"
                  text_colour="black"
                  font_type="bold"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
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
  );
};

export default ProDuct;

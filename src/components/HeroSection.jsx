import imImage from "../assets/firstlady.webp";
import Button from "./button";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="bg-[#f5f5f5] flex flex-col-reverse md:flex-row items-center justify-around h-full p-6 md:p-10">
      <div className="max-w-5xl w-full">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          {/* Image (moves to top on small screens) */}
          <img
            className="w-[300px] h-[400px] md:w-[500px] md:h-[600px] rounded-2xl mb-6 md:mb-0 mt-20"
            src={imImage}
            alt="Fashion model"
          />

          {/* Text Content */}
          <div className="md:ml-10 fade-in">
            <h3 className="font-jost text-2xl">Spring/Summer Collection</h3>
            <p className="text-4xl md:text-6xl font-semibold mt-3">
              Get Up to 30% Off New Arrivals
            </p>
            <div className="mt-8">
              <Button
                bg_colour="red"
                value="Shop Now!"
                text_size="3xl"
                text_colour="white"
                font_type="bold"
                width="200px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

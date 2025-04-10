import ImImage from "../assets/xxxten.webp";
import Button from "./button";
import "./deal.css";

const Deal = () => {
  return (
    <div className="bg-[#d4d8db] p-4 mt-6.5">
      <div className="flex flex-col items-center text-center md:flex-row md:justify-center md:text-left gap-4 md:gap-52">
        {/* Image on top for small screens, left for desktop */}
        <div className="w-full flex justify-center md:w-auto slide-in">
          <img className="w-64 md:w-96 mb-6 md:mb-0" src={ImImage} alt="Deal of the week" 
          />
        </div>

        {/* Content */}
        <div className="mt-5 md:mt-0">
          <h2 className="font-medium text-3xl  text-center md:text-4xl mt-5">Deal of the week</h2>

          {/* Centered Red Line */}
          <hr className="w-12 border-b-4 border-red-500 mx-auto mt-3 rounded-3xl font-extrabold" />

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 md:gap-8 mt-6 md:mt-9 flex-wrap">
            <div className="bg-white w-16 md:w-20 h-16 md:h-20 rounded-full flex flex-col justify-center items-center p-2">
              <p className="text-red-500 text-2xl md:text-3xl font-bold">2</p>
              <p className="font-bold">Days</p>
            </div>
            <div className="bg-white w-16 md:w-20 h-16 md:h-20 rounded-full flex flex-col justify-center items-center p-2">
              <p className="text-red-500 text-2xl md:text-3xl font-bold">23</p>
              <p className="font-bold">Hours</p>
            </div>
            <div className="bg-white w-16 md:w-20 h-16 md:h-20 rounded-full flex flex-col justify-center items-center p-2">
              <p className="text-red-500 text-2xl md:text-3xl font-bold">58</p>
              <p className="font-bold">Mins</p>
            </div>
            <div className="bg-white w-16 md:w-20 h-16 md:h-20 rounded-full flex flex-col justify-center items-center p-2">
              <p className="text-red-500 text-2xl md:text-3xl font-bold">32</p>
              <p className="font-bold">Secs</p>
            </div>
          </div>

          {/* Centered Button */}
          <div className="mt-6 flex justify-center">
            <Button
              bg_colour="bg-black"
              value="shop now"
              text_size="2"
              text_colour="white"
              font_type="bold"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deal;

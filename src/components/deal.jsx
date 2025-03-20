import ImImage from "../assets/wallpaper.jpg";
import Button from "./button";

const Deal = () => {
  return (
    <div className="bg-gray-300">
      <div>
        <div className=" flex flex-row-reverse  gap-52 justify-center mt-15">
          <div className="content-center">
            <h2 className="font-medium text-4xl">Deal of the week</h2>
            <div className="flex gap-8 mt-9">
              <div className="bg-white w-20 h-20 rounded-[300px] align-middle p-2">
                <p className="text-red-500 text-3xl font-bold">2</p>
                <p className="font-bold">Days</p>
              </div>
              <div className="bg-white w-20 h-20 rounded-[300px] align-middle p-2">
                <p className="text-red-500 text-3xl font-bold">23</p>
                <p className="font-bold">Hours</p>
              </div>
              <div className="bg-white w-20 h-20 rounded-[300px] align-middle p-2">
                <p className="text-red-500 text-3xl font-bold">58</p>
                <p className="font-bold">Minutes</p>
              </div>
              <div className="bg-white w-20 h-20 rounded-[300px] align-middle p-2">
                <p className="text-red-500 text-3xl font-bold">32</p>
                <p className="font-bold">Days</p>
              </div>
            </div>
            <div className="mt-3.5" />
            <Button
              bg_colour="bg-black"
              value="shop now"
              text_size="2"
              text_colour="white"
              font_type="bold"
            />
          </div>
          <img className="w-96" src={ImImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Deal;

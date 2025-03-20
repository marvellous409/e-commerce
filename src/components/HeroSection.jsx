import imImage from '../assets/xxten.jpg';
import Button from './button';

const HeroSection = () => {

    return (
        <div className=" h-[580px] items-center bg-gray-200 flex justify-around">
          <div className="max-w-5xl m-auto">
          <div className="flex">
            <div className="mt-30">
                <h3 className="font-jost text-2xl">Spring/summer collection</h3>
                <p
                 className="text-3xl font-bold ">Get Up to 30% Off New Arrival
                </p>
                <Button bg_colour="bg-red-500" value="Shop Now!" text_size="3xl" text_colour="white" font_type="bold"/>
                 </div>
          <img   className="w-[600px] rounded-2xl" src={imImage} alt=""/>
          </div>
          </div>
        </div>  
    );
  };
  
  export default HeroSection;   
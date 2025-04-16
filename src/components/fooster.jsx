import { useState } from "react";
import Button from "./button";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instragram.png";
import Youtube from "../assets/youtube.png";
import Twitter from "../assets/twitter.png";

const Font = () => {
  const [text, setText] = useState("");

  return (
    <div className="w-full mt-4">
      {/* Newsletter Section */}
      <div className="bg-gray-300 py-10 px-4 md:px-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center text-center md:text-left space-y-5 md:space-y-0">
          <div>
            <p className="text-2xl font-bold">Newsletter</p>
            <p className="text-sm font-semibold max-w-md">
              Subscribe to our Newsletter and get 50% off on your first purchase
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center md:space-x-3 w-full md:w-auto">
            <input
              type="text"
              value={text}
              placeholder="Your email"
              onChange={(e) => setText(e.target.value)}
              className="border py-2 px-4 w-full md:w-72 bg-white text-lg border-gray-400 rounded-md focus:outline-none"
            />
            <Button
              bg_colour="red"
              value="Subscribe"
              text_size="lg"
              text_colour="white"
              font_type="semibold"
              width="100px"
              height="40px"
              className="w-full md:w-auto mt-3 md:mt-0 mr-3.5"
            />
          </div>
        </div>
      </div>
      
      {/* Footer Section */}
      <div className="max-w-7xl mx-auto py-6 px-4 md:px-0 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-center md:text-left">
          <ul className="flex flex-wrap justify-center md:justify-start text-lg font-semibold gap-4">
            <li>Blog</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
          <p className="text-sm font-semibold mt-2">
            All company products are reserved for good
          </p>
        </div>
        <div className="flex space-x-4">
          {[Facebook, Twitter, Youtube, Instagram].map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt="social-icon"
              className="w-8 h-8 transition-transform duration-200 ease-in-out hover:scale-110"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Font;

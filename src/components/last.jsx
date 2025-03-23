import Images1 from "../assets/redshoe.jpg";
import Images2 from "../assets/both.jpg";
import Images3 from "../assets/grootes.jpg";

const Latest = () => {
  return (
     <div className="max-w-7xl mx-auto  mt-10 items-center justify-center  overflow-hidden">
      <h2 className="font-semibold text-5xl">Lastest blog</h2>
      <hr className="w-12 border-b-4 border-red-500 mx-auto mt-3  rounded-2xl font-extrabold"></hr>
      <div className=" mt-5 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
         <img className="w-96 rounded-2xl mx-auto" src={Images1} alt="clothes" />
         <img className="w-96 rounded-2xl mx-auto" src={Images2} alt="human" />
         <img className="w-96 h-63 rounded-2xl mx-auto" src={Images3} alt="fair" />
      </div>
     </div>
  );
};

export default Latest;

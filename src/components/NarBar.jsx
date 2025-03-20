
const NavBar = () => {

  return (
    <nav className="bg-ffffff-500 p-5 shadow-lg shadow-white-800/80">
      <div className="max-w-5xl   mt-3.5 mx-auto">
      <div className="container  flex justify-between items-center">
        <h1 className="text-3xl font-bold ">colo<span className="text-red-500">shop</span></h1>
        <div className=" md:flex space-x-4 font-mono text-[20px]">
          <a href="#" className="">Home</a>
          <a href="#" className="">About</a>
          <a href="#" className="">Services</a>
          <a href="#" className="">Contact</a>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default NavBar;

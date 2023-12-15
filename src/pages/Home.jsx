import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <div className="px-20">
        <div className="container mx-auto flex items-center justify-between">
          <div className="">
            <h6 className="text-lg">
              <em>Are you redy to style your self?</em>
            </h6>
            <h1 className="text-3xl md:text-8xl font-bold">
              Don't <span className="text-orange-500"> wait !</span>{" "}
            </h1>
            <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-orange-500 hover:bg-yellow-700">
              Order Now
            </button>
          </div>

          <img className="h-[600px]" src="/images/abdul.png" alt="pizza" />
        </div>
      </div>
      <div className="pb-24">
        <Products />
      </div>
    </>
  );
};

export default Home;

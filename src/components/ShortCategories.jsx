import { Button } from "@relume_io/relume-ui";
import Clothing from '../assets/Clothing.png';
import HomeAppliances from '../assets/HomeAppliances.jpeg';
import Electronics from '../assets/Electronics.jpeg';
import Card from "./Card";
import { useNavigate } from "react-router-dom";

export function ShortCategories() {
  const navigate = useNavigate();
  const handleButtonClick = (e) => {
    e.preventDefault();
    navigate('/categories');
  }
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-r from-blue-300 to-purple-200">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold md:mb-4">Discover</p>
              <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
                Explore Our Diverse Product Categories
              </h2>
            </div>
            <div>
              <p className="md:text-md">
                At Velora, we offer a wide range of products tailored to meet
                your needs. From cutting-edge electronics to the latest fashion
                trends, our categories are designed to enhance your lifestyle.
                Dive into our collection and find exactly what you're looking
                for.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <Card className="bg-white rounded-2xl border border-gray-200 shadow-md transition transform hover:shadow-xl hover:-translate-y-2 hover:border-gray-400 p-4">
              <div className="rb-5 mb-5 md:mb-6 cursor-pointer" onClick={() => navigate('/categories/3')}>
                <img
                  src={Electronics}
                  alt="Relume logo"
                  className="size-24"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Electronics That Elevate Your Experience
              </h3>
              <p>Discover the latest gadgets and tech innovations.</p>
            </Card>
            <Card className="bg-white rounded-2xl border border-gray-200 shadow-md transition transform hover:shadow-xl hover:-translate-y-2 hover:border-gray-400 p-4">
              <div className="rb-5 mb-5 md:mb-6 cursor-pointer" onClick={() => navigate('/categories/5')}>
                <img
                  src={Clothing}
                  alt="Relume logo"
                  className="size-24"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Fashion That Defines Your Unique Style
              </h3>
              <p>Stay trendy with our curated fashion selections.</p>
            </Card>
            <Card className="bg-white rounded-2xl border border-gray-200 shadow-md transition transform hover:shadow-xl hover:-translate-y-2 hover:border-gray-400 p-4">
              <div className="rb-5 mb-5 md:mb-6 cursor-pointer" onClick={() => navigate('/categories/4')}>
                <img
                  src={HomeAppliances}
                  alt="Relume logo"
                  className="size-24"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Affordable Home Appliances for Modern Living
              </h3>
              <p>Upgrade your home with our efficient appliances.</p>
            </Card>
          </div>
          <div className="mt-10 flex justify-center items-center gap-4 md:mt-14 lg:mt-16 w-full">
            <Button className="bg-blue-500 hover:bg-blue-600" onClick={handleButtonClick}>View All</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

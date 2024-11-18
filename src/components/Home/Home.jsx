import { useEffect, useRef } from 'react';
import banner from '../../assets/banner.jpg';
import Gadgets from '../Gadgets/Gadgets';

const Home = () => {
  const gadgetsRef = useRef(null);
  useEffect(() => {
    document.title = "Home - Gadget Heaven";
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  
  const scrollToGadgets = () => {
    if (gadgetsRef.current) {
      gadgetsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="w-[95%] mt-[-90px] mx-auto min-h-[580px] md:min-h-[650px] lg:min-h-[694px] bg-[#9538E2] rounded-3xl p-3 border-2 flex items-center justify-center text-center flex-col gap-8">
        <h1 className="text-xl lg:text-5xl font-bold text-white mt-20 md:mt-0 lg:mt-[-100px] w-[65%]">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="text-white text-xs md:text-base w-[60%] mx-auto">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button
          className="mb-28 btn bg-white text-[#9538E2] text-sm md:text-base font-bold lg:text-lg rounded-3xl"
          onClick={scrollToGadgets} 
        >
          Shop Now
        </button>
      </section>

      <section className="mt-[-100px] md:mt-[-200px] lg:mt-[-280px]">
        <div className="w-[75%] lg:w-[60%] h-52 md:h-[430px] lg:h-[560px] mx-auto border-2 p-3 md:p-6 border-white rounded-[32px]">
          <img className="w-full h-full rounded-3xl object-cover lg:object-fill" src={banner} alt="Banner" />
        </div>
      </section>

      <section className="w-11/12 lg:w-3/4 mx-auto text-center my-20" ref={gadgetsRef}>
        <Gadgets />
      </section>
    </>
  );
};

export default Home;
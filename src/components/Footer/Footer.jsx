const Footer = () => {
  return (
    <>
      <section className="mx-auto py-14 mt-28 bg-white">
        <div className="flex flex-col text-center my-5">
          <h3 className="text-2xl font-bold md:text-4xl opacity-85">
            Gadget Heaven
          </h3>
          <p className="text-sm md:text-base w-[75%] mx-auto py-4 opacity-85">
            Leading the way in cutting-edge technology and innovation.
          </p>

          <div className="divider w-[75%] mx-auto text-[#09080F1A]"></div>
        </div>
        <footer className="md:w-3/4 mx-auto footer bg-white md: text-black md:place-items-center p-10 md:items-start">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link text-[#09080F99] link-hover">Branding</a>
            <a className="link text-[#09080F99] link-hover">Design</a>
            <a className="link text-[#09080F99] link-hover">Marketing</a>
            <a className="link text-[#09080F99] link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link text-[#09080F99] link-hover">About us</a>
            <a className="link text-[#09080F99] link-hover">Contact</a>
            <a className="link text-[#09080F99] link-hover">Jobs</a>
            <a className="link text-[#09080F99] link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link text-[#09080F99] link-hover">Terms of use</a>
            <a className="link text-[#09080F99] link-hover">Privacy policy</a>
            <a className="link text-[#09080F99] link-hover">Cookie policy</a>
          </nav>
        </footer>
      </section>
    </>
  );
};

export default Footer;

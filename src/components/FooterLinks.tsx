const FooterLinks = ({ title }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl leading-[30px] font-bold mb-6 text-zinc-300/80">
        {title}
      </h2>
      <ul className="flex flex-col gap-4 text-zinc-400/80 cursor-pointer">
        <li className="text-sm hover:-translate-y-1 hover:text-yellowColor transition-all duration-300 ">
          Doctors
        </li>
        <li className="text-sm hover:-translate-y-1 hover:text-yellowColor transition-all duration-300 ">
          OurServices
        </li>
        <li className="text-sm hover:-translate-y-1 hover:text-yellowColor transition-all duration-300 ">
          Insurance
        </li>
        <li className="text-sm hover:-translate-y-1 hover:text-yellowColor transition-all duration-300 ">
          Surgery
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;

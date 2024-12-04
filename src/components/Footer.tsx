import Image from "next/image";
import logo from "../assets/images/logo-jms.png";
import FooterLinks from "./FooterLinks";

const links = [
  {
    _id: "001",
    title: "Quick Links",
    links: ["Doctors", "Services", "Surgery", "Insurance"],
  },
  {
    _id: "002",
    title: "I want to:",
    links: ["Book Appointment", "Visit Us", "Contribute", "Create Account"],
  },
  {
    _id: "003",
    title: "Support",
    links: ["Contacta", "Help", "Services", "FAQs"],
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900/90">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px] p-4">
          <div className="logo p-4">
            <Image src={logo} alt="image" width={150} />
            <p className="text-zinc-400/80 text-base mt-2">
              Copyright © {year} Footprint Arts.{" "}
            </p>
            <div className="centered-row gap-4 mt-4">
              <div className="w-10 h-10 bg-zinc-400 rounded-full"></div>
              <div className="w-10 h-10 bg-zinc-400 rounded-full"></div>
              <div className="w-10 h-10 bg-zinc-400 rounded-full"></div>
              <div className="w-10 h-10 bg-zinc-400 rounded-full"></div>
            </div>
          </div>
          {/* Links */}
          {links.map(({ _id, title }) => (
            <FooterLinks key={_id} title={title} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

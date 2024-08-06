import React from "react";
import { Link } from "react-router-dom";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { IoLogoWhatsapp, IoMdCall } from "react-icons/io";

export default function Footer() {
   const year = new Date().getFullYear()
  return (
    <div className="bg-zinc-100">
      <footer className="max-w-[90%] mx-auto text-foreground p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 w-full md:w-auto md:mb-0">
            <h2 className="text-xl font-light">AeroWeb Solutions</h2>
            <p className="text-gray-500">
              Trusted in more than 42 customers.<br/>
              Follow us on social media.
            </p>
            <div className="flex space-x-4 gap-2 mt-2">
              <Link to="#" className="text-muted-foreground hover:text-primary">
                <IoLogoWhatsapp size={30}/>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary">
                <FiInstagram size={30}/>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary">
                <FiLinkedin size={30}/>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary">
                <IoMdCall size={30}/>
              </Link>
            </div>
          </div>

          <div className="mb-6 md:mb-0">
            <ul className="list-none flex flex-col lg:flex-row md:flex-row gap-4 p-0">
              <li>
                <Link to="/service" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/meet" className="text-muted-foreground hover:text-primary">
                  Meet With Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-auto flex flex-col items-start md:items-center">
            <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Your email here.."
                className="border border-border rounded-l-md p-2 w-full md:w-auto flex-grow"
              />
              <button className="bg-gray-300 text-primary-foreground hover:bg-primary/80 rounded-r-md p-2 w-full md:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 text-muted-foreground">
          © AeroWeb Solutions {year}, All rights reserved.
        </div>

        <div className="flex justify-center space-x-4 mt-4 text-muted-foreground">
          <Link to="/">Terms</Link>
          <Link to="/">Privacy</Link>
          <Link to="/">Cookies</Link>
        </div>
      </footer>
    </div>
  );
}

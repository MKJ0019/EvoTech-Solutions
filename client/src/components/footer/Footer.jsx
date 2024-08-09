import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { IoLogoWhatsapp, IoMdCall } from "react-icons/io";
import axios from "axios";
import { toast } from "react-toastify";

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    try {
      if (email === "") {
        toast.error("Email cannot be empty.");
        return;
      }
      if (!email.includes("@")) {
        toast.error("Please enter a valid email address.");
        return;
      }

      setLoading(true);
      const data = {
        user_id: "DVqy7KTmBnMafnm2o",
        service_id: "service_k4h1r6h",
        template_id: "template_ivim1a7",
        template_params: {
          to_name: "AeroWeb Labs",
          from_email: email,
        },
      };

      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
      toast.success("Subscription successful!");
      setEmail(""); // Clear email input
    } catch (e) {
      console.error("Error sending email:", e);
      toast.error("Failed to subscribe. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="bg-zinc-100">
      <footer className="max-w-[90%] mx-auto text-foreground p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 w-full md:w-auto md:mb-0">
            <Link to="/">
              <h2 className="text-xl font-light">AeroWeb Labs</h2>
            </Link>
            <p className="text-gray-500">
              Trusted in more than 72 customers.
              <br />
              Follow us on social media.
            </p>
            <div className="flex space-x-4 gap-2 mt-2">
              <Link to="https://wa.me/+919508359061" target="_blank" className="text-muted-foreground hover:text-primary">
                <IoLogoWhatsapp size={30} />
              </Link>
              <Link to="https://www.instagram.com/aeroweblabs" target="_blank" className="text-muted-foreground hover:text-primary">
                <FiInstagram size={30} />
              </Link>
              <Link to="https://www.linkedin.com/company/aeroweblabs" target="_blank" className="text-muted-foreground hover:text-primary">
                <FiLinkedin size={30} />
              </Link>
              <Link to="tel:9508359061" className="text-muted-foreground hover:text-primary">
                <IoMdCall size={30} />
              </Link>
            </div>
          </div>

          <div className="mb-6 md:mb-0">
            <ul className="list-none flex flex-col lg:flex-row md:flex-row gap-4 p-0">
              <li>
                <Link
                  to="/service"
                  className="text-muted-foreground hover:text-primary"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  to="/meet"
                  className="text-muted-foreground hover:text-primary"
                >
                  Meet With Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* <div className="w-full md:w-auto flex flex-col items-start md:items-center">
            <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
            <div className="flex w-full">
              <TextField
                type="email"
                placeholder="Your email here..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                size="small"
                fullWidth
                className="border border-border rounded-l-md p-2"
              />
              <Button
                onClick={handleSubscribe}
                variant="contained"
                color="primary"
                disabled={loading}
                className="rounded-r-md p-2"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
          </div> */}
          <div class="w-full md:w-auto flex items-start md:items-center">
            <div class="relative w-full">
              <label
                for="email"
                class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email address
              </label>
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 lg:rounded-l-lg border border-gray-300 sm:rounded-none rounded-l-lg focus:ring-primary-500 "
                placeholder="Enter your email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                value={email}
                required=""
              />
            </div>
            <div>
              <button
                type="submit"
                onClick={handleSubscribe}
                disabled={loading}
                class="py-3 px-5 w-full text-sm font-medium text-center text-black bg-slate-300 lg:rounded-r-lg border cursor-pointer rounded-r-lg"
              >
                {loading ? "Subscribing..." : "Subscribe"}
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

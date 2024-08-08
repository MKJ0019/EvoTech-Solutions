import React from "react";
import About from '../../../assets/bg-img/About.png'

export default function FirstPage() {
  return (
    <div>
      <div className="2xl:container lg:py-16 mt-10 mx-auto lg:px-[7%] md:py-12 md:px-6 py-9 px-7">
        <div className="flex pt-10 lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
          <div className="w-full lg:w-6/12">
            <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">
              Empowering Your Online Presence Discover the{" "}
              <span className="text-blue-700"> AeroWeb Solutions</span> Difference
              Today!
            </h2>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6 ml-0 lg:ml-1">
              {" "}
               AeroWeb Solutions is more than a digital agency; we're your
              partner in online success. With a commitment to excellence and a
              passion for innovation, we offer a full suite of services designed
              to elevate your brand and expand your reach. Our team of experts
              brings a wealth of experience and a fresh perspective to every
              project, ensuring that your vision is not only realized but
              exceeded. From stunning websites to engaging content, we have the
              tools and the talent to take your online presence to new heights.
              Whether you're a small startup or an established business,  AeroWeb
              Solutions is here to help you thrive in the digital world. Join us
              on this exciting journey and let's make your online dreams a
              reality.
            </p>
          </div>
          <img className="object-contain -p-10" src={About} alt="" />
        </div>

        <div className="relative mt-24">
          <div className="grid sm:grid-cols-3 place-items-center grid-cols-2 sm:gap-8 gap-4">
            <div className="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg1.svg"
                alt="flag"
              />
            </div>

            <img
              className="z-20"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg2.svg"
              alt="note"
            />

            <img
              className="z-20 sm:block hidden"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg"
              alt="users"
            />
          </div>
          {/* <hr className="z-0 absolute top-2/4 w-full bg-gray-200"/> */}
        </div>

        {/* <style>
                body.dark-theme .leading-5{
                    color: white;
                }
            </style> */}
        <div className="grid lg:grid-cols-3 grid-cols-2 text-center sm:gap-8 gap-4">
          <div>
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
              Founded
            </p>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6">
              {" "}
              Founded by Mayank, who leads  AeroWeb with vision and innovation,
              ensuring exceptional digital solutions.
            </p>
          </div>
          <div>
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
              Crafted 162 Websites
            </p>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6">
               AeroWeb Solutions has successfully crafted over 162 websites,
              delivering exceptional digital solutions for diverse clients
              worldwide.
            </p>
          </div>
          <div className="sm:block hidden">
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
              260 Clients
            </p>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6">
               AeroWeb Solutions has proudly served over 260 clients, delivering
              top-notch digital solutions tailored to their unique needs and
              driving their online success.
            </p>
          </div>
        </div>
        <div className="sm:hidden block relative mt-8">
          <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
            <img
              className="z-20"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg"
              alt="user"
            />
          </div>
          {/* <hr className="z-10 absolute top-2/4 w-full bg-gray-200" /> */}
        </div>
        <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <div>
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
              260 Clients
            </p>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6">
               AeroWeb Solutions has proudly served over 260 clients, delivering
              top-notch digital solutions tailored to their unique needs and
              driving their online success.
            </p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
          <div className="w-full lg:w-6/12">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
              Our <span className="text-blue-700">Mission</span>
            </h2>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6 w-full lg:w-10/12 xl:w-9/12">
              At  AeroWeb Solutions, our mission is to empower businesses and
              startups with innovative digital solutions that drive growth and
              success. We believe in the transformative power of technology and
              design, and we are committed to helping our clients harness this
              power to achieve their goals. Our team of experts is dedicated to
              delivering exceptional results, combining creativity, technical
              expertise, and strategic thinking to create impactful online
              experiences. We strive to understand our clients' unique needs and
              objectives, working closely with them to develop tailored
              solutions that exceed expectations.
            </p>
            <p className="font-normal text-base leading-6 text-gray-600 w-full lg:w-10/12 xl:w-9/12 mt-10">
              With a focus on quality, innovation, and customer satisfaction, we
              aim to be a trusted partner for businesses looking to thrive in
              the digital world. We are driven by a passion for excellence and a
              commitment to helping our clients succeed.
            </p>
          </div>

          <div className="w-full lg:w-6/12 icol">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
              {/* <!-- Team Card --> */}
              <div className="flex p-4 shadow-md">
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                    Best Team
                  </p>
                  <p className="mt-2 font-normal text-base leading-6 text-gray-600">
                    Our diverse, skilled team is dedicated to crafting
                    exceptional digital solutions for every client.
                  </p>
                </div>
              </div>

              {/* <!-- Board Card --> */}
              <div className="flex p-4 shadow-md">
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                    Building Startups
                  </p>
                  <p className="mt-2 font-normal text-base leading-6 text-gray-600">
                    Empowering startups through innovative digital solutions
                    that drive growth, engagement, and success in the market.
                  </p>
                </div>
              </div>

              {/* <!-- Press Card --> */}
              <div className="flex p-4 shadow-md">
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                    24/7 Customer Support
                  </p>
                  <p className="mt-2 font-normal text-base leading-6 text-gray-600">
                    Our customer support is top-notch, ensuring that every
                    client receives personalized, attentive service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

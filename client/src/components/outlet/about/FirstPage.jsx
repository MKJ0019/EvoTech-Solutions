import React from "react";

export default function FirstPage() {
  return (
    <div>
      <div class="2xl:container 2xl:mx-auto lg:py-16 max-w-7xl mx-auto lg:px-12 md:py-12 md:px-6 py-9 px-7">
        <div class="flex pt-10 lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
          <div class="w-full lg:w-6/12">
            <h2 class="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">
              Empowering Your Online Presence Discover the{" "}
              <span class="text-blue-700">EvoTech Solutions</span> Difference
              Today!
            </h2>
            <p class="font-normal text-base leading-6 text-gray-600 mt-6 ml-0 lg:ml-1">
              {" "}
              EvoTech Solutions is more than a digital agency; we're your
              partner in online success. With a commitment to excellence and a
              passion for innovation, we offer a full suite of services designed
              to elevate your brand and expand your reach. Our team of experts
              brings a wealth of experience and a fresh perspective to every
              project, ensuring that your vision is not only realized but
              exceeded. From stunning websites to engaging content, we have the
              tools and the talent to take your online presence to new heights.
              Whether you're a small startup or an established business, EvoTech
              Solutions is here to help you thrive in the digital world. Join us
              on this exciting journey and let's make your online dreams a
              reality.
            </p>
          </div>
        </div>

        <div class="relative mt-24">
          <div class="grid sm:grid-cols-3 place-items-center grid-cols-2 sm:gap-8 gap-4">
            <div class="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg1.svg"
                alt="flag"
              />
            </div>

            <img
              class="z-20"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg2.svg"
              alt="note"
            />

            <img
              class="z-20 sm:block hidden"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg"
              alt="users"
            />
          </div>
          {/* <hr class="z-0 absolute top-2/4 w-full bg-gray-200"/> */}
        </div>

        {/* <style>
                body.dark-theme .leading-5{
                    color: white;
                }
            </style> */}
        <div class="grid sm:grid-cols-3 grid-cols-2 text-center sm:gap-8 gap-4">
          <div>
            <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
              Founded
            </p>
            <p class="font-normal text-base leading-6 text-gray-600 mt-6">
              {" "}
              Founded by Mayank, who leads EvoTech with vision and innovation,
              ensuring exceptional digital solutions.
            </p>
          </div>
          <div>
            <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
              Crafted 162 Websites
            </p>
            <p class="font-normal text-base leading-6 text-gray-600 mt-6">
              EvoTech Solutions has successfully crafted over 162 websites,
              delivering exceptional digital solutions for diverse clients
              worldwide.
            </p>
          </div>
          <div class="sm:block hidden">
            <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
              260 Clients
            </p>
            <p class="font-normal text-base leading-6 text-gray-600 mt-6">
              EvoTech Solutions has proudly served over 260 clients, delivering
              top-notch digital solutions tailored to their unique needs and
              driving their online success.
            </p>
          </div>
        </div>
        <div class="sm:hidden block relative mt-8">
          <div class="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
            <img
              class="z-20"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg"
              alt="user"
            />
          </div>
          <hr class="z-10 absolute top-2/4 w-full bg-gray-200" />
        </div>
        <div class="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <div>
            <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
              260 Clients
            </p>
            <p class="font-normal text-base leading-6 text-gray-600 mt-6">
              EvoTech Solutions has proudly served over 260 clients, delivering
              top-notch digital solutions tailored to their unique needs and
              driving their online success.
            </p>
          </div>
        </div>

        {/* <style>
                body.dark-theme .leading-7{
                    color: white;
                }
            </style> */}

        <div class="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
          <div class="w-full lg:w-6/12">
            <h2 class="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
              Our <span class="text-blue-700">Mission</span>
            </h2>
            <p class="font-normal text-base leading-6 text-gray-600 mt-6 w-full lg:w-10/12 xl:w-9/12">
              At EvoTech Solutions, our mission is to empower businesses and
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
            <p class="font-normal text-base leading-6 text-gray-600 w-full lg:w-10/12 xl:w-9/12 mt-10">
              With a focus on quality, innovation, and customer satisfaction, we
              aim to be a trusted partner for businesses looking to thrive in
              the digital world. We are driven by a passion for excellence and a
              commitment to helping our clients succeed.
            </p>
          </div>

          {/* <style>
                    body.dark-theme .icol i{
                       background-color: #111827;
                       color: white;
                       padding: 8px;
                       border-radius: 50%;
                    }
                </style> */}
          <div class="w-full lg:w-6/12 icol">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
              {/* <!-- Team Card --> */}
              <div class="flex p-4 shadow-md">
                <div class="mr-6">
                  <i class="ri-team-line text-3xl"></i>
                </div>
                <div class="">
                  <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                    Best Team
                  </p>
                  <p class="mt-2 font-normal text-base leading-6 text-gray-600">
                    Our diverse, skilled team is dedicated to crafting
                    exceptional digital solutions for every client.
                  </p>
                </div>
              </div>

              {/* <!-- Board Card --> */}
              <div class="flex p-4 shadow-md">
                <div class="mr-6">
                  <i class="ri-building-2-line text-3xl"></i>
                </div>
                <div class="">
                  <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                    Building Startups
                  </p>
                  <p class="mt-2 font-normal text-base leading-6 text-gray-600">
                    Empowering startups through innovative digital solutions
                    that drive growth, engagement, and success in the market.
                  </p>
                </div>
              </div>

              {/* <!-- Press Card --> */}
              <div class="flex p-4 shadow-md">
                <div class="mr-6">
                  <i class="ri-mail-line text-3xl"></i>
                </div>
                <div class="">
                  <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                    24/7 Customer Support
                  </p>
                  <p class="mt-2 font-normal text-base leading-6 text-gray-600">
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

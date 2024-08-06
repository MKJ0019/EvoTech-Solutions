import React from "react";

export default function Contact() {
  return (
    <div>
      <section
        className="px-2 pt-[100px] py-12 lg:px-12 w-full"
      >
        <div className="container mx-auto mt-3 lg:mt-7 w-full">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            {/* Contact Information */}
            <div className="w-full md:w-1/2 lg:w-1/3 space-y-4 px-6 lg:px-0">
              <h2 className="text-3xl md:text-2xl lg:text-3xl font-bold text-blue-600">
                Contact Information
              </h2>
              <p className="text-lg">
                Feel free to reach out to us via any of the methods below:
              </p>

              <div>
                <h3 className="text-xl font-semibold">Address:</h3>
                <p>Kharar Chandigarh, Punjab India </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Email:</h3>
                <p>
                  <a href="mailto:info@devndez.com" className="text-blue-500">
                    info@aerotech.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Phone:</h3>
                <p>
                  <a href="tel:+91 8287758779" className="text-blue-500">
                    +91 9508359061
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full md:w-[69%] p-6 rounded-lg -mt-0 md:-mt-10 lg:-mt-10">
              <form className="space-y-4">
                <input type="hidden" name="access_key" />

                <h2 className="text-blue-600 text-2xl font-semibold">
                  Get in touch
                </h2>
                <h1 className="text-3xl font-bold">
                  Let’s Chat 👋 Consultation Is Free!
                </h1>
                <p className="text-lg text-gray-500 mb-7">
                  Have questions or feedback? We're here to help. Send us a
                  message, and we'll respond within 30 minutes.
                </p>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                    className="mt-1 p-2 block w-full border border-gray-200 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    className="mt-1 p-2 block w-full border border-gray-200 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    required
                    className="mt-1 p-2 block w-full border border-gray-200 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  ></textarea>
                </div>

                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                />

                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div
            className="mt-12 px-6 lg:px-0"
            style={{ fontFamily: "Archivo, sans-serif" }}
          >
            <h3 className="text-2xl font-bold mb-4">Find Us on the Map</h3>
            <div className="h-64 w-full rounded-lg shadow-md overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=Kharar%20chandigarh%20Punjab+(Your%20Business%20Name)&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

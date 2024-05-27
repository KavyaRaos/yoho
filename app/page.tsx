"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="">
        {/* part 1 */}
        <div className="relative">
          <div className="absolute">
            {/* Navbar */}
            <div className="grid grid-flow-col justify-between w-screen">
              {/* logo area */}
              <motion.div
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                className="p-6"
              >
                <Image
                  src="/images/logo.png"
                  alt=""
                  className=""
                  width={200}
                  height={200}
                />
              </motion.div>
              {/* Home page options  */}
              <div className="grid grid-flow-col">
                <div className="grid grid-flow-col space-x-28 text-xl font-medium place-content-center">
                  <div className=" font-medium">Home</div>
                  <div className=" font-medium">Service</div>
                  <div className=" font-medium">Blog</div>
                  <div className=" font-medium">Contact</div>
                </div>
              </div>
              <div className="h-1 w-1"></div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "linear" }}
            className="absolute inset-0 flex justify-center items-center"
          >
            <div className="grid grid-flow-col justify-center ">
              <div className="grid grid-flow-row space-y-10 text-center p-16">
                <div className="text-xl">WE ARE APPLICA</div>
                <div className="text-5xl font-semibold ">
                  Worlds Leading App Growth Partner
                </div>
                <div className="grid grid-flow-col rounded-full bg-white m-96 p-2 items-center place-content-between">
                  <div className="text-gray-500 text-lg mt-2 ml-2 px-48 py-2">
                    Type your app name or website
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className=""
                  >
                    <Image
                      src="/icons/search.png"
                      alt=""
                      className=" m-1"
                      width={40}
                      height={40}
                    />
                  </motion.div>
                </div>
                <div className="font-light text-md">
                  {" "}
                  We are solving the toughest problems for Best App Products
                </div>
              </div>
            </div>
          </motion.div>
          <div>
            <Image
              src="/images/pg1.png"
              alt=""
              className=""
              width={2000}
              height={1500}
            />
          </div>
        </div>

        {/* part 2 */}
        <div className=" container mx-auto">
          <div className=" grid-flow-col justify-center mt-24">
            <Image
              src="/images/pg2.png"
              alt=""
              className=" "
              width={2000}
              height={2000}
            />
          </div>
        </div>

        {/* part 3 */}
        <div className="container mx-auto mt-28">
          <div className="grid grid-flow-row space-y-8">
            <div className="font-bold text-5xl grid grid-flow-col justify-start gap-3">
              The Perfect solution for{" "}
              <div className="text-blue-700">CMOs </div>
            </div>
            <div className="text-xl">
              {" "}
              Unlock Your Apps Potential with our data driven growth and best
              industry Knowledge.
            </div>
          </div>
          <div className="grid grid-flow-col justify-center mt-24">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className=" rounded-2xl w-96 m-6 h-44 bg-white shadow-lg"
            >
              <div className="space-y-10 p-10">
                <div className="text-blue-600 text-5xl font-bold">290</div>
                <div className=" text-lg">A/B tests conducted</div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className=" rounded-2xl w-auto m-6 h-44 bg-white shadow-lg"
            >
              <div className="space-y-10 p-10">
                <div className="text-blue-600 text-5xl font-bold">26.4%</div>
                <div className=" text-lg">Average 1st-month Revenue growth</div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className=" rounded-2xl w-96 m-6 h-44 bg-white shadow-lg"
            >
              <div className="space-y-10 p-10">
                <div className="text-blue-600 text-5xl font-bold">68%</div>
                <div className=" text-lg">Sucess rate</div>
              </div>
            </motion.div>
          </div>
          <div className="grid grid-flow-col justify-center mt-4">
            <motion.div
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              whileTap={{ scale: 0.8 }}
              className="  bg-blue-800 w-72 py-6 rounded-full shadow-xl  "
            >
              <div className="text-white text-center">
                Explore Partnership Opportunities
              </div>
            </motion.div>
          </div>
        </div>
        {/* part 4 */}

        {/* part 5 */}
        <div className="container mx-auto mt-28">
          <div className="grid grid-flow-col justify-center">
            <div className="font-bold text-5xl">Scale Your Business Easily</div>
          </div>
        </div>

        {/* part 6 */}
        <div className="container mx-auto ">
          <div className="grid grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="grid grid-flow-col mt-16"
            >
              <div className="bg-white shadow-lg w-96 h-96 rounded-3xl">
                <div>
                  <Image
                    src="/icons/icon1.png"
                    alt=""
                    className="m-10"
                    width={90}
                    height={90}
                  />
                </div>
                <div className="font-semibold text-4xl ml-10">
                  Growth &amp; Monetization Strategy
                </div>
                <div className="grid grid-flow-col ml-10">
                  <div className="mt-6  text-blue-400">Enhance your growth</div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={(e) => {}}
                    onHoverEnd={(e) => {}}
                  >
                    <Image
                      src="/icons/arrow.png"
                      alt=""
                      className="m-6"
                      width={30}
                      height={30}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="grid grid-flow-col mt-16"
            >
              <div className="bg-white shadow-lg w-96 h-96 rounded-3xl">
                <div>
                  <Image
                    src="/icons/icon2.png"
                    alt=""
                    className="m-10"
                    width={90}
                    height={90}
                  />
                </div>
                <div className="font-semibold text-4xl ml-10">
                  Retention &amp; Engagement
                </div>
                <div className="grid grid-flow-col ml-10">
                  <div className="mt-16  text-blue-400"> Grow matrics</div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={(e) => {}}
                    onHoverEnd={(e) => {}}
                  >
                    <Image
                      src="/icons/arrow.png"
                      alt=""
                      className=" mt-14"
                      width={30}
                      height={30}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="grid grid-flow-col mt-16"
            >
              <div className="bg-white shadow-lg w-96 h-96 rounded-3xl">
                <div>
                  <Image
                    src="/icons/icon3.png"
                    alt=""
                    className="m-10"
                    width={90}
                    height={90}
                  />
                </div>
                <div className="font-semibold text-4xl ml-10">
                  Product Design
                </div>
                <div className="grid grid-flow-col ml-10">
                  <div className=" mt-20  text-blue-400">
                    Enhance UI &amp; UX
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={(e) => {}}
                    onHoverEnd={(e) => {}}
                  >
                    <Image
                      src="/icons/arrow.png"
                      alt=""
                      className="mt-20 "
                      width={30}
                      height={30}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="grid grid-flow-col mt-16"
            >
              <div className="bg-white shadow-lg w-96 h-96 rounded-3xl">
                <div>
                  <Image
                    src="/icons/icon4.png"
                    alt=""
                    className="m-10"
                    width={90}
                    height={90}
                  />
                </div>
                <div className="font-semibold text-4xl ml-10">
                  Performance Marketing
                </div>
                <div className="grid grid-flow-col ml-10">
                  <div className="mt-12  text-blue-400">Improve AI</div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={(e) => {}}
                    onHoverEnd={(e) => {}}
                  >
                    <Image
                      src="/icons/arrow.png"
                      alt=""
                      className="m-10"
                      width={30}
                      height={30}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="grid grid-flow-col mt-16"
            >
              <div className="bg-white shadow-lg w-96 h-96 rounded-3xl">
                <div>
                  <Image
                    src="/icons/icon5.png"
                    alt=""
                    className="m-10"
                    width={90}
                    height={90}
                  />
                </div>
                <div className="font-semibold text-4xl ml-10">
                  App Store Optimaization
                </div>
                <div className="grid grid-flow-col ml-10">
                  <div className="mt-12  text-blue-400">Boost ratings</div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={(e) => {}}
                    onHoverEnd={(e) => {}}
                  >
                    <Image
                      src="/icons/arrow.png"
                      alt=""
                      className="m-10"
                      width={30}
                      height={30}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="grid grid-flow-col mt-16"
            >
              <div className="bg-white shadow-lg w-96 h-96 rounded-3xl">
                <div>
                  <Image
                    src="/icons/icon6.png"
                    alt=""
                    className="m-10"
                    width={90}
                    height={90}
                  />
                </div>
                <div className="font-semibold text-4xl ml-10">
                  Creative Production
                </div>
                <div className="grid grid-flow-col ml-10">
                  <div className="mt-12  text-blue-400">Drive connections</div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={(e) => {}}
                    onHoverEnd={(e) => {}}
                  >
                    <Image
                      src="/icons/arrow.png"
                      alt=""
                      className="m-10"
                      width={30}
                      height={30}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* part 7 */}
        <div className="container mx-auto mt-28">
          <div className="grid grid-flow-row space-y-10">
            <div className="text-5xl font-bold">
              Grow your Products in five steps
            </div>
            <div className="grid grid-flow-col">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="  bg-blue-800 w-72 py-6 rounded-full shadow-xl  "
              >
                <div className="text-white text-center">
                  Lets Start a Projext
                </div>
              </motion.div>
            </div>
            <div className=" text-lg">
              Let us nourish your dreams and handle your douts
            </div>
            <div className="span-row-2">
              <div className="grid grid-cols-3">
                {/* card 1 */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="grid grid-flow-col mt-16"
                >
                  <div className="bg-white shadow-lg w-96 h-fit rounded-3xl">
                    <div>
                      <Image
                        src="/images/audit.jpg"
                        alt=""
                        className="m-10"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="font-semibold text-2xl ml-10">Audits</div>
                    <div className="grid grid-flow-col m-10">
                      <div className="font-normal text-start ">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit.cumque dolore maxime, accusantium eveniet ad.
                      </div>
                    </div>
                  </div>
                </motion.div>
                {/* card 2 */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="grid grid-flow-col mt-16"
                >
                  <div className="bg-white shadow-lg w-96 h-fit rounded-3xl">
                    <div>
                      <Image
                        src="/images/ideas.jpg"
                        alt=""
                        className="m-10"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="font-semibold text-2xl ml-10">
                      Proposals &amp; Ideas
                    </div>
                    <div className="grid grid-flow-col m-10">
                      <div className="font-normal text-start ">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit.cumque dolore maxime, accusantium eveniet ad.
                      </div>
                    </div>
                  </div>
                </motion.div>
                {/* card 3 */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="grid grid-flow-col mt-16"
                >
                  <div className="bg-white shadow-lg w-96 h-fit rounded-3xl">
                    <div>
                      <Image
                        src="/images/design.jpg"
                        alt=""
                        className="m-10"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="font-semibold text-2xl ml-10">Design</div>
                    <div className="grid grid-flow-col m-10">
                      <div className="font-normal text-start ">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit.cumque dolore maxime, accusantium eveniet ad.
                      </div>
                    </div>
                  </div>
                </motion.div>
                {/* card 4 */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="grid grid-flow-col mt-16"
                >
                  <div className="bg-white shadow-lg w-96 h-fit rounded-3xl">
                    <div>
                      <Image
                        src="/images/test.jpg"
                        alt=""
                        className="m-10"
                        width={240}
                        height={240}
                      />
                    </div>
                    <div className="font-semibold text-2xl ml-10">
                      Prototype &amp; Tests
                    </div>
                    <div className="grid grid-flow-col m-10">
                      <div className="font-normal text-start ">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit.cumque dolore maxime, accusantium eveniet ad.
                      </div>
                    </div>
                  </div>
                </motion.div>
                {/* card 5 */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="grid grid-flow-col mt-16"
                >
                  <div className="bg-white shadow-lg w-96 h-fit rounded-3xl">
                    <div>
                      <Image
                        src="/images/analysis.jpg"
                        alt=""
                        className="m-10"
                        width={240}
                        height={240}
                      />
                    </div>
                    <div className="font-semibold text-2xl ml-10">Analysis</div>
                    <div className="grid grid-flow-col m-10">
                      <div className="font-normal text-start ">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit.cumque dolore maxime, accusantium eveniet ad.
                      </div>
                    </div>
                  </div>
                </motion.div>
                {/* card 6 */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="grid grid-flow-col mt-16"
                >
                  <div className="bg-white shadow-lg w-96 h-fit rounded-3xl">
                    <div>
                      <Image
                        src="/images/design.jpg"
                        alt=""
                        className="m-10"
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="font-semibold text-2xl ml-10">Design</div>
                    <div className="grid grid-flow-col m-10">
                      <div className="font-normal text-start ">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit.cumque dolore maxime, accusantium eveniet ad.
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* part 8 */}
        <div className="container mx-auto">
          <div className="font-bold text-5xl m-28 text-center">
            Here is what our customers say
          </div>
          <div className="grid grid-cols-2 gap-8 ">
            <div>
              <Image
                src="/images/testy1.png"
                alt=""
                className=""
                width={800}
                height={800}
              />
            </div>
            <div>
              <Image
                src="/images/testy2.png"
                alt=""
                className=""
                width={800}
                height={800}
              />
            </div>
            <div>
              <Image
                src="/images/testy3.png"
                alt=""
                className=""
                width={800}
                height={800}
              />
            </div>
            <div>
              <Image
                src="/images/testy4.png"
                alt=""
                className=""
                width={800}
                height={800}
              />
            </div>
          </div>
        </div>

        {/* footer */}
        <div className=" bg-blue-100 p-28 mt-28">
          <div className="grid grid-flow-col justify-between">
            {/* logo */}
            <div className="grid grid-flow-row space-y-6">
              <div className="">
                <Image
                  src="/images/logo.png"
                  alt=""
                  className=""
                  width={200}
                  height={200}
                />
              </div>
              <div className="grid grid-flow-col">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image
                    src="/icons/insta.png"
                    alt=""
                    className=""
                    width={50}
                    height={50}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image
                    src="/icons/fb.png"
                    alt=""
                    className=""
                    width={50}
                    height={50}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image
                    src="/icons/tweet.png"
                    alt=""
                    className=""
                    width={50}
                    height={50}
                  />
                </motion.div>
              </div>
            </div>

            <div className="grid grid-flow-row">
              <div className=" font-semibold text-xl ">About</div>
              <h1>Our guide</h1>
              <h1>Blog</h1>
              <h1>Contact Us</h1>
            </div>
            <div className="grid grid-flow-row">
              <div className=" font-semibold text-xl ">Services</div>
              <h1>Growth stratergy</h1>
              <h1>Retention &amp; Engagement</h1>
              <h1>Performance Marketing</h1>
              <h1>App store Optimaization</h1>
            </div>
            <div className="grid grid-flow-row">
              <div className=" font-semibold text-xl ">Others</div>
              <h1>Site map</h1>
              <h1>Terms &amp; conditions</h1>
              <h1>Privacy Policy</h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

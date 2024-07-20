import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/PushpendraProfile.jpg";
import { delay, motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl mx-20"
            >
              Pushpendra Singh
            </motion.h1>
            <motion.span
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl tracking-tight text-transparent mx-20"
            >
              Front-end Developer
            </motion.span>
            <motion.p
              variants={container(1.4)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter mx-20"
            >
              {/*change for left space is mx-20 also in upper span tag */}
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-6">
          {/*Change Padding correctly */}
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              src={profilePic}
              alt="Pushpendra Singh"
              className="max-w-[400px] rounded-full"
            />{" "}
            {/*Changing profile pic size */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

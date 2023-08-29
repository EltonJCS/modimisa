import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import {
  slideAnimation,
  headTextAnimation,
  headContentAnimation,
  headContainerAnimation,
} from "../config/motion";

import { CustomButton } from "../components";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-container"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text drop-shadow-xl">
                A SUA <br className="xl:block hidden" /> CAMISA.
              </h1>
            </motion.div>
            <motion.div
              className="flex flex-col gap-5"
              {...headContentAnimation}
            >
              <p className="max-w-md font-normal text-gray-900 text-base drop-shadow-xl ">
                Crie a sua camisa, única e exclusiva, com uma ferramenta de
                customização 3D. <strong>Libere sua imaginação</strong>
                {""} e defina seu próprio estilo.
              </p>
              <CustomButton
                type="filled"
                title="Customizar"
                customStyles="w-fit px-4 py-2.5 font-bold text-sm hover:drop-shadow-xl"
                handleClick={() => (state.intro = false)}
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;

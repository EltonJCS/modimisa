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
              src="./EJCS-light-logo.png"
              alt="logo"
              className="w-14 h-10 object-container hover:drop-shadow-[0_0_8px_#07060D]"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text drop-shadow-[0_0_4px_rgba(250,250,250,0.25)]">
                A SUA <br className="xl:block hidden" /> CAMISA.
              </h1>
            </motion.div>
            <motion.div
              className="flex flex-col gap-5"
              {...headContentAnimation}
            >
              <p className="max-w-md font-bold text-gray-200 text-lg drop-shadow-[0_0_4px_rgba(0,0,0,1)] ">
                Crie a sua camisa, única e exclusiva, com uma ferramenta de
                customização 3D.{" "}
                <strong className="text-gray-50">Libere sua imaginação</strong>
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

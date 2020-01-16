import React from "react";
import Navbar from "../components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import {yAxisVariants, xAxisVariants } from "../utils/animConfig";

export default () => {
  return (
    <AnimatePresence>
      <div>
        <Navbar style={{ paddingBottom: "20px" }} />
        <div className="wrapper">
          <motion.section
            className="hero"
            initial="exit"
            animate="enter"
            exit="exit"
          >
            <motion.div className="inner" variants={yAxisVariants}>
              <div className="clipper">
                <h1>
                  The <b>Science</b> <br />
                  of
                  <br /> <b>Beauty</b>
                </h1>
              </div>
              <div className="animate-panel">
                <p>
                  SOPRANO™ is the science of contour, curve, and color joined
                  together to shed light on the mystery of individual beauty.
                </p>
                <a href="#" className="read-btn primary">
                  Get SOPRANO™
                </a>
              </div>
            </motion.div>
          </motion.section>

          <motion.section
            className="sidebar"
            initial="exit"
            animate="enter"
            exit="exit"
          >
            <motion.div className="inner" variants={xAxisVariants}>
              <div className="clipper">
                <h2>Featured</h2>
              </div>
              <div className="animate-panel">
                <p>
                  Check out our newest line The Alto™. As we transition into the
                  new year we move into a new era. We've created a carefully
                  formulated nourishing high gloss oils along deep and rich
                  pigments. A new year. A new you.
                </p>
                <a href="#" className="read-btn secondary">
                  Find Out More
                </a>
              </div>
            </motion.div>
          </motion.section>
          <section className="subscribe">
            <div className="inner">
              <div className="clipper">
                <h2>Subscribe</h2>
              </div>
              <div className="animate-panel">
                <p>Stay updated on new products.</p>
                <input type="text" name="email" placeholder="Email Address" />
                <button className="cta">Subscribe</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </AnimatePresence>
  );
};

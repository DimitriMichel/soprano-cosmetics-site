import React from "react";
import "../styles.scss";
import Navbar from "../components/Navbar";

export default () => {
  return (
    <div>
      <Navbar style={{ paddingBottom: "20px" }} />
      <div className="wrapper">
        <section className="hero">
          <div className="inner">
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
          </div>
        </section>

        <section className="sidebar">
          <div className="inner">
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
          </div>
        </section>
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
  );
};

import React from "react";
import Navbar from "../components/Navbar";
import SettingSprayImage from "../public/static/assets/Alto-Setting-Spray.png";
import Moisturizer from "../public/static/assets/forte.png";
import PowderImage from "../public/static/assets/mezzopowder.png";
import SheShampoo from "../public/static/assets/Shampoo-Bottle-Mockup.png";
import Handwash from "../public/static/assets/Handwash-Bottle-Mockup.png";
import Moisture from "../public/static/assets/mezzomoisture.png";

export default () => {
  return (
    <div>
      <Navbar style={{ paddingBottom: "20px" }} />
      <div className="product-wrapper">
        <section className="product-hero-wrapper">
          <div className="product-grid-container">
            <div className="product-grid-item">
              <div className="product-image-wrapper">
                <img
                  className="product-image"
                  src={SettingSprayImage}
                  alt="Setting-Spray"
                />
              </div>
              <h2>Alto™|Setting Spray</h2>
              <p>$11.99</p>
              <div className="product-button-container">
                <button>Find Near Me</button>
              </div>
            </div>
            <div className="product-grid-item">
              <div className="product-image-wrapper">
                <img
                  className="product-image"
                  src={Moisturizer}
                  alt="Forte-Moisturizer"
                />
              </div>
              <h2>Forte™|Isotropic Moisturizer</h2>
              <p>$19.99</p>
              <div className="product-button-container">
                <button>Find Near Me</button>
              </div>
            </div>
            <div className="product-grid-item">
              <div className="product-image-wrapper">
                <img
                  className="product-image"
                  src={PowderImage}
                  alt="Forte-Moisturizer"
                />
              </div>
              <h2>Mezzo™|Isotropy Powder</h2>
              <p>$19.99</p>
              <div className="product-button-container">
                <button>Find Near Me</button>
              </div>
            </div>
            <div className="product-grid-item">
              <div className="product-image-wrapper">
                <img
                  className="product-image"
                  src={SheShampoo}
                  alt="Forte-Moisturizer"
                />
              </div>
              <h2>She™|Shampoo</h2>
              <p>$59.99</p>
              <div className="product-button-container">
                <button>Find Near Me</button>
              </div>
            </div>
            <div className="product-grid-item">
              <div className="product-image-wrapper">
                <img
                  className="product-image"
                  src={Handwash}
                  alt="Forte-Moisturizer"
                />
              </div>
              <h2>OO™|Hand Wash</h2>
              <p>$5.99</p>
              <div className="product-button-container">
                <button>Find Near Me</button>
              </div>
            </div>
            <div className="product-grid-item">
              <div className="product-image-wrapper">
                <img
                  className="product-image"
                  src={Moisture}
                  alt="Forte-Moisturizer"
                />
              </div>
              <h2>Mezzo™|Moisture</h2>
              <p>$9.99</p>
              <div className="product-button-container">
                <button>Find Near Me</button>
              </div>
            </div>
          </div>
        </section>

        <section className="sidebar-products">
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
              <div className="product-button-container">
                <button>Find Near Me</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

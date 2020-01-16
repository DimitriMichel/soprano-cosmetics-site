import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SettingSprayImage from "../public/static/assets/Alto-Setting-Spray.png";
import Moisturizer from "../public/static/assets/forte.png";
import PowderImage from "../public/static/assets/mezzopowder.png";
import SheShampoo from "../public/static/assets/Shampoo-Bottle-Mockup.png";
import Handwash from "../public/static/assets/Handwash-Bottle-Mockup.png";
import Moisture from "../public/static/assets/mezzomoisture.png";
import { AnimatePresence, motion } from "framer-motion";
import { yAxisVariants, xAxisVariants } from "../utils/animConfig";

export default () => {
  // mock database
  const database = [
    {
      name: "Alto™|Setting Spray",
      price: 11.99,
      img: SettingSprayImage,
      alt: "Setting-Spray",
      id: 1
    },
    {
      name: "Forte™ | Isotropic Moisturizer",
      price: 19.99,
      img: Moisturizer,
      alt: "Forte-Moisturizer",
      id: 2
    },
    {
      name: "Mezzo™ | Isotropy Powder",
      price: 19.99,
      img: PowderImage,
      alt: "Mezzo-Powder",
      id: 3
    },
    {
      name: "She™ | Shampoo",
      price: 59.99,
      img: SheShampoo,
      alt: "She-Shampoo",
      id: 4
    },
    {
      name: "OO™ | Hand Wash",
      price: 5.99,
      img: Handwash,
      alt: "OO-Hand-Wash",
      id: 5
    },
    {
      name: "Mezzo™ | Moisture",
      price: 9.99,
      img: Moisture,
      alt: "Mezzo-Moisture",
      id: 6
    }
  ];

  // DOM Element CSS Grid Item for each object in mock database.
  let items = [];
  for (let i = 0; i < database.length; i++) {
    items.push(
      <div className="product-grid-item">
        <div className="product-image-wrapper">
          <img
            className="product-image"
            src={database[i].img}
            alt={database[i].alt}
          />
        </div>
        <h2>{database[i].name}</h2>
        <p>{`$${database[i].price}`}</p>
        <div className="product-button-container">
          <button onClick={() => addToCart(database[i])}>Add To Cart</button>
        </div>
      </div>
    );
  }

  //reload page function
  const refreshPage = () => {
    window.location.reload();
  };

  // [] is the initial value of the cart containing product objects
  const [cart, setCart] = useState([]);
  const addToCart = data => {
    setCart([...cart, data]);
  };

  // console log rerender to check cart contents
  useEffect(() => console.log("Render"), ["Render"]);

  // on site contents of cart and total price
  let cartContents = [];
  let totalCost = [];
  const add = (a, b) => a + b;

  for (let i = 0; i < cart.length; i++) {
    cartContents.push(
      <div className="cart">
        {`${cart[i].name}`}
        <br />
        <div>{`${cart[i].price}`}</div>
      </div>
    );
  }

  for (let i = 0; i < cartContents.length; i++) {
    totalCost.push(cart[i].price);
  }

  if (totalCost.length > 0) {
    totalCost = totalCost.reduce(add);
    totalCost = Math.round(totalCost * 100) / 100;
  }
  console.log(totalCost);

  return (
    <AnimatePresence>
      <div>
        <section className="sub-nav">
          <span>
            FREE SHIPPING | Domestic orders over $40 | International orders over
            $60
          </span>
        </section>
        <Navbar />
        <div className="product-wrapper">
          <motion.section
            className="product-hero-wrapper"
            initial="exit"
            animate="enter"
            exit="exit"
          >
            <motion.div
              variants={yAxisVariants}
              className="product-grid-container"
            >
              {items}
            </motion.div>
          </motion.section>
          <motion.section
            className="sidebar-products"
            initial="exit"
            animate="enter"
            exit="exit"
          >
            <motion.div className="inner" variants={xAxisVariants}>
              <div className="clipper">
                <div className="cart-title">
                  <br />
                  <br />
                  <span>Total Price: $0.00</span>
                </div>
              </div>
              <div className="animate-panel">
                <div className="cart-title">
                  {cartContents.length > 0 ? (
                    <div>{cartContents}</div>
                  ) : (
                    <div>Cart is empty</div>
                  )}
                </div>
                <div className="product-button-container">
                  <button>Checkout</button>
                </div>
                <div
                  className="product-button-container"
                  style={{ paddingTop: "10px" }}
                >
                  <button onClick={refreshPage}>Empty Cart</button>
                </div>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </AnimatePresence>
  );
};

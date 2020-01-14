import React from "react";
import SettingSprayImage from "../public/static/assets/Alto-Setting-Spray.png";
import Moisturizer from "../public/static/assets/forte.png";
import PowderImage from "../public/static/assets/mezzopowder.png";
import SheShampoo from "../public/static/assets/Shampoo-Bottle-Mockup.png";
import Handwash from "../public/static/assets/Handwash-Bottle-Mockup.png";
import Moisture from "../public/static/assets/mezzomoisture.png";

export const Products = () => {
  const database = [
    {
      name: "Alto™|Setting Spray",
      price: "$11.99",
      img: SettingSprayImage,
      alt: "Setting-Spray",
      id: 1
    },
    {
      name: "Forte™ | Isotropic Moisturizer",
      price: "$19.99",
      img: Moisturizer,
      alt: "Forte-Moisturizer",
      id: 2
    },
    {
      name: "Mezzo™ | Isotropy Powder",
      price: "$19.99",
      img: PowderImage,
      alt: "Mezzo-Powder",
      id: 3
    },
    {
      name: "She™ | Shampoo",
      price: "$59.99",
      img: SheShampoo,
      alt: "She-Shampoo",
      id: 4
    },
    {
      name: "OO™ | Hand Wash",
      price: "$5.99",
      img: Handwash,
      alt: "OO-Hand-Wash",
      id: 5
    },
    {
      name: "Mezzo™ | Moisture",
      price: "$9.99",
      img: Moisture,
      alt: "Mezzo-Moisture",
      id: 6
    }
  ];
  const addToCart = () => {
    console.log("clicked.");
  };


  return <div>

  </div>;
};

export default Products;

import React from "react";
import "../styles.scss";

export default () => {
  return (
    <header>
      <a href="#" className="logo">
          SOPRANO™
      </a>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
            <a href="#">Locations</a>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

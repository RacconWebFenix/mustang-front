import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import { Button } from "@material-ui/core";

document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".carousel");
  M.Carousel.init(elems, {});
});

export default function CarouselMaterial() {
  return (
    <div>
      <div className="carousel">
        <a className="carousel-item" href="#one!">
          <img src="https://lorempixel.com/250/250/nature/1" alt="img" />
          <Button variant="contained" color="primary">
            Mustang
          </Button>
        </a>
        <a className="carousel-item" href="#two!">
          <img src="https://lorempixel.com/250/250/nature/2" alt="img" />
        </a>
        <a className="carousel-item" href="#three!">
          <img src="https://lorempixel.com/250/250/nature/3" alt="img" />
        </a>
        <a className="carousel-item" href="#four!">
          <img src="https://lorempixel.com/250/250/nature/4" alt="img" />
        </a>
        <a className="carousel-item" href="#five!">
          <img src="https://lorempixel.com/250/250/nature/5" alt="img" />
        </a>
      </div>
    </div>
  );
}

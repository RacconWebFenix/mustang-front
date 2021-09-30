import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "../ServiceMovelInfo/style.css";
import M from "materialize-css";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import { Button } from "@material-ui/core";

const infoData = [
  {
    id: 1,
    desc: "MONTAMOS SEU PNEU EM CASA",
    imagemUrl: img1,
  },
  {
    id: 2,
    desc: "ENTREGA AGENDADA",
    imagemUrl: img2,
  },
  {
    id: 3,
    desc: "COMODIDADE E SEGURANÇA",
    imagemUrl: img3,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".carousel");
  M.Carousel.init(elems, {
    dist: -100,
    padding: 0,
    shift: 0,
  });
});

export default function ServiceMovelInfo() {
  return (
    <div className="carousel">
      {infoData.map((d, i) => {
        return (
          <a className="carousel-item" href={"#" + d.id}>
              <img src={d.imagemUrl} alt="img" />
            <div className="descMovCarousel">
              <span>{d.desc}</span>
            </div>
          </a>
        );
      })}
    </div>
  );
}

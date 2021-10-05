import React from "react";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";
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

export default function ServiceMovelInfo() {
  return (
    <>
     <div className="serviceMovelContent">
        <div className="serviceMovelContentTitle" style={{ fontSize: "1rem" }}>
          Conheça Nosso Serviço Móvel disponível para seu CEP!
        </div>
      </div>
      <Slider className="slider-wrapper" touchDisabled={true}>
        {infoData.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.imagemUrl}') no-repeat center center`,
            }}
          >
            <div className="inner">
              <h1>{item.desc}</h1>
              <br />
              <Button>
                <FavoriteIcon style={{ color: "#fff" }} />
              </Button>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

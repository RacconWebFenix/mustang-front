import React, { useState } from "react";
import ServiceMovelInfo from "../../Components/ServiceMovelInfo/ServiceMovelInfo";
import Cart from "../Cart";
import "./style.css";
import DropDownDeliveryTrue from "../../Components/DropDownDelivery/DropDownDeliveryTrue";
import DropDownDeliveryFalse from "../../Components/DropDownDelivery/DropDownDeliveryFalse";

export default function Home() {
  const [cepValue, setCepValue] = useState("");

  
  if (cepValue.length < 8) {
    return (
      <div className="container">
        <Cart />
        <div className="cepContainer">
          <span>Para continuar a compra digite seu cep.</span>
          <div className="borderCep">
            <input
              type="text"
              className="inputCep"
              maxLength="8"
              placeholder="Digite seu Cep"
              onChange={(e) => setCepValue(e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="container">
          <Cart />
          <div className="cepContainer">
            <span>Para continuar a compra digite seu cep.</span>
            <div className="borderCep">
              <input
                type="text"
                className="inputCep"
                maxLength="8"
                placeholder="Digite seu Cep"
                onChange={(e) => setCepValue(e.target.value)}
              />
            </div>
          </div>
        </div>
        {cepValue === "11111111" ? (
          <div>
            <div className="containerServiceMovelInfo">
              <ServiceMovelInfo />
            </div>
            <div className="containerDropDownTrue">
              <DropDownDeliveryTrue />
            </div>
          </div>
        ) : (
          <div>
            <DropDownDeliveryFalse />
          </div>
        )}
      </div>
    );
  }
}

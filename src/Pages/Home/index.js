import React from "react";
import CarouselParthner from "../../Components/CarouselParthner/CarouselParthner";
import DeliveryDropDrown from "../../Components/DeliveryDropDown/DeliveryDropDown";
import ServiceMovelInfo from "../../Components/ServiceMovelInfo/ServiceMovelInfo";

import Cart from "../Cart";
import "./style.css";

const handleChage = (e) => {
  console.log(e.target.value);
};

export default function Home() {
  return (
    <div className="container">
      <div className="">
        <Cart />
      </div>
      <div>
        Cep Validator
        <input type="text" onChange={(e) => handleChage(e)} />
      </div>
      <div>
        <div>Conheça Nosso Seerviço Movel disponivel para seu CEP</div>
        <ServiceMovelInfo />
      </div>

      <div>
      <DeliveryDropDrown />
      </div>
      <div>
        <CarouselParthner />
      </div>
      <ul>
        <option>Combos</option>
        <option>Combos 1</option>
        <option>Combos 2</option>
      </ul>
      <div>Componente Data</div>
      <ul>
        <option>Matutino</option>
        <option>Vespertino</option>
      </ul>
      <div>Cupom</div>
      <div>Resumo da compra</div>
    </div>
  );
}

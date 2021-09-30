import React from "react";
import M from "materialize-css";

document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".dropdown-trigger");
  M.Dropdown.init(elems, {});
});

export default function DeliveryDropDrown() {
  return (
    <div>
      <a className="dropdown-trigger btn" href="/#" data-target="dropdown1">
        Escolha uma opção de Entrega
      </a>

      <ul id="dropdown1" className="dropdown-content">
        <li>
          <a href="#!" value="1">
            Entrega em Casa
          </a>
        </li>
        <li>
          <a href="#!" value="2">
            Serviço Móvel
          </a>
        </li>
        <li>
          <a href="#!" value="3">
            Retirada com Parceiro
          </a>
        </li>
      </ul>
    </div>
  );
}

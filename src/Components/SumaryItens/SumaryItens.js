import React, { useEffect, useState } from "react";
import "./styleSumary.css";
import { Api } from "../../Api/Api";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

export default function SumaryItens() {
  const [data, setData] = useState([]);

  const qtd = 2;

  useEffect(() => {
    const loadData = async () => {
      const response = await Api.buildApiGetRequest(Api.readAllUrl());
      const bodyResult = await response.json();
      setData(bodyResult.results);
    };
    loadData();
  }, []);
  console.log(data);
  if(!data.length){
    return <p>aguarde...</p>
  }else {

    return (
      <div className="centredClass">
        <div className="sumaryContainer">
          <div className="headerSumary">
            <div className="innerHeader">
              <div className="titleSumary">Resumo do Pedido</div>
              <div className="itensSumary">
                {data.length} itens no seu carrinho.
              </div>
            </div>
          </div>
          <div className="iconSumary">
            <AddShoppingCartIcon />
          </div>
          <span />
        </div>
        <div className="sumaryContainerBotton">
          <div className="headerSumary">
            <div className="innerHeader">
              <div className="titleSumary">Total a Pagar</div>
            </div>
          </div>
          <div className="totalSumary">
            R$ {parseFloat(data.length) + qtd + data[0].preco}
          </div>
          <span />
        </div>
      </div>
    );
  }

}

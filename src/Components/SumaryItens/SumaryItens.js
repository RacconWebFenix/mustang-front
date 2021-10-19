import React, { useEffect, useState } from "react";
import "./styleSumary.css";
import { Api } from "../../Api/Api";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Box } from "@material-ui/system";
import { Button, CircularProgress } from "@material-ui/core";

import { toast } from "react-toastify";

export default function SumaryItens({ selectParthner }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await Api.buildApiGetRequest(Api.readAllUrl());
      const bodyResult = await response.json();
      setData(bodyResult.results);
    };
    loadData();
  }, []);

  const handleClickBtn = (e) => {
    toast.success("Compra efetuada com sucesso!");
  };

  if (!data.length) {
    return (
      <Box color="secondary" sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  } else {
    return (
      <div className="centredClass">
        <div className="sumaryContainer">
          <div className="headerSumary">
            <div className="innerHeader">
              <div className="titleSumary">Resumo do pedido</div>
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
          <div className="headerSumaryBotton">
            <div className="innerHeader">
              <div className="titleSumary">Total a pagar</div>
            </div>
          </div>
          <div className="totalSumary">
            R${" "}
            {data
              .reduce((accumulator, { preco }) => accumulator + preco, 0)
              .toFixed(2)}
          </div>
          <span />
        </div>
        <div className="buttonsContainer">
          <Button variant="contained" sx={{ m: 1 }}>
            Continuar comprando
          </Button>
          <Button
            variant="contained"
            sx={{ m: 1 }}
            color="success"
            onClick={handleClickBtn}
          >
            Finalizar Compra
          </Button>
        </div>
      </div>
    );
  }
}

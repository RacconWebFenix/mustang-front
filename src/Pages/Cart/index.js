import { CircularProgress } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React, { useState, useEffect } from "react";
import { Api } from "../../Api/Api";
import "./style.css";

export default function Cart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await Api.buildApiGetRequest(Api.readAllUrl());
      const bodyResult = await response.json();
      setData(bodyResult.results);
    };
    loadData();
  }, []);

  if (data.length < 1) {
    return (
      <Box color="secondary" sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  } else {
  
    
    return (
      <div className="cartContainer">
        <div className="meuCarrinho">Meu Carrinho</div>
        <div className="borderCart">
          {data.map((c, i) => {
            return (
              <div key={c.id}>
                <div className="containerInnerCart">
                  <div className="cartImageContainer">
                    <div className="titloCart">{c.marca}</div>
                    <img src={c.imgUrl} alt={c.tipo} className="cartImage" />
                  </div>
                  <div className="infoContainer">
                    <ul>
                      <li>{c.tipo}</li>
                      <li>{c.descricao}</li>
                      <li className="qtdStyleContainer">
                        <label>Qtd: </label>
                        <input
                          type="number"
                          className="qtdStyle"
                          defaultValue={c.quantidade}
                          disabled
                          min="0"
                        />
                      </li>
                      <li className="preco">R${c.quantidade * c.preco}</li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

import React, { useEffect, useState } from "react";
import { Api } from "../../Api/Api";
import "./style.css";

export default function CardParthner() {
  const getDataParthner = Api.partnerData;

  const [parthnerData, setParthnerData] = useState([]);

  const loadDatParthner = () => {
    setParthnerData(getDataParthner);
  };

  useEffect(() => {
    loadDatParthner();
  });

  return (
    <div>
      <div className="row">
        <div className="col s12 m8">
          {parthnerData.map((pd, i) => {
            return (
              <div className="card" key={i}>
                <div className="card-image">
                  <img src={pd.imagemUrl} alt={pd.name} />
                  <span className="card-title">{pd.name}</span>
                </div>
                <div className="card-content">
                  <p>{pd.address}</p>
                  <hr />
                  <p>{pd.attendance}</p>
                </div>
                <div className="card-action">
                  <a href="/#">Selecionar Parceiro</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import { Button } from "@material-ui/core";
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
      {parthnerData.map((pd, i) => {
        return (
          <div className="card" key={i}>
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={pd.imagemUrl} alt={pd.name} />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                {pd.name}
                <i className="material-icons right">more_vert</i>
              </span>
              <p>
                <Button variant="contained">Escolher Parceiro</Button>
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                {pd.name}
                <i className="material-icons right">close</i>
              </span>
              <p>{pd.address}</p>
              <p>{pd.attendance}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

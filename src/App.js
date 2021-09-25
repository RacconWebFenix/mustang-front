import Button from "@material-ui/core/Button";
import { useEffect, useState } from "react";
import { Api } from "./Api/Api";
import "./App.css";
import CarouselMaterial from "./CarouselTesteMaterial";

function App() {
  const [serviceMovel, setServiceMovel] = useState([]);
  const [servicParthner, setServicParthner] = useState([]);

  const getDataServiceMovel = Api.serviceMovelData;

  const getDataServiceParthner = Api.partnerData;

  const loadDataServiceMovel = () => {
    setServiceMovel(getDataServiceMovel);
  };

  const loadDataServiceParthner = () => {
    setServicParthner(getDataServiceParthner);
  };

  useEffect(() => {
    loadDataServiceMovel();
  });

  useEffect(() => {
    loadDataServiceParthner();
  });



  console.log(serviceMovel);
  console.log(getDataServiceParthner);
  return (
    <>
      <CarouselMaterial />

      {serviceMovel.map((sm, i) => {
        return (
          <ul key={i}>
            <li>{sm.name}</li>
            <li> {sm.desc} </li>
            <li>{sm.valor} </li>
          </ul>
        );
      })}

      {servicParthner.map((sp, i) => {
        return (
          <ul key={i}>
            <li>{sp.name}</li>
            <li>{sp.combo}</li>
            <li>{sp.desc}</li>
            <li>{sp.valor}</li>
          </ul>
        );
      })}
    </>
  );
}

export default App;

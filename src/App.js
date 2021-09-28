import Button from "@material-ui/core/Button";
import { useEffect, useState } from "react";
import { Api } from "./Api/Api";
import "./App.css";
import CardParthner from "./Components/CardsParthner/CardParthner";
import Header from "./Components/Header/Header";
import ServiceMovelInfo from "./Components/ServiceMovelInfo/ServiceMovelInfo";

function App() {
  const [serviceMovel, setServiceMovel] = useState([]);
  const [servicParthner, setServicParthner] = useState([]);
 

  const getDataServiceMovel = Api.serviceMovelData;

  const getDataServiceParthner = Api.partneService;

 

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
      <Header />

      <CardParthner />
      {/* <ServiceMovelInfo /> */}

      {/* {serviceMovel.map((sm, i) => {
        return (
          <ul key={i}>
            <li>{sm.name}</li>
            <li> {sm.desc} </li>
            <li>{sm.valor} </li>
          </ul>
        );
      })} */}

      {/* {servicParthner.map((sp, i) => {
        return (
          <ul key={i}>
            <li>{sp.name}</li>
            <li>{sp.combo}</li>
            <li>{sp.desc}</li>
            <li>{sp.valor}</li>
          </ul>
        );
      })}

      {parthnerData.map((pd, i) => (
        <ul key={i}>
          <li>{pd.name}</li>
          <li>{pd.imagemUrl}</li>
          <li>{pd.address}</li>
          <li>{pd.attendance}</li>
        </ul>
      ))} */}
    </>
  );
}

export default App;

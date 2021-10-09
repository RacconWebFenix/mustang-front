import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./styles.css";
import DateComponent from "../DateComponent";
import DropTimeCourse from "../DropTimeCourse/DropTimeCourse";
import SumaryItens from "../SumaryItens/SumaryItens";
import ServiceMovelDropDown from "../ServiceMovelData/ServiceMovelDropDown";
import CarouselParthner from "../CarouselParthner/CarouselParthner";

export default function DropDownDeliveryTrue() {
  const [delivery, setDelivery] = useState("");
  const [cupomValue, setCupomValue] = useState("");

  const handleChange = (event) => {
    const valueDelivery = event.target.value;
    setDelivery(event.target.value);
    console.log(valueDelivery);
  };

  return (
    <div className="opcDelivery">
      <FormControl sx={{ m: 1 }}>
        <InputLabel id="demo-simple-select-helper-label">
          Opções de Entrega
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Opções de Entrega"
          value={delivery}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Opções de Entrega</em>
          </MenuItem>

          <MenuItem value={10}>Entrega em Casa</MenuItem>
          <MenuItem value={20}>Serviço Movel</MenuItem>
          <MenuItem value={30}>Retirada com Parceiro</MenuItem>
        </Select>
      </FormControl>
      {delivery === 10 ? (
        <div>
          <div className="cepContainer">
            <span>Digite seu cupom de Desconto</span>
            <div className="borderCep">
              <input
                type="text"
                className="inputCep"
                maxLength="8"
                placeholder="Cupom de Desconto"
                onChange={(e) => setCupomValue(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="cepContainer">
              <span>Escolha a data de entrega.</span>
              <DateComponent />
            </div>
          </div>
          <div className="periodoContainer">
            <span>Escolha um período.</span>
            <DropTimeCourse />
          </div>
          <SumaryItens />
        </div>
      ) : delivery === 20 ? (
        <ServiceMovelDropDown />
      ) : delivery === 30 ? (
        <CarouselParthner />
      ) : (
        <p></p>
      )}
    </div>
  );
}

// (
//   <>
//     <div className="cepContainer">
//         <span>Digite seu cupom de Descont</span>
//         <div className="borderCep">
//           <input type="text" className="inputCep" maxLength="8" placeholder="Cupom de Desconto"
//             onChange={(e) => setCupomValue(e.target.value)}
//           />
//         </div>
//       </div>

//       <div>
//       <DateComponent />
//       </div>
//   </>
// ): (
//   <div>Teste</div>
// )}

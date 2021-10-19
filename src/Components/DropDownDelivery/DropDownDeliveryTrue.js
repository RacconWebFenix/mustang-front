import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./styles.css";
import SumaryItens from "../SumaryItens/SumaryItens";
import ServiceMovelDropDown from "../ServiceMovelData/ServiceMovelDropDown";
import CarouselParthner from "../CarouselParthner/CarouselParthner";

export default function DropDownDeliveryTrue() {
  const [delivery, setDelivery] = useState("");

  const handleChange = (event) => {
    setDelivery(event.target.value);
  };

  return (
    <div className="opcDelivery">
      <label className="labelDelivery">Escolha uma opção de entrega.</label>
      <FormControl sx={{ m: 1, mt: 3 }}>
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
        <>
          <div>
            <div className="periodoContainer">
              <div className="cepContainer">
                <span>Digite seu cupom de desconto.</span>
                <div className="borderCep">
                  <input
                    type="text"
                    className="inputCep"
                    maxLength="8"
                    placeholder="Cupom de Desconto"
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={{ margin: "1rem" }}>
            <SumaryItens />
          </div>
        </>
      ) : delivery === 20 ? (
        <>
          <span style={{ marginTop: "1rem" }} />
          <ServiceMovelDropDown />
        </>
      ) : delivery === 30 ? (
        <CarouselParthner />
      ) : (
        <p></p>
      )}
    </div>
  );
}

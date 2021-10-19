import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SumaryItens from "../SumaryItens/SumaryItens";
import CarouselParthner from "../CarouselParthner/CarouselParthner";

export default function DropDownDeliveryFalse() {
  const [delivery, setDelivery] = React.useState("");

  const handleChange = (event) => {
    setDelivery(event.target.value);
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
            <em>Opções de entrega.</em>
          </MenuItem>
          <MenuItem value={10}>Entrega em Casa</MenuItem>
          <MenuItem value={30}>Retirada com Parceiro</MenuItem>
        </Select>
      </FormControl>
      {delivery === 10 ? (
        <div>
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
          <div style={{ margin: "1rem" }}>
            <SumaryItens />
          </div>
        </div>
      ) : delivery === 20 ? (
        <></>
      ) : delivery === 30 ? (
        <CarouselParthner />
      ) : (
        <p></p>
      )}
    </div>
  );
}

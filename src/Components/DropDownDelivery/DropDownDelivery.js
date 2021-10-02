import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropDownDelivery() {
  const [delivery, setDelivery] = React.useState("");

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
    </div>
  );
}

import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropTimeCourse() {
  const [delivery, setDelivery] = React.useState("");

  const handleChange = (event) => {
    setDelivery(event.target.value);
  };

  return (
    <div className="opcDelivery">
      <FormControl sx={{ m: 1 }}>
        <InputLabel id="demo-simple-select-helper-label">
          Escolha o Período
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Opções de Entrega"
          value={delivery}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Escolha o Período</em>
          </MenuItem>

          <MenuItem value={10}>Manhã</MenuItem>
          <MenuItem value={20}>Tarde</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Api } from "../../Api/Api";
import "./styles.css";

export default function ServiceMovelDropDown() {
  const [delivery, setDelivery] = useState("");

  const getDataMovel = Api.serviceMovelData;

  const [dataMovel, setDataMovel] = useState([]);

  const loadDataMovel = () => {
    setDataMovel(getDataMovel);
    console.log(dataMovel);
  };

  useEffect(() => {
    loadDataMovel();
  });

  const handleChange = (event) => {
    const valueDelivery = event.target.value;
    setDelivery(event.target.value);
    console.log(valueDelivery);
  };

  return (
    <div className="opcDelivery">
      <FormControl sx={{ m: 1 }}>
        <InputLabel id="demo-simple-select-helper-label">
          Combos Serviço Móvel
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Combos Serviço Móvel"
          value={delivery}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Combos</em>
          </MenuItem>
          {dataMovel.map((dm) => {
            return (
              <MenuItem value={dm.id} key={dm.id}>
                <p>{dm.name}</p>
              </MenuItem>
            );
          })}
        </Select>
        {delivery < 1 ? (
          <p>Nunhum Combo Selecionado</p>
        ) : (
          <>
            <div className="optMovel">
              <p>{dataMovel[delivery - 1].desc}</p>
              <p>R$ {dataMovel[delivery - 1].valor}</p>
            </div>
          </>
        )}
      </FormControl>
    </div>
  );
}
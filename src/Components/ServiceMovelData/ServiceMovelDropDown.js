import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Api } from "../../Api/Api";
import "./styles.css";
import DateComponent from "../DateComponent";
import DropTimeCourse from "../DropTimeCourse/DropTimeCourse";
import SumaryItens from "../SumaryItens/SumaryItens";

export default function ServiceMovelDropDown() {
  const [delivery, setDelivery] = useState("");

  const getDataMovel = Api.serviceMovelData;

  const [dataMovel, setDataMovel] = useState([]);

  const loadDataMovel = () => {
    setDataMovel(getDataMovel);
  };

  useEffect(() => {
    loadDataMovel();
  });

  const handleChange = (event) => {
    setDelivery(event.target.value);
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
          <p className="cepContainer">Nenhum Combo Selecionado</p>
        ) : (
          <>
            <div className="optMovel">
              <p>{dataMovel[delivery - 1].desc}</p>
              <p>R$ {dataMovel[delivery - 1].valor}</p>
            </div>
            <DateComponent />
            <DropTimeCourse />
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
          </>
        )}
      </FormControl>
    </div>
  );
}

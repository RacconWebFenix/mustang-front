import React, { useEffect, useState } from "react";
import { Api } from "../../Api/Api";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import "./style.css";
import { Box } from "@material-ui/system";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import SumaryItens from "../SumaryItens/SumaryItens";

export default function CarouselParthner() {
  const getDataParthner = Api.partnerData;
  const getServiceParthner = Api.partneService;
  const [index, setIndex] = useState(undefined);
  const [indexRadio, setIndexRadio] = useState(undefined);

  const [parthnerData, setParthnerData] = useState([]);
  const [parthnerService, setParthnerService] = useState([]);
  const [displayValue, setDisplayValue] = useState("");

  const loadDatParthner = () => {
    setParthnerData(getDataParthner);
  };
  const loadServiceParthner = () => {
    setParthnerService(getServiceParthner);
  };

  useEffect(() => {
    loadDatParthner();
  });

  useEffect(() => {
    if (indexRadio === undefined) {
      setDisplayValue("notValue");
    } else if (indexRadio === "2") {
      setDisplayValue("notValue");
    } else if (indexRadio === "1") {
      setDisplayValue("activeValue");
    }
  }, [indexRadio]);

  useEffect(() => {
    loadServiceParthner();
  });

  const handleClick = (i) => {
    const indexPartner = i + 1;
    const pdindex = parthnerService.filter((pd) => pd.id === indexPartner);
    setIndex(...pdindex);
  };

  const card =
    index === undefined ? (
      <p className="chooseParthner">
        Escolha um de nossos parceiros para continuar...
      </p>
    ) : (
      <>
        <React.Fragment>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {index.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {index.combo}
            </Typography>
            <RadioGroup
              label="Escola uma das Opções de Nosso Parceiro."
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label={index.desc[0]}
                onClick={(e) => setIndexRadio(e.target.value)}
              />
              {index.desc[1] === undefined ? (
                <p></p>
              ) : (
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label={index.desc[1]}
                  onClick={(e) => setIndexRadio(e.target.value)}
                />
              )}
            </RadioGroup>
            {indexRadio === "1" ? (
              <></>
            ) : indexRadio === "2" ? (
              <div id="infocardParthner">
                Esta opção não inclui o serviço de montagem, balanceamento e
                alinhamento
              </div>
            ) : (
              <p></p>
            )}
          </CardContent>
          <CardActions>
            <div className={displayValue}>R${index.valor}</div>
          </CardActions>
        </React.Fragment>
      </>
    );

  return (
    <>
      <Slider className="slider-wrapper">
        {parthnerData.map((pd, i) => {
          return (
            <div
              key={i}
              className="slider-content"
              style={{
                background: `url('${pd.imagemUrl}') no-repeat center center`,
              }}
            >
              <div className="inner parthner">
                <h1>{pd.name}</h1>
                <p>{pd.address}</p>
                <p>{pd.attendance}</p>
                <Button
                  onClick={() => handleClick(i)}
                  className="btnCarouselParthner"
                >
                  <FavoriteIcon style={{ color: "#fff", marginRight: 6 }} />{" "}
                  Escolher Parceiro
                </Button>
              </div>
            </div>
          );
        })}
      </Slider>
      <div>
        <Box>
          <Card variant="outlined">{card}</Card>
        </Box>
        {!indexRadio ? (
          <></>
        ) : (
          <div>
            <div className="cepContainer">
              <span>Digite seu cupom de Desconto</span>
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
              <SumaryItens selectParthner={index.valor} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

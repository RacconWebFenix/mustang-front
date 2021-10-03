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

export default function CarouselParthner() {
  const getDataParthner = Api.partnerData;
  const getServiceParthner = Api.partneService;
  const [index, setIndex] = useState(undefined);

  const [parthnerData, setParthnerData] = useState([]);
  const [parthnerService, setParthnerService] = useState([]);

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
    loadServiceParthner();
  });

  const handleClick = (i) => {
    console.log(i);
    const indexPartner = i + 1;
    const pdindex = parthnerService.filter((pd) => pd.id === indexPartner);
    setIndex(...pdindex);
  };

  const card =
    index === undefined ? (
      <div>Escolha um Parceiro</div>
    ) : (
      <React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {index.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {index.combo}
          </Typography>
          <Typography variant="body2">{index.desc}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">R${index.valor}</Button>
        </CardActions>
      </React.Fragment>
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
              <div className="inner">
                <h1>{pd.name}</h1>
                <p>{pd.address}</p>
                <p>{pd.attendance}</p>
                <Button onClick={() => handleClick(i)}>
                  <FavoriteIcon /> Escolher Parceiro
                </Button>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="cardServiceCombo">
        <Box sx={{ minWidth: 275, maxWidth: 275, minHeight: 275 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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

export default function CarouselParthner() {
  const getDataParthner = Api.partnerData;
  const getServiceParthner = Api.partneService;
  const [index, setIndex] = useState([]);

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "10rem",
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "5rem",
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 411,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "4rem",
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "3rem",
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "1rem",
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleClick = (i) => {
    const indexPartner = i;
    const pdindex = parthnerService.filter((pd) => pd.id === indexPartner);
    setIndex(...pdindex);
  };

  

  const card = (
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
      <Slider {...settings} className="slider">
        {parthnerData.map((pd, i) => {
          return (
            <div className="card" key={i}>
              <div className="cardContainer">
                <img className="activator" src={pd.imagemUrl} alt={pd.name} />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4 nameContainer">
                  {pd.name}
                  <i className="material-icons right">more_vert</i>
                </span>
                <p>
                  <Button
                    variant="contained"
                    onClick={() => handleClick(pd.id)}
                  >
                    Escolher Parceiro
                  </Button>
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4 ">
                  {pd.name}
                  <i className="material-icons right">close</i>
                </span>
                <p>{pd.address}</p>
                <p>{pd.attendance}</p>
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

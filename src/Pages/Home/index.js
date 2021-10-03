import React from "react";
import CarouselParthner from "../../Components/CarouselParthner/CarouselParthner";
import ServiceMovelInfo from "../../Components/ServiceMovelInfo/ServiceMovelInfo";
import Cart from "../Cart";
import DateComponent from "../../Components/DateComponent";
import DropDownDelivery from "../../Components/DropDownDelivery/DropDownDelivery";
import DropTimeCourse from "../../Components/DropTimeCourse/DropTimeCourse";
import "./style.css";
import { Box } from "@material-ui/system";
import { TextField } from "@material-ui/core";


export default function Home() {
  return (
    <div>
      <div className="container">
        <Cart />
      </div>
      <div>
        <div >
        <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="CEP"  />
    </Box>
        </div>
      </div>

      <div className="serviceMovelContent">
        <div className="serviceMovelContentTitle">
          Conheça Nosso Serviço Móvel disponível para seu CEP!
        </div>
        <ServiceMovelInfo />
      </div>

      <DropDownDelivery />

      <div>
        <CarouselParthner />
      </div>
      <div>
        <DateComponent />
      </div>
      <div>
        <DropTimeCourse />
      </div>
      <div>
  
      </div>
      <div>Cupom</div>
      <div>Resumo da compra</div>
    </div>
  );
}

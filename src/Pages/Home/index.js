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
        {/* <Cart /> */}
      </div>
      <div>
        <div className="cepContainer">
          <Box>
            <TextField label="CEP" sx={{ m: 3 }} />
          </Box>
        </div>
      </div>

      <div>
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

      <div className="cepContainer">
        <Box>
          <TextField label="Cupom de Desconto" sx={{ m: 3 }} />
        </Box>
      </div>
      <div>Resumo da compra</div>
    </div>
  );
}

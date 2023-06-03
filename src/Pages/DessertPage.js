import React from "react";
import "./DessertPage.scss";
import Image from "react-bootstrap/Image";
import { DessertsTable } from "../DessertsTable";

export const DessertPage = () => {
  return (
    <div className="DessertPage">
      <div className="Center_Content">
        <div className="DessertPage_Header">Dessert</div>
        <div className="DrinkPage_Content">
          <DessertsTable />
        </div>
        <div className="DessertPage_Content">
          <div className="DessertPage_Pix">
            <Image
              width="800px"
              rounded={true}
              fluid={true}
              src="ice_cream.jpg"
              alt="ice cream"
            />
            <br />
            <br />
            <Image
              width="800px"
              rounded={true}
              fluid={true}
              src="apple_pie.jpg"
              alt="apple pie"
            />
            <br />
            <br />
            <Image
              width="800px"
              rounded={true}
              fluid={true}
              src="chocolate_cake.jpg"
              alt="chocolate cake"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

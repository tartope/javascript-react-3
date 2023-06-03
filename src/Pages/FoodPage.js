import React from "react";
import { Image } from "react-bootstrap";
import "./FoodPage.scss";
import { FoodsTable } from "../FoodsTable";

export const FoodPage = () => {
  return (
    <div className="FoodPage">
      <div className="Center_Content">
        <div className="FoodPage_Header">Food</div>
        <div className="FoodPage_Content">
          <FoodsTable />
        </div>
        <div className="FoodPage_Content">
          <div className="FoodPage_Pix">
            <Image
              width="800px"
              rounded={true}
              fluid={true}
              src="hamburger.jpg"
              alt="hanburger"
            />
            <br />
            <br />
            <Image
              width="800px"
              rounded={true}
              fluid={true}
              src="pasta.jpg"
              alt="pasta"
            />
            <br />
            <br />
            <Image
              width="800px"
              rounded={true}
              fluid={true}
              src="pizza.jpg"
              alt="pizza"
            />
            <br />
            <br />
            <Image
              width="800px"
              rounded={true}
              fluid={true}
              src="jerk-chicken.jpg"
              alt="jerk chicken"
            />
            <br />
            <br />
            <Image
              width="800px"
              rounded={true}
              fluid={true}
              src="sushi.jpg"
              alt="sushi"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

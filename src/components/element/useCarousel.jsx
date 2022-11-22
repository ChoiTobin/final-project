import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const useCarousel = ({value}) => {
  return (
    <Carousel variant="dark" style={{ width: "30px" }}>
      {value !== undefined &&
        value.map((imgs) => {
          return (
            <Carousel.Item>
              <img className="d-block w-100" src={value} alt="preview" />
            </Carousel.Item>
          );
        })}
      {/* <Carousel.Item>
        {}
        <img
          className="d-block w-100"
          src={filesUrls}
          alt="preview"
        />
      </Carousel.Item> */}
    </Carousel>
  );
}

export default useCarousel;
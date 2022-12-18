
import React from 'react';
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function Carosuelnew(props) {
  const settings = {

    arrows: false,
    fade: true,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div>
      {/* <h2> Single Item</h2> */}
      <Slider {...settings}>
        <div>
          <img src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/36/1130-STDCRE-44452-SS-MH-Q4-Photography-December-THG0035165-Batching-And-Artwork-P2-Shot-5-1180x450.jpeg-094936.jpg" alt="" />
        </div>
        <div>
          <img src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/10/original-New_Project_%283%29-085610.jpg" alt="" />
        </div>
        <div>
          <img src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/55/Shot6-1180x450-095455.jpeg" alt="" />
        </div>
        <div>
          <img src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/36/1130-STDCRE-44452-SS-MH-Q4-Photography-December-THG0035165-Batching-And-Artwork-P2-Shot-5-1180x450.jpeg-094936.jpg" alt="" />
        </div>

      </Slider>
    </div>
  );
}

export default Carosuelnew;
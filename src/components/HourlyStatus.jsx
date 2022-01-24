import React from 'react'
import HourlyStatusCard from './HourlyStatusCard'
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, width: '30px', height: '30px', right: 0, color: '#000', zIndex: 9 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, width: '30px', height: '30px', left: 0, color: '#000', zIndex: 9 }}
      onClick={onClick}
    />
  );
}
const settings = {
  // accessibility: true,
  // focusOnSelect: true,
  initialSlide: 0,
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  speed: 500,
  dots: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    // {
    //   breakpoint: 1200,
    //   settings: {
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //   }
    // },
  ]
};
// let settings = {
//   dots: false,
//   infinite: false,
//   speed: 500,
//   slidesToShow: 7,
//   slidesToScroll: 1,
//   // initialSlide: 0,
//   nextArrow: <SampleNextArrow />,
//   prevArrow: <SamplePrevArrow />,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         // initialSlide: 2,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         // initialSlide: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         // initialSlide: 2
//       }
//     }
//   ]
// };
export default function HourlyStatus(props) {
  return (
    <div className="mb-5">
      <Slider {...settings}>
        {props.hourly?.map((item, index) => {
          return <HourlyStatusCard key={index} time={item.time_epoch} status={item.condition.text} temp_c={item.temp_c} img={item.condition.icon} />
        })}
      </Slider>
    </div>
  )
}

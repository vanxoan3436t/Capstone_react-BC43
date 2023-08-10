import { Box } from "@mui/material";
import Slider from "react-slick";
import Container from '@mui/material/Container';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { history } from "../..";

function CarouselHome() {
  const { arrProduct } = useSelector(state => state.productReducer);

  const renderProduct = () => {
    return arrProduct?.slice(0, 5).map((shoes, index) => {
      return <div key={index} className="carousels-item">
        <div className="carousel-item-left">
          <img src={shoes.image} alt="carousel" />
        </div>
        <div className="carousel-item-right">
          <h3>{shoes.name}</h3>
          <span>{shoes.price} <i style={{color:'#e51b07'}}>$</i></span>
          <button className="btn" onClick={() => {
            
                history.push(`/detail/${shoes.id}`)}}>Buy Now</button>
        </div>
      </div>
    })
  }

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    initialSlide: 0,
    slickprev: false,
  };

  return (
    <Box className="carousel-home" >
        <Slider {...settings}>
        {renderProduct()}
        </Slider>
    </Box>
  );
}


export default CarouselHome
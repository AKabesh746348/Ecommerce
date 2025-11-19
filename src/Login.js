import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Login.scss"
import Navbar from './Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Login() {
   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
   }

   

  return (
    <div className='Dante'>
      < Navbar />
      <h1>Login Page</h1>
       <Slider {...settings}>
        <h3>1</h3>
      
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
      </div>

    
  )
}

export default Login
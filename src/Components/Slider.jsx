import { useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';

function Slider()
{
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
   
  
    return (
      <div className="myslider container">

        
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <Link to="/games/appid/0"><img
            className="d-block w-100"
            src="https://i.imgur.com/N97mUoC.jpeg"
            alt="First slide"
          /></Link>
          <Carousel.Caption>
            <h3>Buzz Lightyear Horror Game</h3>
            <p>Cômico e medonho, vale a pena jogar e dar boas risadas</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Link to="/games/appid/3"> <img
            className="d-block w-100"
            src="https://i.imgur.com/ipGAEXP.jpeg"
            alt="Second slide"
          /></Link>
  
          <Carousel.Caption>
            <h3 className="carousel-capt">Alone in the house</h3>
            <p className="carousel-capt">Mistério e suspense, mergulhe nesse jogo baseado em ondas de inimigos</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Link to="/games/appid/1"><img
            className="d-block w-100"
            src="https://i.imgur.com/slDHDHg.jpg"
            alt="Third slide"
          /></Link>
  
          <Carousel.Caption>
            <h3>Batalha das Torres</h3>
            <p>
              O Faroeste está de volta, proteja sua torre e destrua as dos inimigos com sua sniper e canhões
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>

  





    );
  }
     
export default Slider;
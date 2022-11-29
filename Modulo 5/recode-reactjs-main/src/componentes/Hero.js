import React from "react";
import bannerhero from '../imgs/banner-hero.png';

const Hero = () => {
    return (
      <>
        <div className="App">
            <div class="hero-image">
                <div class="hero-text">
                    <img src={bannerhero} alt="" />
                    <a href="promos"><button class="btn">Realize seus Sonhos</button></a>
                </div>
            </div>
        </div> 
      </> 
    );
}

export default Hero;
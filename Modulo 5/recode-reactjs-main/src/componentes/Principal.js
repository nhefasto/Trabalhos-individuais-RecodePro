import React from 'react';
import banner1 from '../imgs/banner1.png';
import banner2 from '../imgs/banner2.png';
import banner3 from '../imgs/banner3.png';
import Hero from './Hero';

const Principal = () => {
    return (
        <>
            <Hero/>
            <div class="painel2">
                <div class="caixaBanners">
                    <div class="boxBanners">
                        <a href="#" target="_blank">
                            <img src={banner1} hspace="50"
                                alt="Banner da matéria sobre os 10 pontos espetaculares de observação de estrelas."
                                width="500px" />
                        </a>
                    </div>
                    <div class="boxBanners">
                        <a href="#" target="_blank"><img src={banner3} hspace="100"
                            alt="Banner da matéria sobre as melhores montanhas para escalar em casal." width="590px" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="painel1">
                <a href="#" target="_blank">
                    <img src={banner2} id="rio" vspace="50"
                        alt="Banner divulgação Rio de Janeiro, imagem de uma arara com as asas abertas." />
                </a>
            </div>
        </>
    );
}

export default Principal;
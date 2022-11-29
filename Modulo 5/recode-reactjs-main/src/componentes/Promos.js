import portodegalinhas from '../imgs/places/porto-de-galinhas.jpg';
import orlando from '../imgs/places/orlando.jpg';
import foz from '../imgs/places/foz.jpg';
import vancouver from '../imgs/places/vancouver.jpg';
import salvador from '../imgs/places/salvador.jpg';
import recife from '../imgs/places/recife.jpg';
import lisboa from '../imgs/places/lisboa.jpg';
import morrodesp from '../imgs/places/morro-de-sp.png';
import praiadapipa from '../imgs/places/praia-da-pipa.png';
import jericoacoara from '../imgs/places/jericoacoara.png';
import bsas from '../imgs/places/buenos-aires.jpg';
import trancoso from '../imgs/places/trancoso.png';
import cupom from '../imgs/cupom.png';
import './Promos.css';
import React, { useState } from 'react';

const Promos = () => {

    const [ valor1, setValor ] = useState(0);

    function adicionar() {
        setValor(valor1 + 1);
    }

    function remover() {
        setValor(valor1 - 1);
    }

    return (
        <>
            <div class="painel1">

                <div class="cards">
                    <img src={portodegalinhas} />
                    <hr />
                    <h4>Porto de Galinhas</h4>
                    <p>4 ou 7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 995,00</span></p>
                    <h3>R$ 799,00</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                        <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>{valor1}</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={orlando} />
                    <hr />
                    <h4>Orlando</h4>
                    <p>11 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 6890,00</span></p>
                    <h3>R$ 2990,00</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                        <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>0</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={foz} />
                    <hr />
                    <h4>Foz do Iguaçu</h4>
                    <p>4 ou 7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 940,00</span></p>
                    <h3>R$ 629,00</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                        <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>0</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={vancouver} />
                    <hr />
                    <h4>Vancouver</h4>
                    <p>7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 14990,00</span></p>
                    <h3>R$ 10490,00</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                        <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>0</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={salvador} />
                    <hr />
                    <h4>Salvador</h4>
                    <p>4 ou 7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 2290,00</span></p>
                    <h3>R$ 1890,00</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                        <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>0</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={recife} />
                    <hr />
                    <h4>Recife</h4>
                    <p>4 ou 7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 1390,00</span></p>
                    <h3>R$ 790,00</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                        <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>0</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
            </div>

            <div class="painel4">
                <img src={cupom} id="cupom" alt="Cupom de desconto" />
            </div>



            <div class="painel1">
                <div class="cards">
                    <img src={lisboa} />
                    <hr />
                    <h4>Lisboa</h4>
                    <p>15 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 23900,00</span></p>
                    <h3>R$ 17990,00</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                        <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>0</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={morrodesp} />
                    <hr />
                    <h4>Morro de São Paulo</h4>
                    <p>4 ou 7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 2650,00</span></p>
                    <h3>R$ 1690,00</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                        <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>0</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={praiadapipa} />
                    <hr />
                    <h4>Praia da Pipa</h4>
                    <p>4 ou 7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 1499,00</span></p>
                    <h3>R$ 949,00</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                        <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>0</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={bsas} />
                    <hr />
                    <h4>Buenos Aires</h4>
                    <p>7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 2599,00</span></p>
                    <h3>R$ 1690,00</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                         <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>0</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={jericoacoara} />
                    <hr />
                    <h4>Jericoacoara</h4>
                    <p>4 ou 7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 2490,00</span></p>
                    <h3>R$ 1890,00</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                         <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>0</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={trancoso} />
                    <hr />
                    <h4>Trancoso</h4>
                    <p>4 ou 7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 1680,00</span></p>
                    <h3>R$ 1190,00</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                         <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>0</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
            </div>
        </>
    );
}

export default Promos;
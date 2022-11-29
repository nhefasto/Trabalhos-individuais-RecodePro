import amsterdam from '../imgs/destinations/amsterdam.jpg';
import bangkok from '../imgs/destinations/bangkok.jpg';
import bariloche from '../imgs/destinations/bariloche.jpg';
import bsas from '../imgs/destinations/buenos-aires.jpg';
import cancun from '../imgs/destinations/cancun.png';
import cidadedocabo from '../imgs/destinations/cidade-do-cabo.jpg';
import jampa from '../imgs/destinations/joao-pessoa.jpg';
import lisboa from '../imgs/destinations/lisboa.jpg';
import machupicchu from '../imgs/destinations/machu-picchu.jpg';
import santorini from '../imgs/destinations/santorini.jpg';
import sp from '../imgs/destinations/sp-sp.jpg';
import newyork from '../imgs/destinations/new-york.jpg';
import milao from '../imgs/destinations/milao.jpg';
import rio from '../imgs/destinations/rio-de-janeiro.jpg';
import paris from '../imgs/destinations/paris.jpg';
import moscou from '../imgs/destinations/moscow.jpg';
import trancoso from '../imgs/destinations/trancoso-bahia.jpg';
import vancouver from '../imgs/destinations/vancouver.jpg';
import './Destinos.css';
import '../index.css';

const Destinos = () => {
    return (
        <div class="painel4">
            <div class="divTicket">
                <div class="divTicket-content">
                    <div>
                        <input type="radio" id="idaevolta" name="drone" value="idaevolta" />
                        <label for="idaevolta">Ida e volta</label>

                        <input type="radio" id="ida" name="drone" value="ida" />
                        <label for="ida">Só ida</label>
                    </div>

                    <div>
                        <label for="selectClasse"> Classe: </label>
                        <select name="classes" id="selectClasse">
                            <option value="">----- Escolha -----</option>
                            <option value="economica">Econômica</option>
                            <option value="ecoPremium">Econômica Premium</option>
                            <option value="executiva">Executiva</option>
                            <option value="primClasse">Primeira Classe</option>
                        </select>
                    </div>
                    <div>
                        <label for="passageiros" id="passageiros"> Passageiros: </label>
                        <input type="number" name="passageiros" id="passageiros" />
                        <div>

                        </div>
                        <br />
                        <br />
                        <div>
                            <label for="site-search">Origem</label>
                            <br />
                            <input type="search" id="site-search" name="origem" />
                        </div>

                        <div>
                            <label for="site-search">Destino</label>
                            <br />
                            <input type="search" id="site-search" name="destino" />
                        </div>

                        <div>
                            <label for="dataIda">Data de ida</label>
                            <br />
                            <input type="datetime-local" name="dataIda" id="data" />
                        </div>
                        <div>
                            <label for="dataVolta">Data de volta</label>
                            <br />
                            <input type="datetime-local" name="dataVolta" id="data" />
                        </div>
                        <br />
                        <input type="button" id="btn-pesquisar" value="Pesquisar" />
                    </div>
                </div>
            </div>

            <div class="painel1">
                <div class="painel2">
                    <div class="boxImgs">
                        <div class="imgsDestinos">
                            <img src={sp} alt="São Paulo - Brasil" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={trancoso} alt="Trancoso - Brasil" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={lisboa} alt="Lisboa - Portugal" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={cancun} alt="Cancún - México" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={santorini} alt="Santorini - Grécia" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={cidadedocabo} alt="Cape Town - África do Sul" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={bariloche} alt="Bariloche - Argentina" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={amsterdam} alt="Amsterdam - Holanda" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={bsas} alt="Buenos Aires - Argentina" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={jampa} alt="João Pessoa - Brasil" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={machupicchu} alt="Machu Picchu - Peru" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={newyork} alt="Nova Iorque - Estados Unidos" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={milao} alt="Milão - Itália" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={rio} alt="Rio de Janeiro - Brasil" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={paris} alt="Paris - França" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={moscou} alt="Moscou - Rússia" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={bangkok} alt="Bangkok - Tailândia" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={vancouver} alt="Vancouver - Canadá" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
            );
}

export default Destinos;
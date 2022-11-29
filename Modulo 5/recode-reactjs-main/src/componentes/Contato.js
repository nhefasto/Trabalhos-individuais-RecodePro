import gps from '../imgs/gps.png';
import whatsapp from '../imgs/whatsapp.png';
import facebook from '../imgs/facebook.png';
import instagram from '../imgs/instagram.png';
import './Contato.css';

const Contato = () => {
  
  return (
        <div class="painel1">
            <div class="painelContato">
                <div class="divContato">
                    <h2>Onde estamos</h2>
                    <img src={gps} width="50px"/>
                    <p>Travessa Latânia 13 - VK</p>
                    <p>Rio de Janeiro - RJ</p>
                    <br/>
                    <br/>
                    <br/>
                    <a href="https://api.whatsapp.com/send?phone=5521921212121">
                        <img src={whatsapp} width="20px"/>
                        (21) 92121-2121
                    </a>
                    <a href="https://www.facebook.com/Nhefastooficial" target="_blank">
                        <img src={facebook} width="20px"/>
                        /Nhefastour
                    </a>
                    <a href="https://www.instagram.com/nhefasto/" target="_blank">
                        <img src={instagram} width="20px"/>
                        /Nhefastour
                    </a>
                </div>
                <div class="divContato">
                    <form>
                        <h3>Fale conosco</h3>
                        <hr/>
                        <input type="text" class="inputsForm" name="nome" placeholder="Insira seu nome"/>
                        <br/>
                        <input type="email" class="inputsForm" name="email" placeholder="seuemail@email.com"/>
                        <br/>
                        <input type="tel" class="inputsForm" name="tel" placeholder="(xx) xxxxx-xxxx"/>
                        <br/>
                        <textarea id="w3review" class="inputsForm" name="w3review" rows="4" cols="50"
                            placeholder="Deixe sua mensagem"></textarea>
                        <br/>
                        <button class="btn">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
  );
}

export default Contato;

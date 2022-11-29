import Visa from '../imgs/payment/Visa.png';
import VisaElectron from '../imgs/payment/Visa Electron.png';
import MasterCard from '../imgs/payment/MasterCard.png';
import Maestro from '../imgs/payment/Maestro.png';
import AmericanExpress from '../imgs/payment/American Express.png';
import PayPal from '../imgs/payment/PayPal.png';

function Footer() {
    return (
        <div className="App">
            <footer>
                <p>Formas de Pagamento</p>
                <div class="formasPag">
                    <img src={Visa} />
                    <img src={VisaElectron} />
                    <img src={MasterCard} />
                    <img src={Maestro} />
                    <img src={AmericanExpress} />
                    <img src={PayPal} />
                </div>
                <br />
                <br />
                <p>Nhefastour &copy; 2022 | Desenvolvido por <a href="https://www.linkedin.com/in/nhefasto/"
                    target="_blank">Ygor
                    'Nhefasto' Oliveira</a></p>
            </footer>
        </div>
    );
}

export default Footer;
import './styles.css'

import logoIcone from '../../../midia/icones/logo-instagram 1.png'
import logo from '../../../midia/logo 1.png'

export default function Logo(){
    return (
        <div class="logo">
            <img class="logo-icone" src={logoIcone} alt="logo icone Instagram" />
            <div class="divisao"></div>
            <img class="logo-texto" src={logo} alt="Instagram logo texto" />
        </div>
    );
}
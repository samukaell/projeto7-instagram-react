import Logo from './logo/index'
import Barra from './barra/index'
import Icones from './icones/index'

import './styles.css'

export default function Topo(){
    return (
        <div className="topo">
            <div class="header">
                <Logo></Logo>
                <Barra></Barra>
                <Icones></Icones>
            </div>    
        </div>
    );
}

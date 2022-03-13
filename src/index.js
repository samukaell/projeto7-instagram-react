import ReactDOM from 'react-dom';
import Topo from './componentes/Topo/index'
import Conteudo from './componentes/Conteudo';
import BarraInferior from './componentes/Barra-Inferior';


//css
import './reset.css'
import './styles.css'
import './styles-resposividade.css'

function App() {
    return (
        <>
            <Topo/>
            <Conteudo/>
            <BarraInferior/>
        </>
    );
}

const app = App();
ReactDOM.render(app, document.querySelector(".root"))
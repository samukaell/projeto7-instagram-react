import User from '../User'

export default function Outros(props){
    return (
        <div class="outros">
                   
            <div class="info">
                <img src={props.imagem} alt="image do usuario badvibesmemes" class="user-image"/>
                <div class="texto">
                    <p class="nome-users">{props.nome}</p>
                    <p class="segue">Segue você</p>
                </div>
            </div>
            <a href="#" class="segue-vc">Seguir</a>
        </div>
    );
}
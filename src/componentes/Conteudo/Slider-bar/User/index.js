export default function User(props){
    return (
        <div className="user">
            <img src={props.imagem} alt="image do usuario badvibesmemes" className="user-image"/>
            <div className="texto">
                <p className="nome">{props.nome}</p>
                <p className="status">{props.status}</p>
            </div>
        </div>
    );
}
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

export default function User(props){
    return(
        <div className="user">
            <div class="lateral">
                <img src={props.image} alt="foto de usuario" class="foto-user-post"/>
                <p class="nome-user-post">{props.name}</p>
            </div>
            <button><IoEllipsisHorizontalSharp class="more" /></button>
        </div>
        
    );
}
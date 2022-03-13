import { IoHeartOutline,IoChatbubbleOutline,IoPaperPlaneOutline,IoBookmarkOutline } from "react-icons/io5";

export default function Feedback(props){
    return (
        <div class="feedback">
            <div class="icones">
                <div class="lateral-icones">
                    <button><IoHeartOutline name="heart-outline" class="coracao"/></button>
                    <button><IoChatbubbleOutline name="chatbubble-outline" class="comentarios"/></button>
                    <button><IoPaperPlaneOutline name="paper-plane-outline" class="aviao"/></button>

                </div>
                <button><IoBookmarkOutline name="bookmark-outline" class="marcador"/></button>
                
            </div>
            <div class="curtido">
                <img src={props.imageCurtida} alt="foto de usuario" class="user-foto"/>
                <p class="curtido-por">Curtido por <strong>{props.curtidoPor}</strong> e <strong> outras {props.porMais} pessoas</strong></p>
            </div>
            
        </div>
);
}
import { IoPaperPlaneOutline,IoCompassOutline,IoHeartOutline,IoPersonOutline } from "react-icons/io5";
import './styles.css'

export default function Icones(){
    return (
        <div className="icones">
            <a href="https://github.com/samukaell/projeto2-instagram"><IoPaperPlaneOutline className="aviao" /></a>
            <a href="https://github.com/samukaell/projeto2-instagram"><IoCompassOutline className="descubra" /></a>
            <a href="https://github.com/samukaell/projeto2-instagram"><IoHeartOutline className="curtidas" /></a>
            <a href="https://github.com/samukaell/projeto2-instagram"><IoPersonOutline className="contatos" /></a>
        </div>
    );
}
//Original
/*
    <a href="#"><ion-icon name="paper-plane-outline" className="aviao"></ion-icon></a>
    <a href="#"><ion-icon name="compass-outline" className="descubra"></ion-icon></a>
    <a href="#"><ion-icon name="heart-outline" className="curtidas"></ion-icon></a>
    <a href="#"><ion-icon name="person-outline" className="contatos"></ion-icon></a>
*/
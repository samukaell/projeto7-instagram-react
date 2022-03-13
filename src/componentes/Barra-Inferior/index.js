import { IoHome,IoSearch,IoAddCircle,IoHeartOutline,IoPersonOutline } from "react-icons/io5";
import './styles.css'

export default function BarraInferior(){
    return (
        <div className="fundo">
            <div className="barra-inferior">
                <IoHome name="home" className="casa"/>
                <IoSearch name="search" className="pesquisa"/>
                <IoAddCircle name="add-circle-outline" className="adicionar"/>
                <IoHeartOutline name="heart-outline" className="coracao"/>
                <IoPersonOutline name="person-outline" className="person"/>
            </div>
        </div>
    );
}
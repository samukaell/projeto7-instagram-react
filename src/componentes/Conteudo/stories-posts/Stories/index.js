import { IoChevronForwardCircleSharp } from "react-icons/io5";

import { dataUser } from '../../../../database/dadosStories'
import User from './User/index'

//css
import './styles.css'

export default function Stories(){
    return(
        <div className="stories">
            <IoChevronForwardCircleSharp className="setinha-stories" />
            
            {dataUser.map(user => {
                return (
                    <User
                        image = {user.image}
                        name = {user.nome}
                    />
                )
            })}
            
        </div>
    );
}

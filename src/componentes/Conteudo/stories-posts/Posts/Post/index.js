import User from './User'
import Feedback from './Feedback';

export default function Post(props){
    return(
        <div className='post'>
            <User 
                image = {props.image} 
                name = {props.name} 
            />
            <img src={props.imagePost} alt="gato fofo com telefone" class="image"/>
            <Feedback
                imageCurtida = {props.imageCurtida}
                curtidoPor = {props.curtidoPor}
                porMais = {props.porMais}
            />
        </div>

    );
}
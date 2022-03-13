import User from './User'
import Feedback from './Feedback';

export default function Post(props){
    return(
        <div className='post'>
            <User 
                image = {props.image} 
                name = {props.name} 
            />
            {props.type === 'typeImage' ? 
                <img src={props.imagePost} alt="gato fofo com telefone" class="image"/> 

                :
                
                <div className="conteudo-post">
                    <video className="video" width="100%" height="80%" controls>
                        <source src={props.videoPlay} type="video/mp4"/>
                        <source src={props.videoController} type="video/ogg"/>
                        Your browser does not support the video tag.
                    </video>    
                </div>

            }
            <Feedback
                imageCurtida = {props.imageCurtida}
                curtidoPor = {props.curtidoPor}
                porMais = {props.porMais}
            />
        </div>

    );
}
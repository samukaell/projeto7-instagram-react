//Arquivos
import Stories from './stories-posts/Stories';
import Posts from './stories-posts/Posts';
import SliderBar from './Slider-bar';

//css
import './styles.css'

export default function Conteudo(){
    return(
        <div className='corpo'>
            <div className='centro'>
                <Stories/>
                <Posts/>
            </div>
            <SliderBar/>
            
        </div>
    );
}
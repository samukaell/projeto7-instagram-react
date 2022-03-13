import User from './User'
import Outros from './OutroUser';
import Sobre from './Sobre'

//css
import './styles.css'

//Imagens
import imagemUser from '../../../midia/user/catanacomics 1.png'
import imagem1 from '../../../midia/user/badvibesmemes 1.png'
import imagem2 from '../../../midia/user/chibirdart 1.png'
import imagem3 from '../../../midia/user/razoesparaacreditar 1.png'
import imagem4 from '../../../midia/user/adorableanimals 1.png'
import imagem5 from '../../../midia/user/smallcutecats 1.png'

export default function SliderBar(){
    return(
        <div className="slider-bar-sombra">
           
            <div className="slider-bar">
                <User 
                    imagem = {imagemUser}
                    nome = {'catanacomics'}
                    status = {'Catana'}
                />

                <div className="ver-tudo">
                    <p className="sugestao">Sugestões para você</p>
                    <a href="https://github.com/samukaell/projeto2-instagram/blob/main/index.html" class="ver">Ver tudo</a>
                </div>

                <Outros
                    imagem = {imagem1}
                    nome = {'bad.vibes.memes'}
                />

                <Outros
                    imagem = {imagem2}
                    nome = {'chibirdart'}
                />

                <Outros
                    imagem = {imagem3}
                    nome = {'razoesparaacreditar'}
                />

                <Outros
                    imagem = {imagem4}
                    nome = {'adorable_animals'}
                />

                <Outros
                    imagem = {imagem5}
                    nome = {'smallcutecats'}
                />

                <Sobre/>

            </div>
        </div>
    );
}
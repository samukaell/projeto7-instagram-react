import Post from './Post/index'
import { dataUser } from '../../../../database/dadosStories'

//css
import './styles.css'

//imagens
import imagem1 from '../../../../midia/gato-telefone 1.png'
import imagem2 from '../../../../midia/dog 1.png'
import video from '../../../../midia/videos/video.mp4'
import videoControle from '../../../../midia/videos/video.ogv'

export default function Posts(){
    return (
        <div className='posts'>
            <Post
                image = {dataUser[1].image}
                name = {dataUser[1].nome}
                type= {"typeImage"}
                imagePost = {imagem1}
                imageCurtida = {dataUser[5].image}
                curtidoPor = {dataUser[5].nome}
                porMais = {101.523}
            />
            <Post
                image = {dataUser[2].image}
                name = {dataUser[2].nome}
                type = {"typeImage"}
                imagePost = {imagem2}
                imageCurtida = {dataUser[8].image}
                curtidoPor = {dataUser[8].nome}
                porMais = {99.159}
            />
            <Post
                image = {dataUser[2].image}
                name = {dataUser[2].nome}
                type = {"typeVideo"}
                videoPlay = {video}
                videoController = {videoControle}
                imageCurtida = {dataUser[8].image}
                curtidoPor = {dataUser[8].nome}
                porMais = {99.159}
            />

            
        </div>
    );
}
export default function User(props){
    return (
        <div class="user">
            <div class="borda-stories">
                <img src={props.image} alt="foto de perfil" class="image-user"/>
            </div>
            <p class="nome-user">{props.name}</p>
        </div>
    );
}
import HeaderLogin from '../static/Header/HeaderLogin';
import cad from '../img/cadFicha.jpg'
import list from '../img/listficha.jpg'
import '../css/ChoicesPageCss.css';


function FichaChoicespage (){

    return (
        <div>
            <HeaderLogin/>
                <label class="Tituloescolhas"> Escolha quem voce quer operar.</label>

                    <ul class="escolhas">
                        <a href="/ficha_cadastro">
                            <img src={cad} alt=""/>
                        </a>

                        <a href="/ficha_list">
                            <img src={list} alt=""/>
                        </a>

                    </ul>

                    <a href="/escolhas">
                        <label class="buttonlogin">voltar</label>
                    </a>
        </div>
    )

}

export default FichaChoicespage;
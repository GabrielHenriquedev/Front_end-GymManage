import HeaderLogin from '../static/Header/HeaderLogin';
import Professor from '../img/Professor.jpg'
import Ficha from '../img/ficha.jpg'
import Aluno from '../img/Aluno.jpg'
import '../css/ChoicesPageCss.css';

function Choicespage(){
    return (
        <div>
            <HeaderLogin/>
                <label class="Tituloescolhas"> Escolha quem voce quer operar.</label>

                    <div class="zoom">
                        <ul class="escolhas">
                            <a href="/operarprofessor">
                                <img src={Professor} alt=""/>
                            </a>
                            <a href="/operarficha">
                                <img src={Ficha} alt=""/>
                            </a>

                            <a href="/operaraluno">
                                <img src={Aluno} alt=""/>
                            </a>

                        </ul>
                    </div>

        </div>
    )
}

export default Choicespage;
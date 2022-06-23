import HeaderLogin from '../static/Header/HeaderLogin';
import cad from '../img/cadAluno.jpg'
import list from '../img/listaluno.jpg'
import '../css/ChoicesPageCss.css';


function AlunoChoicespage (){
    return (
        <div>
            <HeaderLogin/>
                <label class="Tituloescolhas"> Escolha quem voce quer operar.</label>

                    <ul class="escolhas">
                        <a href="/aluno_cadastro">
                            <img src={cad} alt=""/>
                        </a>

                        <a href="/aluno_list">
                            <img src={list} alt=""/>
                        </a>

                    </ul>
                            <a href="/escolhas">
                                <label class="buttonlogin">voltar</label>
                            </a>
                    <div id="footer"></div>

         
           
          

        </div>
    )
}

export default AlunoChoicespage;
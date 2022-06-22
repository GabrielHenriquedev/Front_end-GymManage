import HeaderLogin from '../static/Header/HeaderLogin';
import cad from '../img/cadProfessor.jpg'
import list from '../img/listprofessor.jpg'
import '../css/ChoicesPageCss.css';


function ProfessorChoicespage (){
    return (
        <div>
            <HeaderLogin/>
                <label class="Tituloescolhas"> Escolha quem voce quer operar.</label>

                    <ul class="escolhas">
                        <a href="/prof_cadastro">
                            <img src={cad} alt=""/>
                        </a>

                        <a href="/prof_list">
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

export default ProfessorChoicespage;
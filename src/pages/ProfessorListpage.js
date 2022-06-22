import HeaderLogin from '../static/Header/HeaderLogin';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import lixo from '../img/lixo.png'

function ProfessorListpage(){
    const [user, setUser] = useState();

    useEffect(() => {
        axios
          .get("https://api.github.com/users/romulo27")
          .then((response) => setUser(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);


        return (
            <div>
                <HeaderLogin/>
                <div>
        <div class="table">
            <table class="dados">
                <tr>
                    <td>Nome</td>
                    <td>sobrenome</td>
                    <td>email</td>
                    <td>cpf</td>
                    <td>CREF</td>
                    <td>telefone</td> 
                    <td>Aulas</td>
                    <td>Excluir</td>
                </tr>
                <tr>
                    <td>{user?.login}</td>
                    <td>{user?.bio}</td>
                    <td>{user?.login}</td>
                    <td>{user?.bio}</td>
                    <td>{user?.login}</td>
                    <td>{user?.bio}</td>
                    <td>{user?.bio}</td>
                    <td> 
                        <img src={lixo} alt=""/>
                        </td>
                </tr>
            </table>
        </div>

        <a href="/operarprofessor">
            <label class="buttonlogin">voltar</label>
        </a>
    </div>  
            </div>
        )

}

export default ProfessorListpage;

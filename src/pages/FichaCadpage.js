import React, {useState} from "react"
import HeaderLogin from '../static/Header/HeaderLogin';
import '../css/CadPageCss.css';
import axios from "axios";
import {useNavigate} from 'react-router-dom'



function FichaCadPage(){

    const [nome,setNome]= useState("");
    const [sobrenome,setSobrenome]= useState("");
    const [professor,setProfessor]= useState("");
    const [horario,setHoratio]= useState("");
    const [dropvalue,setDropvalue]= useState("");

    const navigate= useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/user', data)
            .then(function (response) {
                //mudar as rotas
                navigate('/')
                console.log(response);
             })
            .catch(function (error) {
                console.log(error);
      });
      }

      const data = {
        nome,
        sobrenome,
        horario,
        professor,
        dropvalue

      }

    return (
        <div>
             <HeaderLogin/>
             <div class="conteiner">
                        <form class="Cadastro" onSubmit={handleSubmit} >
                                <h1 class="titulo">Cadastro de ficha</h1>
                                <br/>

                                <div class="row">
                                    <label>Nome do aluno </label>
                                    <input 
                                        type="text" 
                                        id="nome" 
                                        name="nome" 
                                        placeholder="Nome" 
                                        onChange={(e)=> setNome(e.target.value)} 
                                        />
                                </div>

                                <div class="row">
                                    <label>Sobrenome</label>
                                    <input 
                                        type="text" 
                                        id="sobrenome" 
                                        name="sobrenome" 
                                        placeholder="Sobrenome" 
                                        onChange={(e)=> setSobrenome(e.target.value)} 
                                        />
                                </div>

                                <div class="row">
                                    <label>Nome do professor </label>
                                    <input 
                                        id="professor"
                                        name="professor" 
                                        type="text" 
                                        placeholder="professor"
                                        onChange={(e)=> setProfessor(e.target.value)} 
                                        />
                                </div>

                                <div class="row">
                                    <label>horario </label>
                                    <input 
                                        id="horario"
                                        name="horario" 
                                        type="text" 
                                        placeholder="horario"
                                        onChange={(e)=> setHoratio(e.target.value)} 
                                        />
                                </div>

                                <div class="row">
                                    <label>Escolha o tipo de ficha</label>
                                    <select name="dropvalue" id="dropvalue" onChange={(e)=> setDropvalue(e.target.value)}>
                                        <option value="musculacao">musculacão</option>
                                        <option value="danca">dança</option>
                                        <option value="luta">luta</option>
                                    </select>
                                </div>
                                <div class="buttons">

                                    <input type="reset"  name="b2" value="Limpar"/>
                                    <button type="submit" name="b1">enviar</button>
                                </div>

                        </form>

                </div>

                <a href="/operarficha">
                    <label class="buttonlogin">voltar</label>
                </a>

        </div>
    )

}

export default FichaCadPage;
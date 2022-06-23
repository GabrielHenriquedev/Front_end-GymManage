import React, {useState} from "react"
import HeaderLogin from '../static/Header/HeaderLogin';
import '../css/CadPageCss.css';
import axios from "axios";
import {useNavigate} from 'react-router-dom'
function ProfessorCadpage(){

    const [nome,setNome]= useState("");
    const [sobrenome,setSobrenome]= useState("");
    const [email,setEmail]= useState("");
    const [cpf,setCpf]= useState("");
    const [cref,setCref]= useState("");
    const [telefone,setTelefone]= useState("");
    const [dropvalue,setDropvalue]= useState("");

    const navigate= useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/user', data)
            .then(function (response) {
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
        email,
        cpf,
        cref,
        telefone,
        dropvalue

      }



    return (
        <div>
            <HeaderLogin/>
                    <div class="conteiner">
                        <form class="Cadastro" onSubmit={handleSubmit} >
                                <h1 class="titulo">Cadastro professor</h1>
                                <br/>

                                <div class="row">
                                    <label>Nome </label>
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
                                    <label>Email </label>
                                    <input 
                                        id="email"
                                        name="email" 
                                        type="email" 
                                        placeholder="Email@email.com"
                                        onChange={(e)=> setEmail(e.target.value)} 
                                        />
                                </div>

                                <div class="row">
                                    <label>CPF</label>
                                    <input 
                                        id="cpf" 
                                        name="cpf" 
                                        type="cpf" 
                                        placeholder="000.000.000-00" 
                                        autocomplete="off" 
                                        maxlength="14" 
                                        onChange={(e)=> setCpf(e.target.value)} />
                                </div>

                                <div class="row">
                                    <label>CREF</label>
                                    <input 
                                        type="text" 
                                        id="cref" 
                                        name="cref" 
                                        placeholder="cref" 
                                        onChange={(e)=> setCref(e.target.value)} />
                                </div>

                                <div class="row">
                                    <label>Telefone</label>
                                    <input 
                                        type="text" 
                                        id="telefone" 
                                        name="telefone" 
                                        onChange={(e)=> setTelefone(e.target.value)} />
                                </div>

                                <div class="row">
                                    <label>Ministra aulas de: </label>
                                    <select name="dropvalue" id="dropvalue"  onChange={(e)=> setDropvalue(e.target.value)} >
                                        <option value="musculacao">musculação</option>
                                        <option value="danca">danca</option>
                                        <option value="step">step</option>
                                        <option value="yoga">yoga</option>
                                    </select>
                                </div>
                                <div class="buttons">

                                    <input type="reset"  name="b2" value="Limpar"/>
                                    <button type="submit" name="b1" >enviar</button>
                                </div>

                        </form>

                </div>

                <a href="/operarprofessor">
                    <label class="buttonlogin">voltar</label>
                </a>
    </div>
  
    )
}

export default ProfessorCadpage;
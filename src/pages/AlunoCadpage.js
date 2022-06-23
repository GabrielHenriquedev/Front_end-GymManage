import React, {useState} from "react"
import HeaderLogin from '../static/Header/HeaderLogin';
import '../css/CadPageCss.css';
import axios from "axios";
import {useNavigate} from 'react-router-dom'
function AlunoCadpage(){

    const [nome,setNome]= useState("");
    const [sobrenome,setSobrenome]= useState("");
    const [email,setEmail]= useState("");
    const [cpf,setCpf]= useState("");
    const [telefone,setTelefone]= useState("");
    const [peso,setPeso]= useState("");
    const [altura,setAltura]= useState("");
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
        email,
        cpf,
        telefone,
        peso,
        altura,
        dropvalue

      }



    return (
        <div>
            <HeaderLogin/>
                    <div class="conteiner">
                        <form class="Cadastro" onSubmit={handleSubmit} >
                                <h1 class="titulo">Cadastro aluno</h1>
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
                                    <label>Telefone</label>
                                    <input 
                                        type="text" 
                                        id="telefone" 
                                        name="telefone" 
                                        onChange={(e)=> setTelefone(e.target.value)} />
                                </div>
                                <div class="row">
                                    <label>Peso</label>

                                    <input 
                                        type="text" 
                                        id="peso" 
                                        name="peso" 
                                        placeholder="peso"
                                        onChange={(e)=> setPeso(e.target.value)}  />

                                    <label>Altura</label>

                                    <input 
                                        type="text" 
                                        id="altura" 
                                        name="altura" 
                                        placeholder="Altura" 
                                        onChange={(e)=> setAltura(e.target.value)} />
                                </div>

                                <div class="row">
                                    <label>Escolha o plano: </label>
                                        <select name="dropvalue" id="dropvalue"  onChange={(e)=> setDropvalue(e.target.value)} >
                                            <option value="basic">basic</option>
                                            <option value="intermedium">intermedium</option>
                                            <option value="Advanced">Advanced</option>
                                            <option value="Premium">Premium</option>
                                        </select>
                                </div>
                                <div class="buttons">

                                    <input type="reset"  name="b2" value="Limpar"/>
                                    <button type="submit" name="b1">enviar</button>
                                </div>

                        </form>

                </div>

                <a href="/operaraluno">
                    <label class="buttonlogin">voltar</label>
                </a>
    </div>
  
    )
}

export default AlunoCadpage;
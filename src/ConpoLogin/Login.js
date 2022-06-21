import '../css/login.css';
import React, {useState,useContext} from "react"
import Header from '../static/Header/Header';

import { AuthContext } from '../context/auth';

function Login(){

  const {authenticated,login}= useContext(AuthContext);
  
  const [email,setEmail]= useState("");
  const [senha,setSenha]= useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit",email,senha)
    login(email,senha)
  }
 
    return (
     <div>
       <Header/>
               <div className="container">
                  
                  <h1>Login</h1>
                  <p>{String(authenticated)}</p>
                    
                      <form className="login-form" onSubmit={handleSubmit} >

                        <div className="login-form-group">
                            <input 
                                name="email" 
                                className="form-field" 
                                placeholder="Email" 
                                value={email} 
                                onChange={(e)=> setEmail(e.target.value)} />                     
                        </div>
                      
                        <div className="form-group">
                            <input 
                                name="password" 
                                type="password" 
                                className="form-field" 
                                placeholder="Senha" 
                                value={senha} 
                                onChange={(e)=> setSenha(e.target.value)}/>
                        </div>
                        <br />
                            <button 
                                className="button"
                                type="submit">
                                      Login
                            </button>
                      </form>
                  
                </div>
                </div>
      );
}

export default Login;
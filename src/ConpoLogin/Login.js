import '../css/login.css';
import React, {useState,useContext} from "react"
import { validEmail, validPassword } from "../utils/regex";
import { AuthContext } from '../context/auth';
import HeaderLogin from '../static/Header/HeaderLogin';

function Login(){

  const {authenticated,login}= useContext(AuthContext);
  
  const [email,setEmail]= useState("");
  const [senha,setSenha]= useState("");

  const [emailErr,setEmailErr]= useState("");
  const [senhaErr,setSenhaErr]= useState("");

  const validate = () => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    if (!validPassword.test(senha)) {
      setSenhaErr(true);
    } else {
      setSenhaErr(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit",email,senha)
    login(email,senha)
  }
 
    return (
     <div>
       <HeaderLogin/>
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
                        {emailErr && <p>Por favor digete um email valido!</p>}
                      
                        <div className="form-group">
                            <input 
                                name="password" 
                                type="password" 
                                className="form-field" 
                                placeholder="Senha" 
                                value={senha} 
                                onChange={(e)=> setSenha(e.target.value)}/>
                        </div>
                        {senhaErr && <p>Por favor digete um email valido!</p>}
                        <br />
                            <button 
                              onClick={validate}
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
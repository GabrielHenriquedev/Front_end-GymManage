import './Header.css'
import React, { useContext } from "react";
import { AuthContext } from '../../context/auth';

function HeaderLogin (){
    const {logout} = useContext(AuthContext);

    const handleLogout =()=>{
        logout();

    }

    return (
        <div>
           
                    <header>
                        <nav>
                            <label className="logo"> GenGym</label>
                            <button onClick={handleLogout}>Sair</button>
                        </nav>
                    </header>
          
        </div>

    )

}

export default HeaderLogin;
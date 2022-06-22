import { useContext } from "react";
import{
    BrowserRouter as Router,
    Route, 
    Routes,
    Navigate
}from "react-router-dom"
import Login from './ConpoLogin/Login';
import { AuthContext, Authprovaider } from "./context/auth";
import Choicespage from "./pages/Choicespage";
import Contatopage from "./pages/Contatopage";
import Homepage from "./pages/Homepage";
import Parceriaspage from "./pages/Parceriaspage";
import ProfessorCadpage from "./pages/ProfessorCadpage";
import ProfessorChoicespage from "./pages/ProfessorChoicespage";
import ProfessorListpage from "./pages/ProfessorListpage";
import Sobrepage from "./pages/Sobrepage";



function AppRouter (){
    const Private =({ children }) =>{
        const { authenticated, loading} = useContext(AuthContext);

        if(loading){
            return <div className="loading">Carregando ...</div>
        }
        if(!authenticated){
            return <Navigate to= "/login" />
        }
    
        return children;
    }
    
    return(
        <Router>
            <Authprovaider>
            <Routes>
                <Route 
                    exact 
                    path="/login" 
                    element={<Login />
                }/>

                <Route 
                    exact
                    path="/"  
                    element={  <Homepage /> 
                }/>

                <Route 
                    exact
                    path="/sobre"  
                    element={  <Sobrepage /> 
                }/>

                <Route 
                    exact
                    path="/contato"  
                    element={  <Contatopage /> 
                }/>

                <Route 
                    exact
                    path="/parcerias"  
                    element={  <Parceriaspage /> 
                }/>

                <Route 
                    exact
                    path="/escolhas"  
                    element={ <Private> <Choicespage /> </Private>
                }/>

                <Route 
                    exact
                    path="/operarprofessor"  
                    element={ <Private> <ProfessorChoicespage /> </Private>
                }/>
                <Route 
                    exact
                    path="/prof_cadastro"  
                    element={ <Private> <ProfessorCadpage/> </Private>
                }/>
                 <Route 
                    exact
                    path="/prof_list"  
                    element={ <Private> <ProfessorListpage/> </Private>
                }/>
            </Routes>
            </Authprovaider>
        </Router>
    )
}
export default AppRouter;
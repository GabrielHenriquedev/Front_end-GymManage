import { useContext } from "react";
import{
    BrowserRouter as Router,
    Route, 
    Routes,
    Navigate
}from "react-router-dom"
import Login from './ConpoLogin/Login';
import { AuthContext, Authprovaider } from "./context/auth";
import Contatopage from "./pages/Contatopage";
import Homepage from "./pages/Homepage";
import Parceriaspage from "./pages/Parceriaspage";
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
                    element={ <Private> <Homepage /> </Private>
                }/>

                <Route 
                    exact
                    path="/sobre"  
                    element={ <Private> <Sobrepage /> </Private>
                }/>

                <Route 
                    exact
                    path="/contato"  
                    element={ <Private> <Contatopage /> </Private>
                }/>

                <Route 
                    exact
                    path="/parcerias"  
                    element={ <Private> <Parceriaspage /> </Private>
                }/>
            </Routes>
            </Authprovaider>
        </Router>
    )
}
export default AppRouter;
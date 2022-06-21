import logoacademia from '../img/fotos-logo-academia-300x178.png'
import fotologo from '../img/thumbnail_LOGO-ACADEMIA-1.png'
import foto from '../img/foto.png'
import '../css/ParceriasPageCss.css';
import Header from '../static/Header/Header';

function Parceriaspage(){
    return(
        <div>
         <Header/>
            <div id="Logos">
                <div class="container-logos">
                    <div class="container-logos-imagem">
                        
                            <div class="container-imagem">
                                <img src={logoacademia} alt=""/>
                                <h2>Vivavida</h2>
                                
                            </div>
        
                            <div class="container-imagem">
                                <img src={fotologo} alt=""/>
                                    <h2>AcademiaMP</h2>                      
                            </div>

                            <div class="container-logos-imagem">
                                <div class="container-imagem">
                                    <img src={foto} alt=""/>
                                        <h2>academia</h2>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Parceriaspage;
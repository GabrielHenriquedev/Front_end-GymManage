import Header from "../static/Header/Header";
import '../css/ContatoPageCss.css';



function Contatopage(){
    return(
        <div>
            <Header />

            <div class="table">
                <table class="dados">
                    <thead>
                        <tr>
                            <th>Telefones</th>
                            <th>Nomes</th>
                            <th>Emails</th>
                            <th>setor</th>
                
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>(91) 3329-5281</td>
                            <td>Melyssa Macieira</td>
                            <td>melyssa_macieira@yahoo.com</td>
                            <td>Administração</td>
                        </tr>

                        <tr>
                            <td>(81) 2544-1102</td>
                            <td>Barbara Boto</td>
                            <td>barbara.metz@gmail.com</td>
                            <td>gerencia</td>
                
                        </tr>

                        <tr>
                            <td>(81) 2544-1102</td>
                            <td>Eli Leite </td>
                            <td>eli90@hotmail.com</td>
                            <td>desenvolvedor(a)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.05291678954!2d-34.842475784690095!3d-7.993472581941154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab3d477f1b3d83%3A0x9af8293ed7b76e28!2sShopping%20Patteo%20Olinda!5e0!3m2!1spt-BR!2sbr!4v1642508787521!5m2!1spt-BR!2sbr" width="1895" height="400"  allowfullscreen="" title="map" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default Contatopage;
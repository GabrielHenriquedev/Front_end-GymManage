import './Header.css'

function Header (){

    return (
        <div>
           
                    <header>
                        <nav>
                            <label className="logo"> GenGym</label>
                            <ul className="nav-list" >
                                <li><a href="/">Início</a></li>
                                <li><a href="/sobre">Sobre</a></li>
                                <li><a href="/contato">Contato</a></li>
                                <li><a href="/parcerias">Parcerias</a></li>
                            </ul>
                        </nav>
                    </header>
          
        </div>

    )

}

export default Header;
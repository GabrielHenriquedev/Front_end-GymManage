import Header from '../static/Header/Header';
import '../css/HomePageCss.css';
import Img2 from '../img/img2.jpg'
import Img1 from '../img/img1.jpg'
import Img3 from '../img/img3.jpg'
import Img4 from '../img/img4.jpg'
function Homepage (){

    return (
       <div>
            <Header/>
            <div id="slider">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <input 
                    type="radio" 
                    name="slider" 
                    id="slide1" 
                    checked/>

                <input 
                    type="radio" 
                    name="slider" 
                    id="slide2"/>

                <input 
                    type="radio" 
                    name="slider" 
                    id="slide3"/>

                <input type="radio" 
                    name="slider" 
                    id="slide4"/>

                <div id="slides">
                    <div id="carossel">
                        <div class="inner">

                            <div class="slide slide_1">
                                <div class="slide-content">
                                    <img src={Img2} alt=""/>
                                </div>
                            </div>

                            <div class="slide slide_2">
                                <div class="slide-content">
                                    <img src={Img1} alt=""/>
                                </div>
                            </div>

                            <div class="slide slide_3">
                                <div class="slide-content">
                                    <img src={Img3} alt=""/>
                                </div>
                            </div>

                            <div class="slide slide_4">
                                <div class="slide-content">
                                    <img src={Img4} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="controls">
                    <label for="slide1"></label>
                    <label for="slide2"></label>
                    <label for="slide3"></label>
                    <label for="slide4"></label>
                </div>

                <div id="bullets">
                    <label for="slide1"></label>
                    <label for="slide2"></label>
                    <label for="slide3"></label>
                    <label for="slide4"></label>
                </div>

                <div class="conteudos">

                    <div class="texto1">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nihil pariatur modi rem quis eos, inventore, et minus ex sapiente id incidunt nemo maiores culpa repellat cupiditate suscipit? Quia voluptatem soluta sunt minus magnam consequatur iure praesentium, perspiciatis corrupti reiciendis atque dolore ad quis rem ratione. Est ad quos veniam culpa autem nesciunt mollitia. Ratione veritatis, a natus commodi unde, provident aspernatur ullam necessitatibus voluptas amet eligendi eveniet possimus tempora, ipsa repellendus fuga itaque sequi accusamus quae officiis. Reprehenderit cumque officiis, minima iusto magni exercitationem autem, pariatur repellendus voluptate quisquam dolor quod enim accusantium ipsa sequi esse, earum laborum hic?</p>
                    </div>

                        <a href="/login">
                            <label class="buttonlogin">iniciar uma sessão</label>
                        </a>

                </div>
            </div>


            </div>

            
     
        
    )
}

export default Homepage;
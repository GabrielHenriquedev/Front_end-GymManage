import Img1 from '../img/img1.jpg'
import Img2 from '../img/img2.jpg'
import calendario from '../img/calendario.jpg'
import Pvd from '../img/pdvSAMS6-1920x1080.png'
import Header from '../static/Header/Header'
import '../css/SobrePageCss.css';
function Sobrepage (){
    return (
        <div>
            <Header />
               <div class="conteiner">
                    <h1 class="text">A idéia por trás do projeto, e um sistema de gerenciamento de academia onde o proprietário de uma academia possa cadastrar seus alunos e gerenciar coisas como data de pagamento, horários, pagamentos e etc.</h1><br />

                    <p class="text1" > <img alt="" class="img" src={Img1} />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis pariatur, aliquid eaque iure minima facere id non, ut magni maiores commodi nam fugiat voluptatum. Accusantium cum distinctio illum architecto reiciendis soluta nihil sapiente iusto. Ratione, eaque! Nobis eum soluta, nostrum veniam officiis ex distinctio quibusdam et deleniti eligendi eos. Fuga excepturi neque, labore sed expedita ducimus veniam laborum. Minus suscipit ab in modi alias doloremque nostrum, beatae explicabo reiciendis ut dolore quam illum possimus velit hic quas voluptatem veritatis eum. Temporibus sed magni ducimus et nisi illo, ea dignissimos ad numquam officia alias molestias commodi explicabo quos repellendus tenetur vitae.<br />
                    </p>

                    <p class="text1" > <img alt="" class="img" src={Img2}/>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis pariatur, aliquid eaque iure minima facere id non, ut magni maiores commodi nam fugiat voluptatum. Accusantium cum distinctio illum architecto reiciendis soluta nihil sapiente iusto. Ratione, eaque! Nobis eum soluta, nostrum veniam officiis ex distinctio quibusdam et deleniti eligendi eos. Fuga excepturi neque, labore sed expedita ducimus veniam laborum. Minus suscipit ab in modi alias doloremque nostrum, beatae explicabo reiciendis ut dolore quam illum possimus velit hic quas voluptatem veritatis eum. Temporibus sed magni ducimus et nisi illo, ea dignissimos ad numquam officia alias molestias commodi explicabo quos repellendus tenetur vitae.<br />
                    </p>
                
                    <p class="text1" > <img alt="" class="img" src={calendario}/>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis pariatur, aliquid eaque iure minima facere id non, ut magni maiores commodi nam fugiat voluptatum. Accusantium cum distinctio illum architecto reiciendis soluta nihil sapiente iusto. Ratione, eaque! Nobis eum soluta, nostrum veniam officiis ex distinctio quibusdam et deleniti eligendi eos. Fuga excepturi neque, labore sed expedita ducimus veniam laborum. Minus suscipit ab in modi alias doloremque nostrum, beatae explicabo reiciendis ut dolore quam illum possimus velit hic quas voluptatem veritatis eum. Temporibus sed magni ducimus et nisi illo, ea dignissimos ad numquam officia alias molestias commodi explicabo quos repellendus tenetur vitae.<br />
                    </p>
     

                    <p class="text1" > <img alt="" class="img" src={Pvd}/>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis pariatur, aliquid eaque iure minima facere id non, ut magni maiores commodi nam fugiat voluptatum. Accusantium cum distinctio illum architecto reiciendis soluta nihil sapiente iusto. Ratione, eaque! Nobis eum soluta, nostrum veniam officiis ex distinctio quibusdam et deleniti eligendi eos. Fuga excepturi neque, labore sed expedita ducimus veniam laborum. Minus suscipit ab in modi alias doloremque nostrum, beatae explicabo reiciendis ut dolore quam illum possimus velit hic quas voluptatem veritatis eum. Temporibus sed magni ducimus et nisi illo, ea dignissimos ad numquam officia alias molestias commodi explicabo quos repellendus tenetur vitae.<br />
                    </p>

                </div>
      </div> 
    )
}

export default Sobrepage;
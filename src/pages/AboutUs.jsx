import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/AboutUs.scss";

const AboutUs = () => {
    return(
     <body>
            <div className='todo'>

            <div className='containerpic'>
                <figure>
                    <img 
                    src="https://images.pexels.com/photos/7048259/pexels-photo-7048259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="mano sosteniendo una hoja de árbol" />
                </figure>
            </div>

            <div className='main'> 
            <article>
            <h1>
                Planeta "A", una oportunidad para ayudar al medioambiente
            </h1>
            <p className='first'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minus ut velit magni illum inventore, cum corrupti ipsam ea
                 illo dicta culpa nisi libero, itaque, voluptate alias qui. Amet, enim! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minus 
                 ut velit magni illum inventore, cum corrupti ipsam ea illo dicta culpa nisi libero, itaque, voluptate alias qui. Amet, enim! Lorem ipsum dolor 
                 sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ab fuga eius alias porro, voluptatum facere qui voluptatibus tempora 
                 praesentium deleniti aperiam? Molestiae, voluptatem esse. Consectetur incidunt dolores ipsam modi. Lorem ipsum dolor sit amet, consectetur adipisicing 
                 elit. Voluptas voluptates dignissimos labore earum unde molestiae suscipit quaerat nostrum dicta, possimus doloribus voluptatibus provident odio beatae 
                 nulla cupiditate magnam commodi! Ex! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi ratione voluptas corrupti autem error id neque quia 
                 accusamus, minima, tenetur repellendus repellat, voluptatem deserunt eaque nemo alias enim itaque quidem? Lorem ipsum dolor sit amet consectetur, 
                 adipisicing elit. Earum inventore itaque velit. Ipsam quod porro impedit nam iure possimus omnis ipsum, totam perspiciatis consequuntur praesentium 
                 voluptatibus doloremque recusandae quam? Cupiditate!
            </p>
            </article>
            <form action="/">
            <Link to="/ProductList">
            <button type="submit">QUIERO COMPRAR</button>
            </Link>                
            </form>
            </div>
            </div>
</body>
    );
}

export default AboutUs;
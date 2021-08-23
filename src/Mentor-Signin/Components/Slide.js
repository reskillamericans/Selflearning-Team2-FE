import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import Elizabeth from './images/Elizabeth.png';
import Jeremiah from './images/Jeremiah.png';
import Jane from './images/Jane.png';
import Lana from './images/Lana.png';
import Dorothy from './images/Dorothy.png'; 

const breakPoints = [ 
    {width: 1200,itemsToShow:3}, //when width is 300px show 3 slide items
    
]

function Slide(){ 
    return( 
        <>
            <Carousel breakPoints={breakPoints} >  
                         
                         <a href="Student"><div>
                            <img src={Elizabeth} alt="Elizabeth" className="imageSlider" />
                            <figcaption>Elizabeth</figcaption>
                            </div></a>
    
                            <a href="Student"><div>
                            <img src={Jeremiah} alt="Jeremiah" className="imageSlider"/>
                            <figcaption>Jeremiah</figcaption>
                            </div></a>
    
                            <a href="Student"><div>
                            <img src={Jane} alt="Jane" className="imageSlider"/>
                            <figcaption>Jane</figcaption>
                            </div></a>
                            
                           
                            <a href="Student"><div>
                            <img src={Lana} alt="Lana"/>
                            <figcaption>Lana</figcaption>
                            </div></a>
    
                            <a href="Student"><div>
                            <img src={Dorothy} alt="Dorothy"/>
                            <figcaption>Dorothy</figcaption>
                            </div></a>
                            
                        </Carousel>
        </>
    )
}


export default Slide
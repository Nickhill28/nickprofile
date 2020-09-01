import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';    
export class Owlcarouse extends Component {  
    
            render()  
    
            {  
    
              return (    
    
           <div class='container-fluid' >            
    
            <OwlCarousel items={3} className="owl-theme" loop margin={8} autoplay={true}>  
    
               <div ><img  className="img" src= {"./images/Services/content.jpg"} alt="Content Creation" /></div>  
    
               <div><img  className="img" src= {'./images/Services/web.jpg'} alt="Web Development" /></div>  
    
               <div><img  className="img" src= {'./images/Services/brand.jpg'} alt="Branding" /></div>  
    
               <div><img  className="img" src= {'./images/Services/ml.jpg'} alt="Machine Learning"/></div>  
    
               <div><img className="img" src= {'./images/Services/design.jpg'} alt="Graphic Designing"/></div>  
    
               <div><img className="img" src= {'./images/Services/analysis.jpg'} alt="Data Analysis"/></div>  
     
    
          </OwlCarousel>  
          </div>  
    
              )  
    
            }  
    
          }  
    
            
    
      
    
    export default Owlcarouse
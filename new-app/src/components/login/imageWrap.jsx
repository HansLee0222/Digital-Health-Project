import React from 'react';
import Alyssa from '../../images/Alyssa.jpg'
import Sam from '../../images/Sam.jpg'
import Henry from '../../images/Henry.jpg'
import SamL from '../../images/Sam-L.png'
import Dimas from '../../images/Dimas.jpg'
import Keatton from '../../images/Ketton.jpg'
import Phone1 from '../../images/phone1.jpg'
import Phone2 from '../../images/phone2.jpg'
import Phone3 from '../../images/phone3.jpg'
import Phone4 from '../../images/phone4.jpg'
import Phone5 from '../../images/phone5.jpg'
import Phone6 from '../../images/phone6.jpg'
import Phone7 from '../../images/phone7.jpg'
export class ImageWrap extends React.Component {
    constructor(props) {
        super(props);
    }
    render()
    {
        return(

            <div className='row' >
            <div className='column'>
              <img className='p2' src={Phone7} alt = "background collage"/>
              <img className='Henry' src={Henry} alt = "background collage" />
              <img className='p5' src={Phone5} alt = "background collage"/>
              <img className='Sam' src={Sam} alt = "background collage"/>
              <img className='p6' src={Phone6} alt = "background collage"/>
              <img className='Sam' src={Sam} alt = "background collage"/>
            </div>
            <div className='column'>
              <img className='p6' src={Phone6} alt = "background collage"/>
              <img className='Dimas' src={Dimas} alt = "background collage"/>
              <img className='Sam' src={Sam} alt = "background collage"/>
            </div>
            <div className='column'>
              <img className='p5' src={Phone5} alt = "background collage"/>
              <img className='SamL' src={SamL} alt = "background collage"/>
              <img className='p4' src={Phone4} alt = "background collage"/>
              <img className='Dimas' src={Dimas} alt = "background collage"/>
            </div>
            <div className='column'>
              <img className='p1' src={Phone1} alt = "background collage"/>
              <img className='Sam' src={Sam} alt = "background collage"/>
              <img className='Keatton' src={Keatton} alt = "background collage"/>
              <img className='p6' src={Phone6} alt = "background collage"/>
              <img className='Sam' src={Sam} alt = "background collage"/>
            </div>
            <div className='column'>
              <img className='Alyssa' src={Alyssa} alt = "background collage"/>

              <img className='p41' src={Phone4} alt = "background collage"/>
              <img className='p6' src={Phone6} alt = "background collage"/>
              <img className='Henry' src={Henry} alt = "background collage"/>
              <img className='p5' src={Phone5} alt = "background collage"/>

              <img className='Sam' src={Sam} alt = "background collage"/>
              <img className='Keatton' src={Keatton} alt = "background collage"/>
            </div>
            <div className='column'>
              <img className='Keatton' src={Keatton} alt = "background collage"/>
              <img className='p3' src={Phone3} alt = "background collage"/>
              <img className='SamL' src={SamL} alt = "background collage"/>
              <img className='p1' src={Phone1} alt = "background collage"/>
              <img className='Dimas' src={Dimas} alt = "background collage"/>
              <img className='Alyssa' src={Alyssa} alt = "background collage"/>
              <img className='p2' src={Phone2} alt = "background collage"/>
            </div>

          </div>








    )}

}
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
              <img className='p2' src={Phone7} />
              <img className='Henry' src={Henry} />
              <img className='p5' src={Phone5} />
              <img className='Sam' src={Sam} />
              <img className='p6' src={Phone6} />
              <img className='Sam' src={Sam} />
            </div>
            <div className='column'>
              <img className='p6' src={Phone6} />
              <img className='Dimas' src={Dimas} />
              <img className='Sam' src={Sam} />
            </div>
            <div className='column'>
              <img className='p5' src={Phone5} />
              <img className='SamL' src={SamL} />
              <img className='p4' src={Phone4} />
              <img className='Dimas' src={Dimas} />
            </div>
            <div className='column'>
              <img className='p1' src={Phone1} />
              <img className='Sam' src={Sam} />
              <img className='Keatton' src={Keatton} />
              <img className='p6' src={Phone6} />
              <img className='Sam' src={Sam} />
            </div>
            <div className='column'>
              <img className='Alyssa' src={Alyssa} />

              <img className='p41' src={Phone4} />
              <img className='p6' src={Phone6} />
              <img className='Henry' src={Henry} />
              <img className='p5' src={Phone5} />

              <img className='Sam' src={Sam} />
              <img className='Keatton' src={Keatton} />
            </div>
            <div className='column'>
              <img className='Keatton' src={Keatton} />
              <img className='p3' src={Phone3} />
              <img className='SamL' src={SamL} />
              <img className='p1' src={Phone1} />
              <img className='Dimas' src={Dimas} />
              <img className='Alyssa' src={Alyssa} />
              <img className='p2' src={Phone2} />
            </div>

          </div>








    )}

}
import React from "react";
import BigAnimalCard from "./BigAnimalCard";
 import Ellipse from "./Ellipse";
 import MoreButton from "./MoreButton";
 import SmallAnimalCard from "./SmallAnimalCard";
 import Title from "./Title";
 import catImage from '../images/cat_image.jpg'
 import catImage2 from '../images/cat2.jpg'
 import dogImage from '../images/dog-5357794_1280.jpg'
 import dogImage2 from '../images/dog2.jpg'

export default function Animals()
{
    
    return (
        <>
            <div className="animals-desk">
                <div className="animal-frame">
                    <div className="animal-frame-row-1">
                    <BigAnimalCard id='1' background={catImage} name='Rex' text='keverék, 4 hónapos' />
                    <BigAnimalCard id='2' background={dogImage} name='Bloki' text='faj, 4 hónapos' />
                    <BigAnimalCard id='3' background={catImage2} name='Retek' text='keverék, 4 hónapos' />
                    <BigAnimalCard id='4' background={dogImage2} name='Gombóc' text='faj, 4 hónapos' />
                    <BigAnimalCard id='5' background={catImage2} name='Szotyi' text='keverék, 4 hónapos' />
                    <BigAnimalCard id='6' background={dogImage2} name='Bloki' text='faj, 4 hónapos' />
                    <BigAnimalCard id='7' background={catImage} name='Nyomi' text='keverék, 4 hónapos' />
                    <BigAnimalCard id='8' background={dogImage} name='Nyomi' text='faj, 4 hónapos' />
                    </div>
                </div>
                <MoreButton className='animals'/>
                <button className="animal-search-button">
                    <p className="search-button-text">Részletes keresés</p>
                </button>
                <div className="dropdown-1">
                <p className="dropdown-text">Kor</p>
                    <i className="fa-solid fa-caret-down"></i>
                </div>
                <div className="dropdown-2">
                    <p className="dropdown-text">Állat</p>
                    <i className="fa-solid fa-caret-down"></i>
                </div>
            </div>

        
         <div className="animals">
             <div className="flex-dropdown">
          </div>   
             <div className="animals-frame">
             <div className="animals-adopt">
                     <Title title='Adoptáció'/>
                     <MoreButton className=""/> 
                 </div>
                     <Ellipse name='mobile-slider-1'/>
                     <div className="small-animal-cards">
                     <SmallAnimalCard text="Kutya"/>
                     <SmallAnimalCard text="Cica"/>
                    <SmallAnimalCard text="Nyúl"/>
                     <SmallAnimalCard text="Madár"/>
                     </div>
                 </div>
                 <div className="big-animal-cards-1">
                     <BigAnimalCard id='1' background={catImage} name='Nyomi' text='keverék, 4 hónapos' />
                     <BigAnimalCard id='2' background={dogImage} name='Bloki' text='faj, 4 hónapos' />
                     <BigAnimalCard id='3' background={catImage} name='Nyomi' text='keverék, 3 hónapos' />
                     <BigAnimalCard id='4' background={catImage} name='Nyomi' text='keverék, 3 hónapos' />
                 </div>
         </div>
         </>
    )

        
}
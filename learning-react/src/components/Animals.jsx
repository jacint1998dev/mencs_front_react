import React from "react";
import BigAnimalCard from "./BigAnimalCard";
 import Ellipse from "./Ellipse";
 import MoreButton from "./MoreButton";
 import SmallAnimalCard from "./SmallAnimalCard";
 import Title from "./Title";
 import catImage from '../images/cat_image.jpg'
 import dogImage from '../images/dog-5357794_1280.jpg'

export default function Animals()
{
    
    return (
        <>
            <div className="animals-desk">
                <div className="animal-frame">
                    <div className="animal-frame-row-1">
                    <BigAnimalCard background={catImage} name='Nyomi' text='keverék, 4 hónapos' />
                    <BigAnimalCard background={dogImage} name='Bloki' text='faj, 4 hónapos' />
                    <BigAnimalCard background={catImage} name='Nyomi' text='keverék, 4 hónapos' />
                    <BigAnimalCard background={dogImage} name='Bloki' text='faj, 4 hónapos' />
                    </div>
                    <div className="animal-frame-row-2">
                    <BigAnimalCard background={catImage} name='Nyomi' text='keverék, 4 hónapos' />
                    <BigAnimalCard background={dogImage} name='Bloki' text='faj, 4 hónapos' />
                    <BigAnimalCard background={catImage} name='Nyomi' text='keverék, 4 hónapos' />
                    <BigAnimalCard background={dogImage} name='Bloki' text='faj, 4 hónapos' />
                    
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
                     <BigAnimalCard background={catImage} name='Nyomi' text='keverék, 4 hónapos' />
                     <BigAnimalCard background={dogImage} name='Bloki' text='faj, 4 hónapos' />
                     <BigAnimalCard background={catImage} name='Nyomi' text='keverék, 3 hónapos' />
                     <BigAnimalCard background={catImage} name='Nyomi' text='keverék, 3 hónapos' />
                 </div>
         </div>
         </>
    )

        
}
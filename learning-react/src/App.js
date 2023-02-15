import './App.css';
import React from 'react';
import Menu from './components/Menu'
import Hero from './components/Hero'
import Animals from './components/Animals'
import Shelter from './components/Shelter'
import Doctor from './components/Doctor'
import Footer from './components/Footer'
import Boarding from './components//Boarding';
import Paws from './components/Paws';

export default function App() {
  return (
   <>
     <Menu/>
     <div className='main--landing'>
      <div className='flex flex--center flex--column m--25'>
    <Hero/>
    <Animals/>
    <Shelter/>
    <Doctor/>
    <Boarding/>
    <Paws/>
    </div>
    <Footer/>
    </div>
    </>
  );
}



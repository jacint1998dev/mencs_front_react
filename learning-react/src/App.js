import './App.css';
import Menu from './components/Menu'
import React from 'react';
import Hero from './components/Hero'
import Animals from './components/Animals'
import Shelter from './components/Shelter'
import Doctor from './components/Doctor'
import Footer from './components/Footer'
import Boarding from './components/Boarding';
import Paws from './components/Paws';

export default function App() {
  return (
   <>
     <Menu/>
    <Hero/>
    <Animals/>
    <Shelter/>
    <Doctor/>
    <Boarding/>
    <Paws/>
    <Footer/>  
   </>
  );
}



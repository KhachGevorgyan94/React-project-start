import React from "react";
import Header from './components/header'
import Section from "./components/section"
import MainSection from './components/mainsection'
import Footer from './components/footer'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Section/>
      <MainSection/>
     
      <Footer/>
     
    </div>
  )
}

export default App;
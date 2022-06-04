import React from "react";
import Header from './components/hedaer'
import Footer from "./components/footer";
import './App.css';
import MainSection from "./components/section";


function App() {
  return (
    <div className="App">
      <Header/>
      <MainSection  />
      <Footer/>
    </div>
  );
}

export default App;

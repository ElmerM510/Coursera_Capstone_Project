import './App.css';
import React from 'react';
//import { ReactFragment } from 'react';
import Nav from "./components/Nav";
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return(
    <div className='container'>
      <Nav/>
      <Header/>
    </div>
  )
}
export default App;

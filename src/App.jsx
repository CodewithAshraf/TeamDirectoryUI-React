import React from 'react';
import Card from '../src/Components/Card'
import './App.css';

function App() {
  return (
    <>
    <h1 className='title'>Team Directory</h1>

    <div className="parent">
      <Card rating={5.1} name="Alexander"  bio="Lorem ipsum is dummy placeholder text used in design, ." image="https://i.pinimg.com/736x/25/c5/cd/25c5cd87158423ffbc6cb6c25aea9817.jpg"/>
      <Card rating={3.2} name="Fernandez" bio="Lorem ipsum is dummy placeholder text used in design, ." image="https://i.pinimg.com/736x/f3/74/41/f3744125a88d0ea0a9ee053987587382.jpg"/>
      <Card rating={3.9} name="Zayn"  bio="Lorem ipsum is dummy placeholder text used in design, ." image="https://i.pinimg.com/736x/d3/2e/78/d32e783c09c69611f74b912bc0c3f522.jpg"/>
      <Card rating={.9} name="Lucia"  bio="Lorem ipsum is dummy placeholder text used in design, ." image="https://i.pinimg.com/736x/cb/2f/e4/cb2fe44984644ba0f7f25bfb82535106.jpg"/>
    </div>

    </>
  );
  
}

export default App;

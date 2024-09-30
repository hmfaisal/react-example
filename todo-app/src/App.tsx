import React, { useState } from 'react'
import InputField from './components/InputField'
import Items from './components/Items'

import { ItemProvider } from './context/ItemContext'

import './App.css'

const App:React.FC = () =>{
  return(
    <ItemProvider>
      <div className='App'>
        <h2>Item List:</h2>
        <InputField />
        <Items />
      </div>
    </ItemProvider>
  );
}

export default App


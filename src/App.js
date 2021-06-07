import React, { useState } from 'react';
import './App.css';
import Artists from './Artists';
import Recognizer from './Recognizer';

function App() {
  // state for image and guitar kind 
  const [imageURL, setImageURL] = useState('');
  const [guitarKind, setGuitarKind] = useState('Default');

  return (
    <div className="App">
        <center>
            <Recognizer 
                imageURL={imageURL}  
                setImageURL={setImageURL} 
                guitarKind={guitarKind} 
                setGuitarKind={setGuitarKind}
            />
            <Artists 
                guitarKind={guitarKind} 
            />
        </center>   
    </div>
  );
}

export default App;

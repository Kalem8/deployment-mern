import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState('');

  async function fetchInfo () {
    const url = `${process.env.REACT_APP_API_URL}/test`;
    const response = await fetch(url);
    const json = await response.json();
    setResult(json.body);
  }

  return (
   <div>
    <button onClick={fetchInfo} >Récupères les informations de l'API</button>
    <div>resultats: {result} </div>
   </div>
  );
}

export default App;

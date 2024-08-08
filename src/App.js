import React, { useEffect, useState } from 'react';
import './index.css';
import './App.css';

function App() {
  const [rick, setRick] = useState([]); 

  useEffect(() => {
    let url = 'https://rickandmortyapi.com/api/character/?page=19';
  
    fetch(url)
      .then((r) => r.json())
      .then((json) => setRick(json.results)); 
  }, []);

  return (
  <div>
      <header>
        <strong className='titulo'>Rick and Morty</strong> 
      </header>
    <div class='container'>

      {rick.map((item) => (
        <article key={item.id} className='artigo_dois'>
          <strong className='subtitulo'>{item.name}</strong>
          <div className='artigo'> 
            <img src={item.image} alt={item.name} className='imagem' /> 
            <div class='especifico'>
            <p>Especie: {item.species}</p>
            <p>Status: {item.status}</p>
            <p>Tipo: {item.type}</p>
            </div>
          </div>
        
        </article>
      ))}
    </div>

  </div>
  );
}

export default App;

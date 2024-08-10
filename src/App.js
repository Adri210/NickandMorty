import React, { useEffect, useState } from 'react';
import './index.css';
import './App.css';

function App() {
  const [rick, setRick] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    let url = 'https://rickandmortyapi.com/api/character/?page=19';

    fetch(url)
      .then((r) => {
        if (!r.ok) {
          throw new Error('Erro ao buscar dados da API'); 
        }
        return r.json();
      })
      .then((json) => setRick(json.results))
      .catch((err) => setError('Ocorreu um erro ao carregar os personagens. Por favor, tente novamente.')); 
  }, []);

  
  const filteredRick = rick.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <header>
        <strong className='titulo'>Rick and Morty</strong>
        
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          <label htmlFor="name" className="form__label">Pesquisar</label>
        </div>
      
      </header>
      <div className="container">
        {error ? ( 
          <p class="error-message">{error}</p>
        ) : (
          filteredRick.map((item) => (
            <article key={item.id} className="artigo_dois">
              <strong className="subtitulo">{item.name}</strong>
              <div className="artigo">
                <img src={item.image} alt={item.name} className="imagem" />
                <div className="especifico">
                  <p>Especie: {item.species}</p>
                  <p>Status: {item.status}</p>
                  <p>Tipo: {item.type || 'Unknown'}</p>
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}

export default App;

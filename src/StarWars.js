import React, { useState, useEffect } from 'react';
import './App.css';
import ButtonComponent from './Button';
import TableComponent from './Table';

const StarWarsComponent = () => {
  const [people, setPeople] = useState([]);
  const [url, setUrl] = useState('https://swapi.dev/api/people');
  const [loading, setLoading] = useState(true);

  const getFromUrl = (url) => {
    fetch(url)
      .then(result => result.json())
      .then(result => {
        setPeople(result);
        setLoading(false);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getFromUrl(url);
  }, [url]);

  return (
    <div>
      {loading ? 
      (<div>
        Carregando
      </div>) :
      (<div>
          <h1>Tabela - Star Wars</h1>
          <div id="myTable" className="table">
              <TableComponent peopleData={people}/>
          </div>
          <br/>
          <ButtonComponent peopleData={people} updateUrl={setUrl}/>
          <p>Total da página: {people.results ? people.results.length : 0}</p>
          <p>Total: {people.count}</p>
      </div>)}
    </div>
  );

}

export default StarWarsComponent;
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Pokemon from './Pokemon';
import Header from './Header';
import Modal from './Modal';
import '../styles/App.css';
import shuffleArray from '../utils/shuffle';

function App() {
  const [pokesID, setPokesID] = useState(null);
  const [pokes, setPokes] = useState(null);
  const [points, setPoints] = useState(0);
  const [maxPoints, setMaxPoints] = useState(0);
  const [selectedPokes, setSelectedPokes] = useState([]);
  const [winner, setWinner] = useState(null);

  const apiURL = 'https://pokeapi.co/api/v2/pokemon';
  const NUM_POKES = 12;

  const restartGame = () => {
    setPoints(0);
    setSelectedPokes([]);
    setWinner(null);
  };

  const updateSelectedPokes = (pokeId) => {
    if (!selectedPokes.includes(pokeId)) {
      const newSelectedPokes = [...selectedPokes, pokeId];
      const newPoints = points + 1;
      setPoints(newPoints);

      if (newSelectedPokes.length === NUM_POKES) {
        setWinner(true);
      }
      setSelectedPokes(newSelectedPokes);
    } else {
      setWinner(false);
    }
  };

  //set pokemon array list with random ids
  useEffect(() => {
    const newPokesID = [];
    while (newPokesID.length < NUM_POKES) {
      const pokeID = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
      if (!newPokesID.includes(pokeID)) {
        newPokesID.push(pokeID);
      }
    }
    setPokesID(newPokesID);
  }, []);

  //fetch pokemon
  useEffect(() => {
    if (pokesID !== null) {
      Promise.all(
        pokesID.map((poke) =>
          fetch(`${apiURL}/${poke}`)
            .then((response) => response.json())
            .then((pokemon) => ({
              id: pokemon.id,
              name: pokemon.name,
              img: pokemon.sprites.other['official-artwork'].front_default,
              type: pokemon.types[0].type.name,
            }))
        )
      ).then((newPokes) => {
        setPokes(newPokes);
      });
    }
  }, [pokesID]);

  useEffect(() => {
    if (points > maxPoints) {
      setMaxPoints(points);
    }
  }, [points, maxPoints]);

  useEffect(() => {
    if (pokes) {
      setPokes(shuffleArray(pokes));
    }
  }, [selectedPokes]);

  return (
    <>
      {!pokes && (
        <div className='loading'>
          <h1>Loading...</h1>
          <img className='pokeball-svg' src='./pokeball.svg' />
        </div>
      )}
      {pokes && pokes.length > 10 && (
        <>
          <Header points={points} maxPoints={maxPoints} />
          <main>
            <div className='gameboard'>
              {pokes.map((poke) => {
                return (
                  <Pokemon
                    key={poke.id}
                    poke={poke}
                    updateSelectedPokes={updateSelectedPokes}
                  />
                );
              })}
            </div>
            {winner === false && (
              <Modal
                message='You lost!'
                points={points}
                restartGame={restartGame}
              />
            )}
            {winner && (
              <Modal
                message='You won!'
                points={points}
                restartGame={restartGame}
              />
            )}
          </main>
        </>
      )}
    </>
  );
}

export default App;

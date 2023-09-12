/* eslint-disable react/prop-types */
import '../styles/pokemon.css';

function Pokemon({ poke, updateSelectedPokes }) {
  return (
    <div
      className={`poke-card type-${poke.type}`}
      onClick={() => updateSelectedPokes(poke.id)}
    >
      <h2 className='poke-name'>{poke?.name}</h2>
      <img
        className='poke-img'
        src={poke.img}
        alt={`${poke?.name} Dream World image obtained from Poke API`}
        loading='lazy'
      />
    </div>
  );
}

export default Pokemon;

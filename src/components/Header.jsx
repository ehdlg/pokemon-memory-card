function Header({ points, maxPoints }) {
  return (
    <>
      <header>
        <h2>Points: {points}</h2>
        <h2>Max points: {maxPoints}</h2>
      </header>
    </>
  );
}

export default Header;

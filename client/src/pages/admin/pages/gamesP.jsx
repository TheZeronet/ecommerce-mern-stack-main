import React, { useState, useEffect } from 'react';

function GamesPage() {
  const [games, setGames] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await fetch('/api/games'); // Assuming your API endpoint is '/api/games'
      const data = await response.json();
      setGames(data);
    } catch (error) {
      console.error('Error fetching games:', error);
    }
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const filteredGames = selectedGenre === 'All' ? games : games.filter(game => game.genre === selectedGenre);

  return (
    <div>
      <h2>Games</h2>
      <div>
        <label htmlFor="genre">Filter by Genre:</label>
        <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
          <option value="All">All</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Puzzle">Puzzle</option>
          <option value="RPG">RPG</option>
        </select>
      </div>
      <ul>
        {filteredGames.map(game => (
          <li key={game.id}>{game.title} - {game.genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default GamesPage;

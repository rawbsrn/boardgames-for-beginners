import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Result = () => {
  const state = useSelector(state => state)
  const possibilities = [
    { id: 1, name: '7 Wonders', player_min: 3, player_max: 7},
    { id: 2, name: 'Azul', player_min: 2, player_max: 4},
    { id: 3, name: 'Carcassone', player_min: 2, player_max: 5},
    { id: 4, name: 'Catan', player_min: 3, player_max: 4},
    { id: 5, name: 'Kingdomino', player_min: 2, player_max: 4},
    { id: 6, name: 'Pandemic', player_min: 1, player_max: 4},
    { id: 7, name: 'Quest for El dorado', player_min: 2, player_max: 4},
    { id: 8, name: 'Sagrada', player_min: 1, player_max: 4},
    { id: 9, name: 'Skull', player_min: 3, player_max: 6},
    { id: 10, name: 'Splendor', player_min: 2, player_max: 4},
    { id: 11, name: 'Stone Age', player_min: 2, player_max: 4},
    { id: 12, name: 'Ticket to Ride', player_min: 2, player_max: 5},
    { id: 13, name: 'Wing Span', player_min: 1, player_max: 4},
  ];

    const getPossibilitiesContent = possibilities =>
    possibilities
      .filter(item => item.player_min <= state.game.players && item.player_max >= state.game.players)
      .map(item => <li key={item.id}>{item.name}</li>);

  return (
    <>
      <pre>With {JSON.stringify(state.game.players, null, 2)} players over {JSON.stringify(state.game.time, null, 2)} time, a category of {JSON.stringify(state.game.category, null, 2)} and with {JSON.stringify(state.game.mechanics, null, 2)}, I recommend: {<ul>{getPossibilitiesContent(possibilities)}</ul>}

      </pre>
      <Link to="/">Start over</Link>
    </>
  )
}
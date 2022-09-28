import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Result = () => {
  const state = useSelector(state => state)
  const possibilities = [
    {name: '7 Wonders', player_min: 3, player_max: 7},
    {name: 'Azul', player_min: 2, player_max: 4},
    {name: 'Carcassone', player_min: 2, player_max: 5},
    {name: 'Catan', player_min: 3, player_max: 4},
    {name: 'Kingdomino', player_min: 2, player_max: 4},
    {name: 'Pandemic', player_min: 1, player_max: 4},
    {name: 'Quest for El dorado', player_min: 2, player_max: 4},
    {name: 'Sagrada', player_min: 1, player_max: 4},
    {name: 'Skull', player_min: 3, player_max: 6},
    {name: 'Splendor', player_min: 2, player_max: 4},
    {name: 'Stone Age', player_min: 2, player_max: 4},
    {name: 'Ticket to Ride', player_min: 2, player_max: 5},
    {name: 'Wing Span', player_min: 1, player_max: 4},
  ];

  const results = possibilities.filter(element => {
    // 👇️ using AND (&&) operator
    return element.player_min <= state.game.players && element.player_max >= state.game.players;
  });

console.log(results)

  return (
    <>
      <pre>With {JSON.stringify(state.game.players, null, 2)} players over {JSON.stringify(state.game.time, null, 2)} time, a category of {JSON.stringify(state.game.category, null, 2)} and with {JSON.stringify(state.game.mechanics, null, 2)}, I recommend: 
      
      {results.map(function(object, i){
        return <ObjectRow obj={object} key={i} />;
    })}

      
      
      {JSON.stringify(results[i].name, null, 2)}
      </pre>
      <Link to="/">Start over</Link>
    </>
  )
}
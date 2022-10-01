import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Result = () => {
  const state = useSelector(state => state)
  const possibilities = {
    'games': [
    { id: 1, name: '7 Wonders', player_min: 3, player_max: 7, play_time: 'short', 'game_categories': [ {id: 1, "category": 'card_game'}, {id: 2, "category": 'economic'}]},
    { id: 2, name: 'Azul', player_min: 2, player_max: 4, play_time: 'medium', 'game_categories': [ {id: 1, category: 'puzzle'}]},
    { id: 3, name: 'Carcassone', player_min: 2, player_max: 5, play_time: 'medium', 'game_categories': [ {id: 1, category: 'territory_building'}]},
    { id: 4, name: 'Catan', player_min: 3, player_max: 4, play_time: 'long', 'game_categories': [{id: 1, category: 'economic'}, {id: 2, category: 'race'}]},
    { id: 5, name: 'Kingdomino', player_min: 2, player_max: 4, play_time: 'short', 'game_categories': [ {id: 1, category: 'territory_building'}]},
    { id: 6, name: 'Pandemic', player_min: 1, player_max: 4, play_time: 'medium', 'game_categories': [ {id: 1, category: 'cooperative'}]},
    { id: 7, name: 'Quest for El dorado', player_min: 2, player_max: 4, play_time: 'medium', 'game_categories': [ {id: 1, category: 'race'}]},
    { id: 8, name: 'Sagrada', player_min: 1, player_max: 4, play_time: 'medium', 'game_categories': [ {id: 1, category: 'dice'}, {id: 2, category: 'puzzle'}]},
    { id: 9, name: 'Skull', player_min: 3, player_max: 6, play_time: 'short', 'game_categories': [ {id: 1, category: 'card_game'}]},
    { id: 10, name: 'Splendor', player_min: 2, player_max: 4, play_time: 'short', 'game_categories': [ {id: 1, category: 'card_game'}, {id: 2, category: 'economic'}, {id: 3, category: 'race'}]},
    { id: 11, name: 'Stone Age', player_min: 2, player_max: 4, play_time: 'long', 'game_categories': [ {id: 1, category: 'dice'}, {id: 2, category: 'economic'}]},
    { id: 12, name: 'Ticket to Ride', player_min: 2, player_max: 5, play_time: 'medium', 'game_categories': [ {id: 1, category: 'card_game'}]},
    { id: 13, name: 'Wing Span', player_min: 1, player_max: 4, play_time: 'medium', 'game_categories': [ {id: 1, category: 'card_game'}]},
  ]
};

    const getPossibilitiesContent = possibilities =>
    possibilities.games
      .filter(item => item.player_min <= state.game.players && item.player_max >= state.game.players && item.play_time === state.game.time&& item.game_categories.find(y => y.category.includes(state.game.category)))
      .map((item)=> <li key={item.id}>{item.name}</li>);

      console.log(possibilities);

  return (
    <>
      <pre>With {JSON.stringify(state.game.players, null, 2)} players over a {JSON.stringify(state.game.time, null, 2)} play time, a category of {JSON.stringify(state.game.category, null, 2)} and with {JSON.stringify(state.game.mechanics, null, 2)}, I recommend: {<ul>{getPossibilitiesContent(possibilities)}</ul>}

      </pre>
      <Link to="/">Start over</Link>
    </>
  )
}
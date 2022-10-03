import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export const Result = () => {
  const state = useSelector(state => state)
  const possibilities = {
    'games': [
    {name: '7 Wonders', player_min: 3, player_max: 7, play_time: 'short', 'game_categories': [ {"category": 'card_game'}, {"category": 'economic'}], 'game_mechanics': [ {category: 'drafting'}, {category: 'set_collection'}]},
    {name: 'Azul', player_min: 2, player_max: 4, play_time: 'medium', 'game_categories': [ {category: 'puzzle'}], 'game_mechanics': [ {category: 'set_collection'},{category: 'pattern_building'},{category: 'tile_placement'} ]},
    {name: 'Carcassone', player_min: 2, player_max: 5, play_time: 'medium', 'game_categories': [ {category: 'territory_building'}], 'game_mechanics': [ {category: 'tile_placement'}]},
    {name: 'Catan', player_min: 3, player_max: 4, play_time: 'long', 'game_categories': [{category: 'economic'}, {category: 'race'}], 'game_mechanics': [ {category: 'dice_rolling'}, {category: 'network_and_route_building'}, {category: 'trading'}]},
    {name: 'Kingdomino', player_min: 2, player_max: 4, play_time: 'short', 'game_categories': [ {category: 'territory_building'}], 'game_mechanics': [ {category: 'drafting'}, {category: 'tile_placement'}]},
    {name: 'Pandemic', player_min: 1, player_max: 4, play_time: 'medium', 'game_categories': [ {category: 'cooperative'}], 'game_mechanics': [ {category: 'set_collection'}, {category: 'trading'}]},
    {name: 'Quest for El dorado', player_min: 2, player_max: 4, play_time: 'medium', 'game_categories': [ {category: 'race'}], 'game_mechanics': [ {category: 'drafting'}, {category: 'deck_building'}]},
    {name: 'Sagrada', player_min: 1, player_max: 4, play_time: 'medium', 'game_categories': [ {category: 'dice'}, {category: 'puzzle'}], 'game_mechanics': [ {category: 'drafting'}, {category: 'set_collection'}, {category: 'pattern_building'}, {category: 'dice_rolling'}, {category: 'contracts'}]},
    {name: 'Skull', player_min: 3, player_max: 6, play_time: 'short', 'game_categories': [ {category: 'card_game'}], 'game_mechanics': [ {category: 'auction_bidding'}]},
    {name: 'Splendor', player_min: 2, player_max: 4, play_time: 'short', 'game_categories': [ {category: 'card_game'}, {category: 'economic'}, {category: 'race'}], 'game_mechanics': [ {category: 'drafting'}, {category: 'drafting'}, {category: 'set_collection'}, {category: 'contracts'}]},
    {name: 'Stone Age', player_min: 2, player_max: 4, play_time: 'long', 'game_categories': [ {category: 'dice'}, {category: 'economic'}], 'game_mechanics': [ {category: 'set_collection'}, {category: 'dice_rolling'}, {category: 'dice_rolling'}, {category: 'contracts'}, {category: 'worker_placement'}]},
    {name: 'Ticket to Ride', player_min: 2, player_max: 5, play_time: 'medium', 'game_categories': [ {category: 'card_game'}], 'game_mechanics': [ {category: 'contracts'}]},
    {name: 'Wing Span', player_min: 1, player_max: 4, play_time: 'medium', 'game_categories': [ {category: 'card_game'}], 'game_mechanics': [ {category: 'drafting'}, {category: 'set_collection'}, {category: 'dice_rolling'}]},
  ]
};



    const getPossibilitiesContent = possibilities =>
    possibilities.games
      .filter(item => item.player_min <= state.game.players && item.player_max >= state.game.players && item.play_time === state.game.time && item.game_categories.find(y => y.category.includes(state.game.category)) && item.game_mechanics.find(y => y.category.includes(state.game.mechanics)));

      // const loose_game_finding =  useSelector(state => state.game.no_game_found)

      const handleClickTime = () => {
        console.log('Switch to Mechanics constraints');
      };

      function ClickTime(possibilities) {
        return (possibilities.games.filter(item => item.player_min <= state.game.players && item.player_max >= state.game.players && item.game_categories.find(y => y.category.includes(state.game.category)) && item.game_mechanics.find(y => y.category.includes(state.game.mechanics))).map((item)=> <li key={item.name}>{item.name}</li>));
      }

      function handleClickMechanics (state) {
        console.log('Switch to Mechanics constraints');
        return {
          ...state,
          no_game_found: "one"
        }
      };

      const handleClickCategories = () => {
        console.log(state.game.no_game_found);
      };

      function renderSwitch(param) {
        switch(param) {
  
          case "one":   return ClickTime(possibilities);
          // case "two":   return <ComponentB />;
          // case "three": return <ComponentC />;
          // case "four":  return <ComponentD />;
  
          default:      return <p>No project match</p>
        }
      };
  

  return (
    <>
      <pre>With {JSON.stringify(state.game.players, null, 2)} players over a {JSON.stringify(state.game.time, null, 2)} play time, a category of {JSON.stringify(state.game.category, null, 2)} and with {JSON.stringify(state.game.mechanics, null, 2)}, I recommend:
      {getPossibilitiesContent(possibilities).length > 0 &&
      <ul>{getPossibilitiesContent(possibilities).map((item)=> <li key={item.name}>{item.name}</li>)}</ul>
      }
      {getPossibilitiesContent(possibilities).length === 0 &&
      <pre>No games found with these parameters! Click to see suggestions with no:
      <button onClick={handleClickTime}>
        Time constraints
      </button>
      <button onClick={handleClickMechanics}>
      Mechanics constraints
      </button>
      <button onClick={handleClickCategories}>
        Category constraints
      </button>
      {renderSwitch(state.game.no_game_found)}
      </pre>}
      </pre>
      <Link to="/">Start over</Link>
    </>
  )
}
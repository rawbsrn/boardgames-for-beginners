import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { chooseNoGameFound } from './gameSlice'
export const Result = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const possibilities = {
    'games': [
    {name: '7 Wonders', player_min: 3, player_max: 7, play_time: 'short', 'game_categories': [ {"category": 'card_game'}, {"category": 'economic'}], 'game_mechanics': [ {category: 'drafting'}, {category: 'set_collection'}], bgg_url: 'https://boardgamegeek.com/boardgame/68448/7-wonders'},
    {name: 'Azul', player_min: 2, player_max: 4, play_time: 'medium', 'game_categories': [ {category: 'puzzle'}], 'game_mechanics': [ {category: 'set_collection'},{category: 'pattern_building'},{category: 'tile_placement'} ], bgg_url: 'https://boardgamegeek.com/boardgame/230802/azul'},
    {name: 'Carcassone', player_min: 2, player_max: 5, play_time: 'medium', 'game_categories': [ {category: 'territory_building'}], 'game_mechanics': [ {category: 'tile_placement'}], bgg_url: 'https://boardgamegeek.com/boardgame/822/carcassonne'},
    {name: 'Catan', player_min: 3, player_max: 4, play_time: 'long', 'game_categories': [{category: 'economic'}, {category: 'race'}], 'game_mechanics': [ {category: 'dice_rolling'}, {category: 'network_and_route_building'}, {category: 'trading'}], bgg_url: 'https://boardgamegeek.com/boardgame/13/catan'},
    {name: 'Kingdomino', player_min: 2, player_max: 4, play_time: 'short', 'game_categories': [ {category: 'territory_building'}], 'game_mechanics': [ {category: 'drafting'}, {category: 'tile_placement'}], bgg_url: 'https://boardgamegeek.com/boardgame/204583/kingdomino'},
    {name: 'Pandemic', player_min: 1, player_max: 4, play_time: 'medium', 'game_categories': [ {category: 'cooperative'}], 'game_mechanics': [ {category: 'set_collection'}, {category: 'trading'}], bgg_url: 'https://boardgamegeek.com/boardgame/30549/pandemic'},
    {name: 'Quest for El dorado', player_min: 2, player_max: 4, play_time: 'medium', 'game_categories': [ {category: 'race'}], 'game_mechanics': [ {category: 'drafting'}, {category: 'deck_building'}], bgg_url: 'https://boardgamegeek.com/boardgame/217372/quest-el-dorado'},
    {name: 'Sagrada', player_min: 1, player_max: 4, play_time: 'medium', 'game_categories': [ {category: 'dice'}, {category: 'puzzle'}], 'game_mechanics': [ {category: 'drafting'}, {category: 'set_collection'}, {category: 'pattern_building'}, {category: 'dice_rolling'}, {category: 'contracts'}], bgg_url: 'https://boardgamegeek.com/boardgame/199561/sagrada'},
    {name: 'Skull', player_min: 3, player_max: 6, play_time: 'short', 'game_categories': [ {category: 'card_game'}], 'game_mechanics': [ {category: 'auction_bidding'}], bgg_url: 'https://boardgamegeek.com/boardgame/92415/skull'},
    {name: 'Splendor', player_min: 2, player_max: 4, play_time: 'short', 'game_categories': [ {category: 'card_game'}, {category: 'economic'}, {category: 'race'}], 'game_mechanics': [ {category: 'drafting'}, {category: 'drafting'}, {category: 'set_collection'}, {category: 'contracts'}], bgg_url: 'https://boardgamegeek.com/boardgame/148228/splendor'},
    {name: 'Stone Age', player_min: 2, player_max: 4, play_time: 'long', 'game_categories': [ {category: 'dice'}, {category: 'economic'}], 'game_mechanics': [ {category: 'set_collection'}, {category: 'dice_rolling'}, {category: 'dice_rolling'}, {category: 'contracts'}, {category: 'worker_placement'}], bgg_url: 'https://boardgamegeek.com/boardgame/9209/ticket-ride'},
    {name: 'Ticket to Ride', player_min: 2, player_max: 5, play_time: 'medium', 'game_categories': [ {category: 'card_game'}], 'game_mechanics': [ {category: 'contracts'}], bgg_url: ''},
    {name: 'Wingspan', player_min: 1, player_max: 4, play_time: 'medium', 'game_categories': [ {category: 'card_game'}], 'game_mechanics': [ {category: 'drafting'}, {category: 'set_collection'}, {category: 'dice_rolling'}], bgg_url: 'https://boardgamegeek.com/boardgame/266192/wingspan'},
  ]
};

    const getPossibilitiesContent = possibilities =>
    possibilities.games
      .filter(item => item.player_min <= state.game.players && item.player_max >= state.game.players && item.play_time === state.game.time && item.game_categories.find(y => y.category.includes(state.game.category)) && item.game_mechanics.find(y => y.category.includes(state.game.mechanics)));


      function ClickTime(possibilities) {
        return (possibilities.games.filter(item => item.player_min <= state.game.players && item.player_max >= state.game.players && item.game_categories.find(y => y.category.includes(state.game.category)) && item.game_mechanics.find(y => y.category.includes(state.game.mechanics))));
      }

      function ClickMechanics(possibilities) {
        return (possibilities.games.filter(item => item.player_min <= state.game.players && item.player_max >= state.game.players && item.play_time === state.game.time && item.game_categories.find(y => y.category.includes(state.game.category))));
      }

      function ClickCategories(possibilities) {
        return (possibilities.games.filter(item => item.player_min <= state.game.players && item.player_max >= state.game.players && item.game_mechanics.find(y => y.category.includes(state.game.mechanics))));
      }

      function AllGames(possibilities) {
        return (possibilities.games.filter(item => item.player_min <= state.game.players && item.player_max >= state.game.players));
      }


  return (
    <>
    <h1>Results: </h1>
    <br></br>
      <pre>With {JSON.stringify(state.game.players, null, 2)} players over a {JSON.stringify(state.game.time, null, 2)} play time, a category of {JSON.stringify(state.game.category, null, 2)} and with {JSON.stringify(state.game.mechanics, null, 2)}, I recommend:
      <br></br>
      {getPossibilitiesContent(possibilities).length > 0 &&
      <ul>{getPossibilitiesContent(possibilities).map((item)=> <li key={item.name}> <a href={item.bgg_url}target="_blank" rel="noopener noreferrer">{item.name}</a></li>)}</ul>
      }
      {getPossibilitiesContent(possibilities).length === 0 &&
      <pre>No games found with these parameters! Click to see suggestions with no:
        <br></br>
        <br></br>
      <button onClick={() => dispatch(chooseNoGameFound("time"))}>
        Time constraints
      </button>
      <button onClick={() => dispatch(chooseNoGameFound("mechanics"))}>
      Mechanics constraints
      </button>
      <button onClick={() => dispatch(chooseNoGameFound("category"))}>
        Category constraints
      </button>
      {state.game.noGameFound === "none" && <p>press a button!</p>}
      {state.game.noGameFound === "time" && ClickTime(possibilities).length > 0 && <ul>{ClickTime(possibilities).map((item)=> <li key={item.name}> <a href={item.bgg_url}target="_blank" rel="noopener noreferrer">{item.name}</a></li>)}</ul>}
      {state.game.noGameFound === "time" && ClickTime(possibilities).length === 0 && <p>can't find a game with no time constraints that still fits, sorry </p>}
      {state.game.noGameFound === "mechanics" && ClickMechanics(possibilities).length > 0 && <ul>{ClickMechanics(possibilities).map((item)=> <li key={item.name}> <a href={item.bgg_url}target="_blank" rel="noopener noreferrer">{item.name}</a></li>)}</ul>}
      {state.game.noGameFound === "mechanics" && ClickMechanics(possibilities).length === 0 && <p>can't find a game with no mechanics constraints that still fits, sorry </p>}
      {state.game.noGameFound === "category" && ClickCategories(possibilities).length > 0 && <ul>{ClickCategories(possibilities).map((item)=> <li key={item.name}> <a href={item.bgg_url}target="_blank" rel="noopener noreferrer">{item.name}</a></li>)}</ul>}
      {state.game.noGameFound === "category" && ClickCategories(possibilities).length === 0 && <p>can't find a game with no category constraints that still fits, sorry </p>}
      </pre>
      }
      <button onClick={() => dispatch(chooseNoGameFound("all"))}>
        Show every game for my play group
      </button>
      {state.game.noGameFound === "all"  && <ul>{AllGames(possibilities).map((item)=> <li key={item.name}> <a href={item.bgg_url}target="_blank" rel="noopener noreferrer">{item.name}</a></li>)}</ul>}

      </pre>
      <Link to="/step1">Start over</Link>
    </>
  )
}
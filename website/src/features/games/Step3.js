import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseMechanics } from './gameSlice';

export const Step3 = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate()
  const mechanics = useSelector(state => state.mechanics)
  const { register, handleSubmit } = useForm({defaultValues: {mechanics}});

  const onSubmit = (data) => {
    dispatch(chooseMechanics(data.mechanics));
    Navigate("/step4");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>

      <h1>Step 3: What mechanics do you want to play with?</h1>

        <label htmlFor="mechanics">Pick mechanics:</label>
        <select id="mechanics" {...register('mechanics')}>
          <option value="drafting">Drafting</option>
          <option value="set_collection">Set Collection</option>
          <option value="pattern_building">Pattern Building</option>
          <option value="tile_placement">Tile Placement</option>
          <option value="dice_rolling">Dice Rolling</option>
          <option value="network_and_route_building">Network and Route Building</option>
          <option value="trading">Trading</option>
          <option value="deck_building">Deck Building</option>
          <option value="contracts">Contracts</option>
          <option value="auction_bidding">Auction Bidding</option>
          <option value="worker_placement">Worker Placement</option>
        </select>
      </div>
      <br></br>
      <p>A game mechanic refers to a specific element or type of game play. A mechanic could be specific like “card drafting” or broad like the fact that a game uses cards or dice. In war games like Risk or Axis & Allies, a game mechanic might be how two people resolve who wins a battle … dice rolling in this case. If you love the game Carcassonne, you might be interested in other games that involve “tile placement” - <a href="https://boardgaming.com/mechanics"target="_blank" rel="noopener noreferrer">boardgaming.com</a>.</p>

      <button>Next</button>
    </form>
  );
};
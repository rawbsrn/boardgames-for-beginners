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
    console.log(data);
    dispatch(chooseMechanics(data.mechanics));
    Navigate("/step4");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
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
      <button>Next</button>
    </form>
  );
};
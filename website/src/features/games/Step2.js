import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseCategory } from "./gameSlice";

export const Step2 = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate()
  const category = useSelector(state => state.category)
  const { register, handleSubmit } = useForm({defaultValues: {category}});

  const onSubmit = (data) => {
    dispatch(chooseCategory(data.category));
    Navigate("/step3");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="category">Pick category:</label>
        <select id="category" {...register('category')}>
          <option value="card_game">Card Game</option>
          <option value="economic">Economic</option>
          <option value="puzzle">Puzzle</option>
          <option value="cooperative">Cooperative</option>
          <option value="territory_building">Territory Building</option>
          <option value="dice">Dice</option>
          <option value="race">Race</option>
        </select>
      </div>
      <button>Next</button>
    </form>
  );
};
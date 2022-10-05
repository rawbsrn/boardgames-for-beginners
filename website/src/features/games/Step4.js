import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { choosePlayers } from './gameSlice';

export const Step4 = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate()
  const players = useSelector(state => state.players)
  const { register, handleSubmit } = useForm({defaultValues: {players}});

  const onSubmit = (data) => {
    dispatch(choosePlayers(data.players));
    Navigate("/result");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>

      <h1>Step 4: How many players do you have?</h1>

        <label htmlFor="players">How many Players:</label>
        <select id="players" defaultValue="4"{...register('players')}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>
      </div>
      <br></br>
      <button>Complete</button>
    </form>
  );
};
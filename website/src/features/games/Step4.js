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
    console.log(data);
    dispatch(choosePlayers(data.players));
    Navigate("/result");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="players">How many Players:</label>
        <select id="players" {...register('players')}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>
      </div>
      <button>Complete</button>
    </form>
  );
};
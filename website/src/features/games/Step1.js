import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { chooseTime } from './gameSlice'

export const Step1 = () => {
  const dispatch = useDispatch()
  const Navigate = useNavigate()
  const time = useSelector(state => state.time)
  const { register, handleSubmit } = useForm({ defaultValues: { time } })

  const onSubmit = (data) => {
    dispatch(chooseTime(data.time))
    Navigate("/step2");
  } 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>

        <h1>Step 1: How much time do you want to play?</h1>
        
        <label htmlFor="time">Pick time:</label>
        <select id="time" {...register('time')}>
          <option value="short">less than 30</option>
          <option value="medium">30-60 minutes</option>
          <option value="long">more than 60</option>
        </select>
      </div>
      <br></br>
      <button>Next</button>
    </form>
  );
}


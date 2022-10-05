import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Intro = () => {
  const Navigate = useNavigate()

  const onSubmit = () => {
    Navigate("/step1");
  } 

  return (
    <div>
      <h1>
        Placeholder text here
      </h1>
      <br></br>
        <button onClick={onSubmit}>
        Get Started!
      </button>
    </div>

  );
}


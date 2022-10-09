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
        Welcome to Board Games for Beginners
      </h1>
      <p>
      The goal of this project is to help new board gamers find easy to pick up and play games that can expose them to new mechanics and themes that they will continue to enjoy replaying with their friends.
      </p>
      <br></br>
        <button onClick={onSubmit}>
        Get Started!
      </button>
    </div>

  );
}


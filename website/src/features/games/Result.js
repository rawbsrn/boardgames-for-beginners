import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Result = () => {
  const state = useSelector(state => state)

  return (
    <>
      <pre>With {JSON.stringify(state.game.players, null, 2)} players over {JSON.stringify(state.game.time, null, 2)} time, a category of {JSON.stringify(state.game.category, null, 2)} and with {JSON.stringify(state.game.mechanics, null, 2)}, I reccomend: </pre>
      <Link to="/">Start over</Link>
    </>
  )
}
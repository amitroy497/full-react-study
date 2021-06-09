import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Main() {
  const [num, setNum] = useState('___')
  const [name, setName] = useState('___')
  const [moves, setMoves] = useState('___')

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
      console.log(res.data.name)
      setName(res.data.name)
      setMoves(res.data.moves.length)
    }
    getData()
  })
  return (
    <div>
      <h1>Axios in React</h1>
      <select value={num} onChange={(e) => setNum(e.target.value)}>
        <option value='1'>1</option>
        <option value='25'>25</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='4'>4</option>
      </select>
      <h1>
        We choose: <span style={{ color: 'red' }}>{num}</span> value.
      </h1>
      <h1>
        My name is <span style={{ color: 'red' }}>{name}</span>.
      </h1>
      <h1>
        I have <span style={{ color: 'red' }}>{moves}</span> moves.
      </h1>
    </div>
  )
}

export default Main

import React, { useState } from 'react'

const Button = (props) => (
  
  <button onClick={props.handleClick}>{props.text}</button>
  
) 

const Statistics = (props) => {

  const total = props.good+props.neutral+props.bad
  const average = (props.good-props.bad) / total
  const positive = props.good/total *100

  if(total === 0) { 
    return( 
    <p>No feedback given</p>
    )
  }
  return(
    <div>
      <StatisticLine text='good' value={props.good} />
      <StatisticLine text='neutral' value={props.neutral} />
      <StatisticLine text='bad' value={props.bad} />
      <StatisticLine text='all' value={total} />
      <StatisticLine text='average' value={average} />
      <StatisticLine text='positive' value={positive} percent='%' />
    </div>
  )

}
const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.text} {props.value} {props.percent}</td>
    </tr> 
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>     
      <h2>give feedback</h2>
      <Button handleClick={()=> setGood(good+1)}  text='good' />
      <Button handleClick={()=> setNeutral(neutral+1)} text='neutral' />
      <Button handleClick={()=> setBad(bad+1)} text='bad' />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad ={bad} />
    </div>
  )
}
export default App

import { log } from 'handlebars'
import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

const AllStatistics = (props) => {
  return (
    <>
      <table>
        <tbody>
          <Statistic text='good' stat={props.good}/>
          <Statistic text='neutral' stat={props.neutral} />
          <Statistic text='bad' stat={props.bad} />
          <Statistic text='all' stat={props.total} />
          <Statistic text='average' stat={props.totalScore / props.total} />
          <Statistic text='positive' stat={(props.good / props.total) * 100} />
        </tbody>
      </table>
    </>
  )
  
  
}

const Statistic = ({ text, stat }) => {
  stat = stat % 1 === 0 ? stat : stat.toFixed(1);

  return (
    <tr>
      <td>{text}</td>
      <td>{stat}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [totalScore, setTotalScore] = useState(0)

  function iterateValue(value, setFunction, score) {
    return () => {
      setTotalScore(totalScore + score)
      setTotal(total + 1)
      setFunction(value + 1)
    } 
  }

  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={iterateValue(good, setGood, 1)} text='Good' />
      <Button onClick={iterateValue(neutral, setNeutral, 0)} text='Neutral' />
      <Button onClick={iterateValue(bad, setBad, -1)} text='Bad' />

      <h1>statistics</h1>

      <AllStatistics good={good} neutral={neutral} bad={bad} total={total}
       totalScore={totalScore} />

      
    </div>
  )
}

export default App
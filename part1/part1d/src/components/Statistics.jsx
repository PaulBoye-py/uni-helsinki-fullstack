import StatisticLine from "./StatisticLine";
const Statistics = ({good, bad, neutral}) => {

    const total = good + bad + neutral;
  
    const average = (good - bad)/ total || 0;
  
    const percentagePositive = (good / total) * 100 || 0;
      return (
      <table>
        <tbody>
          <StatisticLine text='good' value={good}/>
          <StatisticLine text='neutral' value={neutral}/>
          <StatisticLine text='bad' value={bad}/>
          <StatisticLine text='all' value={total}/>
          <StatisticLine text='average' value={average}/>
          <StatisticLine text='positive' value={percentagePositive} />
        </tbody>
      </table>
    
    )
}

export default Statistics
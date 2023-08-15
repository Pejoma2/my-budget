import { useState } from 'react'
import './App.css'
import AvailableBudget from './components/AvailableBudget'
import NewInput from './components/NewInput'
import IncomeList from './components/IncomeList'
import ExpensesList from './components/ExpensesList'

function App() {
  const[data, setData] = useState([])

  function handleAddData(newData){
    setData((data) => [...data, newData])
    console.log(data)
  }

  return (
    <>
      <AvailableBudget data={data}/>

      <NewInput onAddData={handleAddData}/>

      <IncomeList data={data}/>

      <ExpensesList data={data}/>
        
    </>
  )
}

export default App

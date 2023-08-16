import { useState } from "react";
import "./App.css";
import AvailableBudget from "./components/AvailableBudget";
import NewInput from "./components/NewInput";
import IncomeList from "./components/IncomeList";
import ExpensesList from "./components/ExpensesList";

function App() {
  const [data, setData] = useState([]);
  let totalOutcome;


  function handleAddData(newData) {
    setData((data) => [...data, newData]);
    console.log(data);
  }

  return (
    <>
      <AvailableBudget data={data} totalOutcome={totalOutcome}/>

      <NewInput onAddData={handleAddData} />

      <IncomeList data={data} totalOutcome={totalOutcome}/>

      <ExpensesList data={data}/>
    </>
  );
}

export default App;

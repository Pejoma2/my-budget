function AvailableBudget({ data }) {
  let totalIncome = data.reduce((ac, cur) => {
    return cur.type === "+" ? Number(ac) + Number(cur.value) : ac;
  }, 0);

  let totalOutcome = data.reduce((ac, cur) => {
    return cur.type === "-" ? Number(ac) + Number(cur.value) : ac;
  }, 0);

  let totalBudget = totalIncome - totalOutcome;

  let outcomePercentage = Math.abs((totalOutcome / totalIncome)) * 100;

  console.log(totalOutcome + "outcome")
  console.log(totalBudget + "budget")

  return (
    <div>
      <div>
        <h1>Available Budget</h1>
        <h1>${totalBudget}</h1>
      </div>
      <div>
        <h3>Income</h3>
        {totalIncome > 0 ? `$${totalIncome}` : "$0"}

        <h3>Outcome</h3>
        {totalOutcome > 0 ? `$${totalOutcome}` : "$0"}
        <h4>Outcome Percentage {outcomePercentage > 0 ? `${outcomePercentage.toFixed()}%` : "0%"}</h4>
      </div>
    </div>
  );
}

export default AvailableBudget;

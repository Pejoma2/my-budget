function AvailableBudget({ data, totalOutcome }) {
  let totalIncome = data.reduce((ac, cur) => {
    return cur.type === "+" ? Number(ac) + Number(cur.value) : ac;
  }, 0);

  totalOutcome = data.reduce((ac, cur) => {
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
        <h1>${new Intl.NumberFormat("en-US").format(totalBudget)}</h1>
      </div>
      <div>
        <h3>Income</h3>
        {totalIncome > 0 ? `$${new Intl.NumberFormat("en-US").format(totalIncome)}` : "$0"}

        <h3>Outcome</h3>
        {totalOutcome > 0 ? `$${new Intl.NumberFormat("en-US").format(totalOutcome)}` : "$0"}
        <h6>Outcome Percentage {outcomePercentage > 0 ? `${outcomePercentage.toFixed()}%` : "0%"}</h6>
      </div>
    </div>
  );
}

export default AvailableBudget;

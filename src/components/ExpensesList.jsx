import Data from "./Data"

function ExpensesList({data}) {
    return (
        <div>
            <h3>Expenses</h3>
            <ul>
                {data.map((data) => (
                   data.type === "-" ? (<Data data={data} key={data.id}/>) : null
                ))}
            </ul>

        </div>
    )
}

export default ExpensesList

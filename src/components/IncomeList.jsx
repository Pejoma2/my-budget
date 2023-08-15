import Data from "./Data"

function IncomeList({data}) {
    return (
        <div>
            <h3>Incomes</h3>
            <ul>
                {data.map((data)=> (
                   data.type === "+" ? (<Data data={data} key={data.id}/>): null
                ))}
            </ul>

        </div>
    )
}

export default IncomeList

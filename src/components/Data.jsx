function Data({data, totalOutcome}) {
    return (
        <li className={data.type === "+" ? "income" : "expense"}>
            <p>{data.description}</p>
            <p>${new Intl.NumberFormat("en-US").format(data.value)}</p>
            
        </li>
    )
}

export default Data

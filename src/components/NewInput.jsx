import { useState } from "react";

function NewInput({ onAddData }) {
  const [type, setType] = useState("+");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description || !value) return;

    const id = crypto.randomUUID();

    let newData = {
      id,
      description,
      value,
      type,
      // eachOutcomePercentage: 
    };
    onAddData(newData);
    setType("+");
    setDescription("");
    setValue("");
  }

  return (
    <form className="form-new-input" onSubmit={handleSubmit}>
      <select className="input-form" value={type} onChange={(e) => setType(e.target.value)}>
        <option value={"+"}>+</option>
        <option value={"-"}>-</option>
      </select>

        <div>
            <input
                className="input-form-description"
                type="text"
                placeholder="Add Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <input
                className="input-form"
                type="number"
                placeholder="Add Value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
      <button>Send</button>
    </form>
  );
}

export default NewInput;

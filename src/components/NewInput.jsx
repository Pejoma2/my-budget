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
    };
    onAddData(newData);
    setType("+");
    setDescription("");
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value={"+"}>+</option>
        <option value={"-"}>-</option>
      </select>

      <input
        type="text"
        placeholder="Add Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="number"
        placeholder="Add Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button>Send</button>
    </form>
  );
}

export default NewInput;

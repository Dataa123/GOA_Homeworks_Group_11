import { useState } from "react";

function App() {
  const [item, setItem] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const items = e.target.items.value;

    setItem([...item, items]);
    console.log(item);
    setInput("");
  };

  const deletes = (index) => {
    const updateItem = item.splice(1, index);
    setItem(updateItem);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          name="items"
          placeholder="List: "
          required
        />
        <button>Submit</button>
      </form>
      <ul>
        {item.map((itm, index) => {
          return (
            <li onClick={() => deletes(index)} key={index}>
              {itm}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
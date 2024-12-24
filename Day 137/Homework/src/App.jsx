import { useState } from "react";

function App() {
  const [product, setProducts] = useState([]);
  const [inputs, setInputs] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (inputs.trim()) {
      setProducts([...product, inputs]);
      setInputs("");
      console.log(product);
    }
  }

  function remove(index) {
    const updateList = [...product];
    updateList.splice(index, 1);
    setProducts(updateList);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInputs(e.target.value)}
          type="text"
          value={inputs}
          placeholder="Enter product: "
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {product.map((products, index) => (
          <div>
            <li onl key={index}>
              {products}{" "}
            </li>
            <button onClick={() => remove(index)}>Remove</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
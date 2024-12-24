const root = ReactDOM.createRoot(document.getElementById("root"));

const div = (
    <div>
        <h1>Hello world</h1>
        <h2>Goodbye world</h2>
        <p>Hello world</p>
        <p>Goodbye world</p>
        <button>Click me</button>
        <button>Don't click me</button>
    </div>
)

root.render(div);

// React library helps us to create and modify elements
// ReactDOM library helps us to render them on our website
// babel helps v8 engine to understand jsx
// jsx is not js and not html it is widened syntax of js which gives us more controll to write react

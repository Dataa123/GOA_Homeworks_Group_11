import { useEffect, useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);


    useEffect(() => {
        console.log("DATAAA")
    },[count])

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    )

}

export default Counter
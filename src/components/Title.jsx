import { useState } from "react"

function Title() {

    const [inputChange, setInputChange] = useState("")

    return <header>
        <p><i className="fa-solid fa-chevron-left fa-xs"></i> Back to Product Browser</p>
        <h1>Browse Products by Category</h1>
        <hr />
        <input onChange={(e) => setInputChange(e.target.value)} value={inputChange} placeholder="Search Products" />
    </header>
}

export default Title
import "./App.css"
import { useState } from "react"

function App() {
  const [btnColor, setBtnColor] = useState("green")
  const newBtnColor = btnColor === "green" ? "blue" : "green"
  const [inputDisabled, setInputDisabled] = useState(false)
  const [buttonStatus, setButtonStatus] = useState("Button is disabled")
  const newButtonStatus = buttonStatus === "Button is enabled" ? "Button is disabled" : "Button is enabled"


  return (
    <div className="App">
      <h1>Testing Playground</h1>
      <p role="paragraph">{newButtonStatus}</p>

      <button
        style={{ backgroundColor: btnColor }}
        onClick={() => setBtnColor(newBtnColor)}
        disabled={inputDisabled}
      >
        Change button color to {newBtnColor}
      </button>

      <input
        type="checkbox"
        defaultChecked={inputDisabled}
        onChange={(event) => setInputDisabled(event.target.checked)}
        onClick={() => setButtonStatus(newButtonStatus)}
      />
    </div>
  )
}

export default App


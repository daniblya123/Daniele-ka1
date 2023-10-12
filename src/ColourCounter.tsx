import "./ColourCounterLayout.css"
import { useState } from "react"
function ColourCounter(){
    
    const [buttonNameRed, setButtonNameRed ]=useState("Red button was pressed 0 times" )
    const [buttonNameBlue, setButtonNameBlue ]=useState("Blue button was pressed 0 times")
    const [counter,setCounter] = useState(1)
    const [counterBlue,setCounterBlue] = useState(1)
    const [text, setText] = useState("Red was pressed same amount of times as Blue")

    const handleButtonsClick = (buttonName : String) =>
    {   
        if (buttonName == "Red button")
        {
        setCounter(counter + 1)
        setButtonNameRed(buttonName + " was pressed " + counter + " times")
        }
        else
        {
        setCounterBlue(counterBlue + 1)
        setButtonNameBlue(buttonName + " was pressed " + counterBlue + " times")
        }
        
    }
    
    
    const redButton =  <button type="button" onClick = {() => handleButtonsClick("Red button")}>Red</button>
    const blueButton =  <button type="button" onClick = {() => handleButtonsClick("Blue button")}>Blue</button>
    
    return(<>
        <div className="divBox">
        <div className="row-1">{buttonNameRed} {redButton}</div>
        <div className="row-2">{buttonNameBlue}{blueButton}</div>
        
        </div>
        {text}
        </>
    )
}
export default ColourCounter;   
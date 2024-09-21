import React, {useState, useEffect} from "react";
import "../../styles/index.css"
const TrafficLight = () =>{
    const [selected, setSelected] = useState("")
    const [colors, setColors] = useState(["red","yellow","green"])


function handleClick(color){
    if(selected === color) {
        setSelected("")
        return
    }
    
    setSelected(color)
    return
}

function mixColors(){
    if (colors.length <= 1) return;

    let randomColor;

    do {
    randomColor = colors[Math.floor(Math.random() * colors.length)];
        
    } while (randomColor === selected);

    setSelected(randomColor)
}

function addColor(){
    let auxArr = [...colors]
    if (auxArr.includes('purple')){
        auxArr.pop()
        setColors(auxArr)
        return
    }
    auxArr.push("purple")
    setColors(auxArr)
    
    return
}

    return <div className="d-flex justify-content-center">
        <div className="d-flex flex-column justify-content-center position-relative">
        <div id="trafficTop"></div>
            <div id="trafficSign" className="d-flex flex-column justify-content-center">
                {colors.map((light, index) =>{
                    let classname = `selected-${light}`
                    return <div key={index} href="#" className={`trafficLight ${selected === light ? classname : ""}`} style={{backgroundColor: light, cursor: "pointer"}} onClick={() => handleClick(light)}></div>
                })}
            </div>
        </div>



        <div className="d-flex flex-column justify-content-center">
            <button type="button" className="btn btn-warning m-2" onClick={() => mixColors()}>Mix colors</button>
            <button type="button" className="btn btn-success m-2" onClick={()=> addColor()}>One more Color?</button>
        </div>
    </div>
}


export default TrafficLight
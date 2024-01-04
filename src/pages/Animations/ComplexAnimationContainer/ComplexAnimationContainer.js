import React, {useState} from 'react'
import "../Animations.css"

const ComplexAnimationContainer = () => {
    const [angleValue, setAngleValue ]= useState(45)

    const handleAngleChange = (e) => {
        setAngleValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <form>
                <fieldset style={{display: "inline", padding: "5px"}}>
                    <legend>Configurations</legend>
                    <div>
                        <h3>Starting Angle: {angleValue}&deg;</h3>
                        <input type="range" id="angle" name="angle" min="0" max="90" value={angleValue} onChange={handleAngleChange}/>
                    </div>
                    <div>
                        <h3>Select ball speed: </h3>
                        <div>
                            <div>
                                <input type="radio" id="slow" name="ball-speed" value="slow"/>
                                <label for="slow">Slow</label>
                            </div>
                            <div>
                                <input type="radio" id="normal" name="ball-speed" value="normal" checked/>
                                <label for="normal">Normal</label>
                            </div>
                            <div>
                                <input type="radio" id="fast" name="ball-speed" value="fast" />
                                <label for="fast">Fast</label>
                            </div>
                        </div>
                    </div>
                    <button className="submit-button" onClick={handleSubmit}>Go</button>
                </fieldset>
            </form>
            <br/><br/>
            <div className="complex-box">
                Hello
            </div>
        </div>
    )
}

export default ComplexAnimationContainer

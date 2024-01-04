import React, {useEffect, useState} from 'react'
import "../Animations.css"

const ComplexAnimationContainer = () => {
    const [angleValue, setAngleValue ] = useState(45)
    const [ballSpeed, setBallSpeed] = useState("normal")
    const [launchedBall, setLaunchedBall] = useState(false)
    const [position, setPosition] = useState({
        vertical: 0,
        horizontal: 0,
        vDirection: 1,
        hDirection: 1
    })

    const top = 0
    const left = 0
    const bottom = 180
    const right = 180

    const handleAngleChange = (e) => {
        setAngleValue(e.target.value)
    }

    const handleBallSpeedChange = (e) => {
        setBallSpeed(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        launchBall()
    }

    const launchBall = () => {
        setLaunchedBall(true)
        setPosition(prevState => ({
            ...prevState,
            vertical: prevState.vertical + 1,
            horizontal: prevState.horizontal + 1
        }))
    }

    useEffect(() => {
        if (launchedBall) {
            const animationInterval = setInterval(() => {
                const newPosition = {
                    vertical: position.vertical + 1,
                    horizontal: position.horizontal + 1,
                    vDirection: position.vDirection,
                    hDirection: position.hDirection
                }
    
                if (newPosition.vertical <= top || newPosition.vertical >= bottom) {
                    newPosition.vDirection *= -1
                }

                if (newPosition.horizontal <= left || newPosition.horizontal >= right) {
                    newPosition.hDirection *= -1
                }

                setPosition(newPosition)
                }, 10);
    
                return () => clearInterval(animationInterval);
        }
    }, [position, launchedBall])

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
                                <input type="radio" id="slow" name="ball-speed" value="slow" checked={ballSpeed==="slow"} onChange={handleBallSpeedChange}/>
                                <label htmlFor="slow">Slow</label>
                            </div>
                            <div>
                                <input type="radio" id="normal" name="ball-speed" value="normal" checked={ballSpeed==="normal"} onChange={handleBallSpeedChange}/>
                                <label htmlFor="normal">Normal</label>
                            </div>
                            <div>
                                <input type="radio" id="fast" name="ball-speed" value="fast" checked={ballSpeed==="fast"} onChange={handleBallSpeedChange}/>
                                <label htmlFor="fast">Fast</label>
                            </div>
                        </div>
                    </div>
                    <button className="submit-button" onClick={handleSubmit}>Go</button>
                </fieldset>
            </form>
            <br/>
            <div className="complex-box">
                <div className="complex-ball" style={{ top: `${position.vertical}px`, left: `{${position.horizontal}px}` }}></div>
            </div>
        </div>
    )
}

export default ComplexAnimationContainer

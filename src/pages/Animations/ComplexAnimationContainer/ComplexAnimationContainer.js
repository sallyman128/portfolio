import React, {useEffect, useState} from 'react'
import "../Animations.css"

const ComplexAnimationContainer = () => {
    const [angle, setAngle] = useState(45)
    const [speed, setSpeed] = useState(1)
    const [isAnimating, setIsAnimating] = useState(false)
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    })

    const top = 0
    const left = 0
    const bottom = 180
    const right = 180

    const handleAngleChange = (e) => {
        setAngle(e.target.value)
    }

    const handleSpeedChange = (e) => {
        switch(e.target.value) {
            case 'slow':
                setSpeed(0.5)
                break
            case 'normal':
                setSpeed(1)
                break
            case 'fast':
                setSpeed(2)
                break
            default:
                console.log(`${e.target.value} option does not exist.`)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        launchBall()
    }

    const launchBall = () => {
        setIsAnimating(true)
    }

    useEffect(() => {
        let interval;

        if (isAnimating) {
            const radians = (angle * Math.PI) / 180
            const deltaX = Math.cos(radians) * speed;
            const deltaY = Math.sin(radians) * speed;

            interval = setInterval(()=> {
                setPosition((prevPos) => ({
                    x: prevPos.x + deltaX,
                    y: prevPos.y + deltaY
                }))
            }, 100 / speed)
        }

        return () => clearInterval(interval)
    }, [isAnimating, angle, speed])

    return (
        <div>
            <form>
                <fieldset style={{display: "inline", padding: "5px"}}>
                    <legend>Configurations</legend>
                    <div>
                        <h3>Starting Angle: {angle}&deg;</h3>
                        <input type="range" id="angle" name="angle" min="0" max="90" value={angle} onChange={handleAngleChange}/>
                    </div>
                    <div>
                        <h3>Select ball speed: </h3>
                        <div>
                            <div>
                                <input type="radio" id="slow" name="ball-speed" value="slow" checked={speed===0.5} onChange={handleSpeedChange}/>
                                <label htmlFor="slow">Slow</label>
                            </div>
                            <div>
                                <input type="radio" id="normal" name="ball-speed" value="normal" checked={speed===1} onChange={handleSpeedChange}/>
                                <label htmlFor="normal">Normal</label>
                            </div>
                            <div>
                                <input type="radio" id="fast" name="ball-speed" value="fast" checked={speed===2} onChange={handleSpeedChange}/>
                                <label htmlFor="fast">Fast</label>
                            </div>
                        </div>
                    </div>
                    <button className="submit-button" onClick={handleSubmit}>Go</button>
                </fieldset>
            </form>
            <br/>
            <div className="complex-box">
                <div className="complex-ball" style={{ top: `${position.y}px`, left: `{${position.x}px}` }}></div>
            </div>
        </div>
    )
}

export default ComplexAnimationContainer

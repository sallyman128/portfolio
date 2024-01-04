import React from "react";
import './Animations.css'

import SimpleAnimationContainer from "./SimpleAnimationContainer/SimpleAnimationContainer";
import ComplexAnimationContainer from "./ComplexAnimationContainer/ComplexAnimationContainer";

const Animations = () => {
    return <div>
        <h1>Ball Animations</h1>
        <div>
            <h2>Simple</h2>
            <SimpleAnimationContainer />
        </div>
        <br/>
        <br/>
        <div>
            <h2>Complex</h2>
            <ComplexAnimationContainer />
        </div>
    </div>
    
}

export default Animations
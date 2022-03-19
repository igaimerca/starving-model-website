import React, { useState } from 'react'
import "./Roadmap.css";

function Roadmap() {
    const [state, setState] = useState(2);
    return (
        <div className="roadmap">
            <h3>Roadmap</h3>
            <div className="roadmap-flex">
            </div>
        </div>
    )
}

export default Roadmap
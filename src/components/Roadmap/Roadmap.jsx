import React, { useState } from 'react'
import "./Roadmap.css";

function Roadmap() {
    const [state, setState] = useState(2);
    return (
        <div className="roadmap">
            <h3>Roadmap</h3>
            <div className="roadmap-flex">
                <div className="roadmap-card" onMouseEnter={() => setState(1)}>
                    <img className="torch" src={`/images/torch_${state == 1 ? "on" : "off"}.png`} alt="" />
                    <div className={`roadmap-details ${state == 1 ? 'two' : 'one'}`}>
                        <h4>Title goes here</h4>
                        <small>Details goes here in <br />two lines</small>
                    </div>
                </div>
                <div className="roadmap-card" onMouseEnter={() => setState(2)}>
                    <img className="torch" src={`/images/torch_${state == 2 ? "on" : "off"}.png`} alt="" />
                    <div className={`roadmap-details ${state == 2 ? 'two' : 'one'}`}>
                        <h4>Title goes here</h4>
                        <small>Details goes here in <br />two lines</small>
                    </div>
                </div>
            <div className="roadmap-card" onMouseEnter={() => setState(3)}>
                    <img className="torch" src={`/images/torch_${state == 3 ? "on" : "off"}.png`} alt="" />
                    <div className={`roadmap-details ${state == 3 ? 'two' : 'three'}`}>
                        <h4>Title goes here</h4>
                        <small>Details goes here in <br />two lines</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap
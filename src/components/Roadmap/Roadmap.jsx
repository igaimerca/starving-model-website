import React, { useState } from 'react'
import "./Roadmap.css";

function Roadmap() {
    const [active, setActive] = useState("second");

    return (
        <div className="roadmap" id='roadmap'>
            <h3 className="title">Roadmap</h3>
            <div className="roadmap-flex">
                <div className="container">
                    <div className={`map_holder ${active === "first" ? 'active' : ""}`} onMouseEnter={() => setActive('first')}>
                        <div className="triangle">
                            <img src={`/images/${active === "first" ? 'torch_on.png': 'torch_off.png'}`} style={{ width: '220px', height: "260px"}} alt="" />
                        </div>
                        <div className="content">
                            <h3>Title goes here</h3>
                            <p>details goes here in
                                <br />
                                two lines
                            </p>
                        </div>
                    </div>
                    <div className={`map_holder ${active === "second" ? 'active' : ""}`} onMouseEnter={() => setActive('second')}>
                        <div className="triangle">
                        <img src={`/images/${active === "second" ? 'torch_on.png': 'torch_off.png'}`} style={{ width: '220px', height: "260px"}} alt="" />
                        </div>
                        <div className="content">
                            <h3>Title goes here</h3>
                            <p>details goes here in
                                <br />
                                two lines
                            </p>
                        </div>
                    </div>
                    <div className={`map_holder ${active === "third" ? 'active' : ""}`} onMouseEnter={() => setActive('third')}>
                        <div className="triangle">
                        <img src={`/images/${active === "third" ? 'torch_on.png': 'torch_off.png'}`} style={{ width: '220px', height: "260px"}} alt="" />
                        </div>
                        <div className="content">
                            <h3>Title goes here</h3>
                            <p>details goes here in
                                <br />
                                two lines
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap
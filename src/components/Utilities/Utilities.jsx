import React from 'react'
import "./Utilities.css"

function Utilities() {
    return (
        <div className="utilities-container">
            <img src="/images/utilities_bg.png" alt="" className="utilities-img" />
            <h2 className="utilities-header">Utilities</h2>
            <div className="points one">
                <h3>Title goes here</h3>
                <p>Details goes here in <br />two lines</p>
            </div>
            <div className="points two">
                <h3>Title goes here</h3>
                <p>Details goes here in <br />two lines</p>
            </div>
            <div className="points three">
                <h3>Title goes here</h3>
                <p>Details goes here in <br />two lines</p>
            </div>
            <div className="points four">
                <h3>Title goes here</h3>
                <p>Details goes here in <br />two lines</p>
            </div>
        </div>
    )
}

export default Utilities
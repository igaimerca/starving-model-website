import React from 'react'
import "./Utilities.css"

function Utilities() {
    return (
        <div className="utilities-container">
            <h2 className="utilities-header">Utilities</h2>
            <div class="box">
                <img src="/images/utilities_bg.png" alt="Flying Kites" />
                <div className="points text one">
                    <h3>Title goes here</h3>
                    <p>Details goes here in <br />two lines</p>
                </div>
                <div className="points text two">
                    <h3>Title goes here</h3>
                    <p>Details goes here in <br />two lines</p>
                </div>
                <div className="points text three">
                    <h3>Title goes here</h3>
                    <p>Details goes here in <br />two lines</p>
                </div>
                <div className="points text four">
                    <h3>Title goes here</h3>
                    <p>Details goes here in <br />two lines</p>
                </div>
            </div>
        </div>
    )
}

export default Utilities
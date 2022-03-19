import React from 'react'
import "./About.css"

function About() {
  return (
    <div className="about-wrapper">
      <div className="image_wrapper">
        <img src="/images/about.png" alt="" />
        <div className="details">
          <div className="title">
            <p className='nft'>NFT Starving Model</p>
            <p className='colored-header'>Price</p>
          </div>
          <div className="values">
            <p className='colored-header'>0.01</p>
            <p className='colored-header'>0.875</p>
          </div>
          <div className="icons">
            <img src="/images/diamond.png" alt="" />
            <div className="likes">
              <img src="/images/heart.png" alt="" />
              <span style={{ marginLeft: ".5em"}}>100</span>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
      <h2>NFT Starving Model</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Vero eos quaerat unde aperiam commodi explicabo tempore sint
          architecto, odio repellendus, esse provident aspernatur harum
          maiores rem magnam repudiandae, tenetur atque.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Vero eos quaerat unde aperiam commodi explicabo tempore sint
        </p>
      </div>
    </div>
  )
}

export default About
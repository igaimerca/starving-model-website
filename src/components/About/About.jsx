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
            <img src="/images/diamond.png" alt="" style={{ width: "20px" }} />
            <div className="likes">
              <img src="/images/heart.png" alt="" />
              <span style={{ marginLeft: ".5em" }}>100</span>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <h2>NFT Starving Model</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
          dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
      </div>
    </div>
  )
}

export default About
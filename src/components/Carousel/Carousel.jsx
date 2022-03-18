import React from 'react'

function Carousel() {
    return (
        <>
            <div id="app">
                {/* Triple slider */}
                <div className="triple-slider">
                    {/* Duplicate swipers will be created automatically */}

                    {/* Main center swiper */}
                    <div className="swiper">

                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img className="bg-image" src="/assets/images/carousel/guardians-of-the-galaxy.jpg" alt="" />
                                <img className="logo-image logo-image-1" data-swiper-parallax-x="50%"
                                    src="/assets/images/carousel/guardians-of-the-galaxy-logo.png" alt="" />
                            </div>

                            <div className="swiper-slide">
                                <img className="bg-image" src="/assets/images/carousel/justice-league.jpg" alt="" />
                                <img className="logo-image logo-image-2" data-swiper-parallax-x="50%" src="/assets/images/carousel/justice-league-logo.png"
                                    alt="" />
                            </div>

                            <div className="swiper-slide">
                                <img className="bg-image" src="/assets/images/carousel/spider-man.jpg" alt="" />
                                <img className="logo-image logo-image-3" data-swiper-parallax-x="50%" src="/assets/images/carousel/spider-man-logo.png" alt="" />
                            </div>


                            <div className="swiper-slide">
                                <img className="bg-image" src="/assets/images/carousel/suicide-squad.jpg" alt="" />
                                <img className="logo-image logo-image-4" data-swiper-parallax-x="50%" src="/assets/images/carousel/suicide-squad-logo.png"
                                    alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img className="bg-image" src="/assets/images/carousel/thor-ragnarok.jpg" alt="" />
                                <img className="logo-image logo-image-5" data-swiper-parallax-x="50%" src="/assets/images/carousel/thor-ragnarok-logo.png"
                                    alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel
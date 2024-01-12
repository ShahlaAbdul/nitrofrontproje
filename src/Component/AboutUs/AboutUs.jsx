import React from 'react'
import "./aboutus.scss"

function AboutUs() {
    return (
        <section id='about_us'>
            <div className='about_us'>
                <div className="about_us_head">
                    <p>About Us</p>
                </div>
                <div className="about_us_content">
                    <div className="about_us_left">
                        <img src="https://preview.colorlib.com/theme/nitro/images/hero_1.jpg.webp" alt="" />
                    </div>
                    <div className="about_us_right">
                        <p>For the next great business</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
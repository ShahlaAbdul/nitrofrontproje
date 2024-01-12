import React from 'react'
import "./home.scss"
import AboutUs from '../../Component/AboutUs/AboutUs'
import OurTeam from '../../Component/OurTEam/OurTeam'
import OurServices from '../../Component/OurServices/OurServices'
import { Helmet } from 'react-helmet-async'

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
        <AboutUs></AboutUs>
        <OurTeam></OurTeam>
        <OurServices></OurServices>
    </div>
  )
}

export default Home
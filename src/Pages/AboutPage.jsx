import React from 'react'
import Navbar from '../Components/Navbar'

import Mission from '../Components/Mission'
import About from '../Components/About'
import Team from '../Components/Team'
import Subscription from '../Components/Subscription'
import Footer from '../Components/Footer'
export default function AboutPage() {
  return (
    <>
          <Navbar  bgColor="white" />

    <About/>
    <Mission />
    <Team />
    <Subscription/>
    <Footer/>

    </>
  )
}

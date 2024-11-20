import React from 'react'

import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import BestProducts from '../Components/BestSellingShowcase'
import BestsellersGallery from '../Components/BestsellersGallery'
import Offer from '../Components/Offer'
import Trend from '../Components/Trend'
import FeedBack from '../Components/FeedBack'
import Footer from '../Components/Footer'


export default function HomePage() {
  return (
    <>
    <Hero />
    <BestProducts />
    <BestsellersGallery/>
    <Offer />
    <Trend />
    <FeedBack/>
    <Footer />
    </>
  )
}

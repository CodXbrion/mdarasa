import React from 'react'
import CarouselComp from '../components/home/CarouselComp'
import ServicesSection from '../components/home/ServicesSection'
import Platform from '../components/home/Platform'
import Elearning from '../components/home/Elearning'

const Home = () => {
    return (
        <div>
            <CarouselComp/>
            <ServicesSection/>
            <Platform/>
            <Elearning/>
        </div>
    )
}

export default Home

import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/Videoplayer/Videoplayer'
import { useState } from 'react'

const App = () => {
  const [playstate , setplaystate] = useState(false);
  return (
    <div>
    <Navbar />
    <Hero/>
    <div className="container">
    <Title subTitle="Our PROGRAM" title="What we offer"/>
    <Programs />
    <About setplaystate={setplaystate}/>
    <Title subTitle="Gallery" title="Campus photos"/>
    <Campus />
    <Title subTitle="TESTIMONIAL" title="What Students Says"/>
    <Testimonial />
    <Title subTitle="Contact Us" title="Get in touch"/>
    <Contact />
    <Footer />
    </div>
    <Videoplayer  playstate={playstate} setplaystate={setplaystate}/>
    </div>
  )
}

export default App
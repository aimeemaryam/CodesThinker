import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer'

import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Services from './Components/Pages/Services'

// Import detail page from the new Servicesoffer folder
import Website from './Components/Servicesoffer/Website'
import AppDev from './Components/Servicesoffer/AppDev'
import DevOps from './Components/Servicesoffer/DevOps'
import MachineLearning from './Components/Servicesoffer/MachineLearning'
import Blockchain from './Components/Servicesoffer/Blockchain'
import WebsiteHosting from './Components/Servicesoffer/WebsiteHosting'
import WordPressDevelopment from './Components/Servicesoffer/WordPressDevelopment'
import SeoOptimization from './Components/Servicesoffer/SeoOptimization'
import UiUx from './Components/Servicesoffer/UiUx'
import GraphicDesigning from './Components/Servicesoffer/GraphicDesigning'
import VideoEditing from './Components/Servicesoffer/VideoEditing'
import CodeCalling from './Components/Servicesoffer/CodeCalling'
import DigitalMarketing from './Components/Servicesoffer/DigitalMarketing'
import LeadGeneration from './Components/Servicesoffer/LeadGeneration'
// Uncomment these as you build your other page components
import Projects from './Components/Pages/Projects'
import Team from './Components/Pages/Team'
import Contact from './Components/Pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        
        {/* Parent Services Route with Nested Offer Route */}
        <Route path='/services' element={<Services />}>
          <Route path='servicedetail/1' element={<Website />} />
          <Route path='servicedetail/2' element={<AppDev />} />
           <Route path='servicedetail/3' element={<DevOps />} />
           <Route path='servicedetail/4' element={<MachineLearning/>} />
           <Route path='servicedetail/5' element={<Blockchain />} />
           <Route path='servicedetail/6' element={<WebsiteHosting />} />
           <Route path='servicedetail/7' element={<WordPressDevelopment />} />
           <Route path='servicedetail/8' element={<SeoOptimization/>} />
           <Route path='servicedetail/9' element={<UiUx />} />
           <Route path='servicedetail/10' element={<GraphicDesigning />} />
           <Route path='servicedetail/11' element={<VideoEditing />} />
           <Route path='servicedetail/12' element={<CodeCalling />} />
           <Route path='servicedetail/13' element={<DigitalMarketing />} />
           <Route path='servicedetail/14' element={<LeadGeneration />} />
        </Route>

        <Route path='/projects' element={<Projects />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
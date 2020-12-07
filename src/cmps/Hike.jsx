import React, { Component } from 'react'
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer'
import FirstSection from './FirstSection';
import SecendSection from './SecendSection';
import ThirdSection from './ThirdSection';
import ForthSection from './ForthSection'
import FifthSection from './FifthSection';
import SixthSection from './SixthSection';


import shape1 from '../style/img/shape1.png'
import shape2 from '../style/img/shape2.png'
import shape3 from '../style/img/shape3.png'
import shape4 from '../style/img/shape4.png'
import shape5 from '../style/img/shape5.png'
import shape6 from '../style/img/shape6.png'

import shadow3 from '../style/img/shadow3.png';

export default class Hike extends Component {
  render() {
    return (
      <main className="main-page-container">
        <Navbar />
        <Header />
        <img className="shape1" src={shape1} alt="" />
        <FirstSection />
        <SecendSection />
        <img className="shape2" src={shape2} alt="" />

        <ThirdSection />
        <img className="shape3" src={shape3} alt="" />
        <ForthSection />
        <img className="shape4" src={shape4} alt="" />
        <FifthSection />
        <img className="shape5" src={shape5} alt="" />
        <img className="shadow3" src={shadow3} alt="" />

        <SixthSection />
        <img className="shape6" src={shape6} alt="" />
        <Footer />
      </main>
    )
  }
}

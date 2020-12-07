import React, { Component } from 'react'
import img1 from '../style/img/s1img.png'
import img2 from '../style/img/s1img2.png'
import img3 from '../style/img/s1img3.png'
export default class FirstSection extends Component {
  render() {

    return (
      <section className="first-section">
        <div className="section-header">
        </div>
        <div className="content">

          <div className="text">
            <h1>LET'S GO</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </p>
          </div>


          <div className="cards">
            <div className="card">
              <img src={img1} alt="" />
              <div className="text-container">
                <div className="sub-container">

                  <h3>Lorem ipsum</h3>
                  <p>Lorem ipsum dolor sit amet,
                 consectetur  adipisicing...</p>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={img2} alt="" />
              <div className="text-container">
                <div className="sub-container">

                  <h3>Lorem ipsum</h3>
                  <p>Lorem ipsum dolor sit amet,
                 consectetur  adipisicing...</p>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={img3} alt="" />
              <div className="text-container">
                <div className="sub-container">

                  <h3>Lorem ipsum</h3>
                  <p>Lorem ipsum dolor sit amet,
                 consectetur  adipisicing...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button>SHOW MORE</button>
        <div className="shadow"></div>
      </section>
    )
  }
}

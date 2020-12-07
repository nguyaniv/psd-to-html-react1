import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="col">
            <h3>Title Here</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Aliquam at dignissim nunc, id maximus ex.
                Etiam nec dignissim elit, at dignissim enim. </p>
          </div>

          <div className="col">
            <h3>About</h3>
                <li>History</li>
                <li>Our Team</li>
                <li>Brand Guidelines</li>
                <li>Tearms&Condition</li>
                <li>Privicy Policy</li>
          </div>

          <div className="col">
            <h3>Services</h3>
            <li>How to Order</li>
            <li>Our Product</li>
            <li>Order Status</li>
            <li>Promo</li>
            <li>Payment Method</li>
          </div>

          <div className="col">
            <h3>Other</h3>
            <li>Contact Us</li>
            <li>Help</li>
            <li>Privacy</li>
          </div>
        </div>
      </footer>
    )
  }
}

import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <section className="header">
                <div className="text-contaier">
                    <div className="text">
                        <h1>IT´S TIME FOR HIKING</h1>

                        <p>LOREMIPSUM DOLOR</p>
                    </div>

                    <div className="sub-text">
                        <button>READ MORE</button>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do iusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                   
                </div>
            </section>
        )
    }
}

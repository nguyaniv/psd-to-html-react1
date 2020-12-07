import React, { Component } from 'react'
import s2i1 from '../style/img/s2p1.png'
import s2i2 from '../style/img/s2img2.png'
export default class SecendSection extends Component {
    render() {
        return (
            <section className="secend">
                <div className="squares">
                    <div className="square">
                        <img src={s2i1} alt="" />
                    </div>
                    <div className="square">
                        <div className="text-container">
                            <h3>Discount up to 50% All Excursions</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                 euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
                            <button>READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className="squares">
                    <div className="square">
                        <div className="text-container">
                            <h3>January’s Promo: Buy 1 Get 1 Free!</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                 euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
                            <button>READ MORE</button>
                        </div>
                    </div>
                    <div className="square">
                        <img src={s2i2} alt="" />
                    </div>
                </div>
            </section>
        )
    }
}

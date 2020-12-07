import React, { Component } from 'react'
import logo from '../style/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default class Navbar extends Component {

    
  render() {

      console.log(faSearch);
    return (
      <nav>
        <img src={logo} alt="Logo"/>
        <div className="links-search">
            <a href="">HOME</a>
            <a href="">MENU</a>
            <a href="">OUR STORY</a>
            <a href="">CONTACT US</a>
            <input type="text"/>
            <FontAwesomeIcon className ="search" icon={faSearch} />
        </div>
            <div className="shape1">
                
            </div>
      </nav>
    )
  }
}

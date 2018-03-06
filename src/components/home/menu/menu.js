import React, { Component } from 'react';
import { Link } from "react-router-dom";
import KUTE from 'kute.js'
import 'kute.js/kute-css';
import './menu.css';

class Menu extends Component {

  constructor() {
    super();
    this.menuActive = false;
    this.tween1 = null;
    this.tween2 = null;
    this.tween3 = null;
    this.tween4 = null;
    this.clickEventActive = false;
  }

  componentDidMount() {
    this.tween1 = KUTE.to('.home-menu',{height:288}, {duration: 400, easing: 'easingQuinticOut'});
    this.tween2 = KUTE.allFromTo('.dropdown-arrow',{rotate: 45}, {rotate: 225}, {duration: 250, easing: 'easingSinusoidalOut'});
    this.tween3 = KUTE.to('.home-menu',{height:0}, {duration: 400, easing: 'easingQuinticOut'});
    this.tween4 = KUTE.allTo('.dropdown-arrow',{rotate: 45}, {duration: 250, easing: 'easingSinusoidalOut'});
    document.addEventListener('click', this.closeMenu.bind(this));
    document.addEventListener('touchstart', this.closeMenu.bind(this));
  }

  closeMenu() {
    if (this.clickEventActive) {
      this.tween3.start();
      this.tween4.start();
      this.menuActive = false;
      setTimeout(() => {
        this.clickEventActive = false;
      }, 100)
    }
  }

  openMenu() {
    if (!this.menuActive) {
      this.tween1.start();
      this.tween2.start();
      this.menuActive = true;
      setTimeout(() => {
        this.clickEventActive = true;
      }, 10)
    }
  }

  render() {
    return (
      <div className="button-container">
        <div className="nav-button">
          <div className="nav-button-helper" onClick={this.openMenu.bind(this)}>
            MENU <span className="dropdown-arrow"></span>
          </div>
          MENU <span className="dropdown-arrow"></span>
          <div className="home-menu">
            <div className="home-menu-item">
              <Link className="home-menu-item-helper" to="/"> Home </Link>
              Home
            </div>
            <div className="home-menu-item">
              <Link className="home-menu-item-helper" to="/affixes"> Affixes </Link>
              Affixes
            </div>
            <div className="home-menu-item">
              <Link className="home-menu-item-helper" to="/dungeons"> Dungeons </Link>
              Dungeons
            </div>
            <div className="home-menu-item">
              <Link className="home-menu-item-helper" to="/affixes"> Page 3 </Link>
              Page 3
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;

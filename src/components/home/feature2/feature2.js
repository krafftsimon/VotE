import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import KUTE from 'kute.js';
import 'kute.js/kute-css';
import './feature2.css';
import { Button } from '../button/button';

export class Feature2 extends Component {

  constructor() {
    super();
    this.state = {
      currentSlide: 0,
    }
    this.featIn = false;
    this.tween1 = null;
    this.tween2 = null;
    this.tween3 = null;
    this.tween4 = null;
  }

  componentDidMount() {
    this.tween1 = KUTE.to('.feat2-title-div', {opacity: 1});
    this.tween2 = KUTE.to('.feat2-text', {opacity: 1});
    this.tween3 = KUTE.to('.feat2-button', {opacity: 1});
  }

  handleWaypointEnter() {
    if (this.featIn === false) {
      this.tween1.chain(this.tween2);
      this.tween2.chain(this.tween3);
      this.tween1.start();
      this.featIn = true;
    }
  }

  nextSlide() {
    if (this.state.currentSlide < 2) {
      let slides = document.getElementsByClassName("home-dungeons");
      slides[this.state.currentSlide + 1].classList.add("home-dungeons-in");
      this.setState({
        currentSlide: this.state.currentSlide + 1
      })
    }
  }

  prevSlide() {
    if (this.state.currentSlide > 0) {
      let slides = document.getElementsByClassName("home-dungeons");
      slides[this.state.currentSlide].classList.remove("home-dungeons-in");
      this.setState({
        currentSlide: this.state.currentSlide - 1
      })
    }
  }

  render() {
    return (
      <div>
        <Waypoint onEnter={this.handleWaypointEnter.bind(this)} bottomOffset='350px'>
          <div className="feat2-container">
            <div className="box2">
              <div className="home-feat2-right-container">
                <div className="feat2-description-div">
                  <div className={'feat2-title-div'}>
                    <h2> Dungeon Strategies </h2>
                    <hr></hr>
                  </div>
                  <p className="feat2-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis convallis dui, vel ornare ex blandit pretium.
                    Ut sed dapibus magna. Aenean urna arcu, vestibulum eget metus at, varius tempor quam. Donec porttitor nibh nec dui luctus consequat.
                    Quisque efficitur, ligula vel venenatis cursus, est nulla euismod mauris, in eleifend orci eros vel libero.
                    Ut porta augue ut ante tempor, id vulputate nibh aliquet. Donec nec porta lectus, egestas pellentesque ex.
                    Donec eleifend tellus sit amet fermentum blandit.
                  </p>
                  <div className="feat2-button">
                    <Button route="/dungeons"/>
                  </div>
                </div>
              </div>

              <div className="home-feat2-left-container">
                <div className="feat2-dungeon-img"></div>
              </div>
            </div>
          </div>
        </Waypoint>
      </div>
    );
  }
}

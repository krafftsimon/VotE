import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import KUTE from 'kute.js';
import 'kute.js/kute-css';
import './feature3.css';
import { Button } from '../button/button';

export class Feature3 extends Component {

  constructor() {
    super();
    this.featIn = false;
    this.tween1 = null;
    this.tween2 = null;
    this.tween3 = null;
  }

  componentDidMount() {
    this.tween1 = KUTE.to('.feat3-title-div', {opacity: 1});
    this.tween2 = KUTE.to('.feat3-text', {opacity: 1});
    this.tween3 = KUTE.to('.feat3-button', {opacity: 1});
  }

  handleWaypointEnter() {
    if (this.featIn === false) {
      this.tween1.chain(this.tween2);
      this.tween2.chain(this.tween3);
      this.tween1.start();
      this.featIn = true;
    }
  }

  render() {
    return (
      <div>
        <Waypoint onEnter={this.handleWaypointEnter.bind(this)} bottomOffset='350px'>
          <div className="feat3-container">
            <div className="box3">

              <div className="home-feat3-right-container">
                <div className="feat3-description-div">
                  <div className={'feat3-title-div'}>
                    <h2> Last Feature </h2>
                    <hr></hr>
                  </div>
                  <p className="feat3-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis convallis dui, vel ornare ex blandit pretium.
                    Ut sed dapibus magna. Aenean urna arcu, vestibulum eget metus at, varius tempor quam. Donec porttitor nibh nec dui luctus consequat.
                    Quisque efficitur, ligula vel venenatis cursus, est nulla euismod mauris, in eleifend orci eros vel libero.
                    Ut porta augue ut ante tempor, id vulputate nibh aliquet. Donec nec porta lectus, egestas pellentesque ex.
                    Donec eleifend tellus sit amet fermentum blandit.
                  </p>
                  <div className="feat3-button">
                    <Button route="/affixes"/>
                  </div>
                </div>
              </div>

              <div className="home-feat3-left-container">
                <div className="feat3-dungeon-img"></div>
              </div>
            </div>
          </div>
        </Waypoint>
      </div>
    );
  }
}

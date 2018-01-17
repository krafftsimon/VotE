import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import KUTE from 'kute.js';
import 'kute.js/kute-css';
import Waypoint from 'react-waypoint';
import './feat-left.css';

export class FeatLeft extends Component {

  constructor() {
    super();
    this.featIn = false;
    this.tween1 = null;
    this.tween2 = null;
    this.tween3 = null;
  }

  componentDidMount() {
    this.tween1 = KUTE.allFromTo(`.list${this.props.listNumber}-item-left`, {translateX: '-100%', opacity: 0}, {translateX: 0, opacity: 1}, {duration: 250, offset: 200});
    this.tween2 = KUTE.allFromTo(`.nav-box${this.props.listNumber}-left`, {translateX: '400%', opacity: 0}, {translateX: 0, opacity: 1}, {duration: 700});
    this.tween3 = KUTE.allFromTo(`.feat-title${this.props.listNumber}-div-left`, {translateY: '-200%', opacity: 0}, {translateX: 0, opacity: 1}, {duration: 700});
  }

  handleWaypointEnter() {
    if (this.featIn === false) {
      this.tween1.start();
      this.tween2.start();
      this.tween3.start();
      this.featIn = true;
    }
  }

  render() {
    return (
      <div>
        <Waypoint onEnter={this.handleWaypointEnter.bind(this)} bottomOffset='350px'>
          <div className="feat-container-left">
            <div className="description-div-left">
              <div className={`feat-title${this.props.listNumber}-div-left`}>
                <h2> Mythic affixes this week. </h2>
                <hr></hr>
              </div>
              <ul>
                {this.props.featList.map((item, i) => (
                  <li key={item} className={`list${this.props.listNumber}-item-left`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`nav-box${this.props.listNumber}-left`}>
              <div className="nav-box-button-helper-left">
                page 1
              </div>
              page 1
            </div>
          </div>
        </Waypoint>
      </div>
    );
  }
}

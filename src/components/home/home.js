import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import Waypoint from 'react-waypoint';
import './home.css';

import Menu from './menu/menu';
import { FeatRight } from './feat-right/feat-right';
import { FeatLeft } from './feat-left/feat-left';

const listFeat1 = [
  'List of mythic plus affixes active this week.',
  'All Regions available.',
  'Schedule for upcoming weeks.',
  'Description of each affix.',
  'Tips and tricks to deal with them.'
];

const listFeat2 = [
  'List of mythic plus affixes active this week.',
  'All Regions available.',
  'Schedule for upcoming weeks.',
  'Description of each affix.',
  'Tips and tricks to deal with them.'
];

const listFeat3 = [
  'List of mythic plus affixes active this week.',
  'All Regions available.',
  'Schedule for upcoming weeks.',
  'Description of each affix.',
  'Tips and tricks to deal with them.'
];

class Home extends Component {

  constructor() {
    super();
    this.state = {
      arrowVisible: true,
    }
    
  }

  //componentDidMount(){
  //  window.addEventListener('scroll', this.showComponent.bind(this));
  //}

  //showComponent() {
  //}

  handleWaypointEnter() {
    this.setState({
      arrowVisible: false
    });
  }

  render() {
    return (
      <div>
        <div className="title-div">
          <Menu />
          <h1> Palakapou </h1>
          <h2 className="subtitle"> Lorem ipsum Lorem Ipsum Lorem ipsum Lorem Ipsum </h2>
          <img className={this.state.arrowVisible ? "home-arrow" : "not-visible home-arrow"} src={require('../../pictures/arrow.png')}></img>
        </div>

        <div className="content-div">
          <Waypoint onEnter={this.handleWaypointEnter.bind(this)} bottomOffset="350px"/>
          <FeatRight featList={listFeat1} listNumber={1} />
          <FeatLeft featList={listFeat2} listNumber={2}/>
          <FeatRight featList={listFeat3} listNumber={3} />
        </div>
      </div>
    );
  }
}

export default Home

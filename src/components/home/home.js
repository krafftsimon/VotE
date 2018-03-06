import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import './home.css';

import Menu from './menu/menu';
import { Feature1 } from './feature1/feature1';
import { Feature2 } from './feature2/feature2';
import { Feature3 } from './feature3/feature3';

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
          <h1 className="home-title"> Vault of the Enlightened </h1>
          <h2 className="subtitle"> Everything you need to know about Mythic plus dungeons.</h2>
          <img className={this.state.arrowVisible ? "home-arrow" : "not-visible home-arrow"} src={require('../../pictures/arrow.png')} alt=""></img>
        </div>

        <div className="content-div">
          <Waypoint onEnter={this.handleWaypointEnter.bind(this)} bottomOffset="350px"/>
          <Feature1 featList={listFeat1} listNumber={1} />
          <Feature2 featList={listFeat2} listNumber={2}/>
          <Feature3 featList={listFeat3} listNumber={3} />
        </div>
      </div>
    );
  }
}

export default Home

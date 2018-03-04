import React, { Component } from 'react';
import KUTE from 'kute.js';
import 'kute.js/kute-css';
import './affixes-list.css';

const weeks = [
  'This Week',
  'Next Week',
  'In Two Weeks',
]

class AffixesList extends Component {

  constructor() {
    super();
    this.currentWeek = 0;
    this.currentRegion = 'us';
    this.tween1 = null;
    this.tween2 = null;
    this.tween3 = null;
    this.affixes = null;
  }

  componentDidMount() {
    this.tween1 = KUTE.to('.week-group', {marginLeft:'-200%'}, {duration: 500, easing: 'easingQuinticInOut'});
    this.tween2 = KUTE.to('.week-group', {marginLeft:'-100%'}, {duration: 500, easing: 'easingQuinticInOut'});
    this.tween3 = KUTE.to('.week-group', {marginLeft:'0%'}, {duration: 500, easing: 'easingQuinticInOut'});
  }

  nextWeek() {
    if (this.currentWeek === 0) {
      this.tween2.start();
      this.currentWeek++;
    } else if (this.currentWeek === 1) {
      this.tween1.start();
      this.currentWeek++;
    }
  }

  prevWeek() {
    if (this.currentWeek === 2) {
      this.tween2.start();
      this.currentWeek--;
    } else if (this.currentWeek === 1) {
      this.tween3.start();
      this.currentWeek--;
    }
  }

  renderWeekGroup(week) {
    return (
      <div className="week-group">
        {weeks[week]}
        {this.renderAffixGroup(0, week)}
        {this.renderAffixGroup(1, week)}
        {this.renderAffixGroup(2, week)}
      </div>
    );
  }

  navToWowhead(id, week) {
    window.location.href = this.props.affixes[week][id].wowhead_url;
  }

  renderAffixGroup(id, week) {
    if (!this.props.affixes) {
      return (
        <div className="affix-group">
          <div className="affix-loading-div">
            Loading...
          </div>
        </div>
      );
    }
    const affixImgUrl = this.props.affixes[week][id].img_url;
    return (
      <div className="affix-group" onClick={() => this.navToWowhead(id, week)}>
        <div>
          <img className="affix-img" src={require('../../../pictures/' + affixImgUrl)} alt=""/>
        </div>
        <div className="affix-text-div">
          <h3> {this.props.affixes[week][id].name} </h3>
          {this.props.affixes[week][id].description}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="affixes-div">
        <div className="week-arrow-left" onClick={this.prevWeek.bind(this)} />
        <div className="week-arrow-right" onClick={this.nextWeek.bind(this)} />
        {this.renderWeekGroup(0)}
        {this.renderWeekGroup(1)}
        {this.renderWeekGroup(2)}
      </div>
    );
  }
}

export default AffixesList;

import React, { Component } from 'react';
import KUTE from 'kute.js';
import 'kute.js/kute-css';
import './dungeon-details.css';

class DungeonDetails extends Component {

  constructor() {
    super();
    this.state = {
      bossDetailsOpened: null
    }
    this.tween1 = null;
    this.tween2 = null;
    this.dungeonDetailsOpened = false;
    window.whTooltips = {colorLinks: true, iconSize: 'small', iconizeLinks: true, renameLinks: true};
  }

  componentDidMount() {
    this.tween1 = KUTE.to(`#dung${this.props.id}`, {height: '650px'}, {duration: 1000, easing: 'easingExponentialOut'});
    this.tween2 = KUTE.to(`#dung${this.props.id}`, {height: '150px'}, {duration: 1000, easing: 'easingExponentialOut'});
  }

  toggleDungeonDetails() {
    if (this.dungeonDetailsOpened === false) {
      this.tween1.start();
      this.dungeonDetailsOpened = true;
    } else {
      this.tween2.start();
      this.dungeonDetailsOpened = false;
    }
  }

  toggleBossDetails(index, event) {
    event.stopPropagation();
    if (this.state.bossDetailsOpened === index) {
      if (event.target.classList[0] === "scroll") {
        event.target.scrollTop = 0
      } else if (event.target.parentElement.classList[0] === "scroll") {
        event.target.parentElement.scrollTop = 0
      } else if (event.target.parentElement.parentElement.classList[0] === "scroll") {
        event.target.parentElement.parentElement.scrollTop = 0
      }
      this.setState({
        bossDetailsOpened: null
      })
      return;
    }
    this.setState({
      bossDetailsOpened: index
    })
  }

  renderBosses() {
    const bossCount = this.props.dungeon.bossCount;
    if (bossCount === 3) {
      return this.props.dungeon.bosses.map((boss, index) => {
        return (
          <div className={this.state.bossDetailsOpened === index ? `scroll boss-group-${bossCount} expand scrollable` : `scroll boss-group-${bossCount} close-${bossCount}`}
            id={`boss${index}-${bossCount}`}
            onClick={this.toggleBossDetails.bind(this, index)}>
            <div className={`boss-description-div-${bossCount}`}>
              <img className={`boss-img-${bossCount}`} src={require('../../../pictures/' + boss.imgUrl)} alt=""/>
              <div className="boss-description">
                {boss.name}
              </div>
            </div>
            <ol className="strat-list">
              {boss.strategy.map(strat => {
                return <li> {strat} </li>
              })}
            </ol>
          </div>
        );
      });
    }
    if (bossCount === 4) {
      return this.props.dungeon.bosses.map((boss, index) => {
        return (
          <div className={this.state.bossDetailsOpened === index ? `scroll boss-group-${bossCount} expand scrollable` : `scroll boss-group-${bossCount} close-${bossCount}`}
            id={`boss${index}-${bossCount}`}
            onClick={this.toggleBossDetails.bind(this, index)}>
            <div className={`boss-description-div-${bossCount}`}>
              <img className={`boss-img-${bossCount}`} src={require('../../../pictures/' + boss.imgUrl)} alt=""/>
              <div className="boss-description">
                {boss.name}
              </div>
            </div>
            <ol className="strat-list">
              {boss.strategy.map(strat => {
                return <li> {strat} </li>
              })}
            </ol>
          </div>
        );
      });
    }
    if (bossCount === 5) {
      return this.props.dungeon.bosses.map((boss, index) => {
        return (
          <div className={this.state.bossDetailsOpened === index ? `scroll boss-group-${bossCount} expand scrollable` : `scroll boss-group-${bossCount} close-${bossCount}`}
            id={`boss${index}-${bossCount}`}
            onClick={this.toggleBossDetails.bind(this, index)}>
            <div className={`boss-description-div-${bossCount}`}>
              <img className={`boss-img-${bossCount}`} src={require('../../../pictures/' + boss.imgUrl)} alt=""/>
              <div className="boss-description">
                {boss.name}
              </div>
            </div>
            <ol className="strat-list">
              {boss.strategy.map(strat => {
                return <li> {strat} </li>
              })}
            </ol>
          </div>
        );
      });
    }
  }

  render() {
    const dungImgUrl = require('../../../pictures/' + this.props.dungeon.imgUrl);
    return (
      <div>
        <div className="dungeon-group" id={`dung${this.props.id}`} onClick={this.toggleDungeonDetails.bind(this)} style={{backgroundImage: "url(" + dungImgUrl + ")"}}>
          <div className="dungeon-title"> {this.props.dungeon.name} </div>
          <div className="dungeon-content">
            {this.renderBosses()}
          </div>
        </div>
      </div>
    );
  }
}

export default DungeonDetails;

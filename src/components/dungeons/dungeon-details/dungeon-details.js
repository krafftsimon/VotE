import React, { Component } from 'react';
import KUTE from 'kute.js';
import 'kute.js/kute-css';
import Linkify from 'react-linkify';
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
    this.tween1 = KUTE.to(`#dung${this.props.id}`, {height: '650px'}, {duration: 300});
    this.tween2 = KUTE.to(`#dung${this.props.id}`, {height: '150px'}, {duration: 300});
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
          <div className={this.state.bossDetailsOpened === index ? `boss-group-${bossCount} expand` : `boss-group-${bossCount} close-${bossCount}`}
            id={`boss${index}-${bossCount}`}
            onClick={this.toggleBossDetails.bind(this, index)}>
            <div className={`boss-description-div-${bossCount}`}>
              <img className={`boss-img-${bossCount}`} src={require('../../../pictures/' + boss.imgUrl)} />
              <div className="boss-description">
                {boss.name}
              </div>
            </div>
            <ol className="strat-list">
              {boss.strategy.map(strat => {
                return <li> <Linkify> {strat} </Linkify> </li>
              })}
            </ol>
          </div>
        );
      });
    }
    if (bossCount === 4) {
      return this.props.dungeon.bosses.map((boss, index) => {
        return (
          <div className={this.state.bossDetailsOpened === index ? `boss-group-${bossCount} expand` : `boss-group-${bossCount} close-${bossCount}`}
            id={`boss${index}-${bossCount}`}
            onClick={this.toggleBossDetails.bind(this, index)}>
            <div className={`boss-description-div-${bossCount}`}>
              <img className={`boss-img-${bossCount}`} src={require('../../../pictures/' + boss.imgUrl)} />
              <div className="boss-description">
                {boss.name}
              </div>
            </div>
            <ol className="strat-list">
              {boss.strategy.map(strat => {
                return <li> <Linkify> {strat} </Linkify> </li>
              })}
            </ol>
          </div>
        );
      });
    }
    if (bossCount === 5) {
      return this.props.dungeon.bosses.map((boss, index) => {
        return (
          <div className={this.state.bossDetailsOpened === index ? `boss-group-${bossCount} expand` : `boss-group-${bossCount} close-${bossCount}`}
            id={`boss${index}-${bossCount}`}
            onClick={this.toggleBossDetails.bind(this, index)}>
            <div className={`boss-description-div-${bossCount}`}>
              <img className={`boss-img-${bossCount}`} src={require('../../../pictures/' + boss.imgUrl)} />
              <div className="boss-description">
                {boss.name}
              </div>
            </div>
            <ol className="strat-list">
              {boss.strategy.map(strat => {
                return <li> <Linkify> {strat} </Linkify> </li>
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
        <a href="http://www.wowhead.com/spell=194956/reap-soul">asda</a>
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

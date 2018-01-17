import React, { Component } from 'react';
import KUTE from 'kute.js';
import 'kute.js/kute-css';
import './dungeons.css';

import Menu from '../home/menu/menu';
import DungeonDetails from './dungeon-details/dungeon-details';
import { dungeonsList } from './dungeons-list';

const dungList = dungeonsList;

class Dungeons extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
  }

  renderDungeons() {
    return dungList.map((dungeon, index) => {
      return (
        <DungeonDetails dungeon={dungeon} key={index} id={index} />
      );
    });
  }

  render() {
    return (
      <div className="dungeons-background">
        <Menu />
        <div className="spacer-div"></div>
        {this.renderDungeons()}
      </div>
    );
  }
}

export default Dungeons;

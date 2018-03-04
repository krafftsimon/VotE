import React, { Component } from 'react';
import './dungeons.css';

import Menu from '../home/menu/menu';
import DungeonDetails from './dungeon-details/dungeon-details';
import { dungeonsList } from './dungeons-list';

const dungList = dungeonsList;

class Dungeons extends Component {

  componentDidMount() {
  }

  componentWillMount() {
    //console.log("asd");
    //window.whTooltips = {colorLinks: true, iconSize: 'small', iconizeLinks: true, renameLinks: true};
    //const [ head ] = document.getElementsByTagName('head');
    //const script = document.createElement('script');
    //script.type = 'text/javascript';
    //script.src = '//wow.zamimg.com/widgets/power.js';
    //head.appendChild(script);
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
      <div>
        <div className="dungeons-background" />
        <Menu />
        <div className="spacer-div" />
        {this.renderDungeons()}
        <div className="spacer-div" />
      </div>
    );
  }
}

export default Dungeons;

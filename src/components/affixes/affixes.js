import React, { Component } from 'react';
import { connect } from "react-redux";
import KUTE from 'kute.js';
import 'kute.js/kute-css';
import './affixes.css';

import Menu from '../home/menu/menu';
import AffixesList from './affixes-list/affixes-list';
import { fetchAffixes } from '../../actions/index';


const allAffixes = [
  {
    id: 0,
    name: "Test",
    description: "Test Description",
    wowhead_url: "https://wowhead.com/affix=5",
    img_url: 'teeming.jpg',
  },
  {
    id: 1,
    name: "Teeming",
    description: "Additional non-boss enemies are present throughout the dungeon.",
    wowhead_url: "https://wowhead.com/affix=5",
    img_url: 'teeming.jpg',
  },
  {
    id: 2,
    name: "Skittish",
    description: "Enemies pay far less attention to threat generated by tanks.",
    wowhead_url: "https://wowhead.com/affix=2",
    img_url: 'skittish.jpg',
  },
  {
    id: 3,
    name: "Volcanic",
    description: "While in combat, enemies periodically cause gouts of flame to erupt beneath the feet of distant players.",
    wowhead_url: "https://wowhead.com/affix=3",
    img_url: 'volcanic.jpg',
  },
  {
    id: 4,
    name: "Necrotic",
    description: "All enemies' melee attacks apply a stacking blight that inflicts damage over time and reduces healing received.",
    wowhead_url: "https://wowhead.com/affix=4",
    img_url: 'necrotic.jpg',
  },
  {
    id: 5,
    name: "Teeming",
    description: "Additional non-boss enemies are present throughout the dungeon.",
    wowhead_url: "https://wowhead.com/affix=5",
    img_url: 'teeming.jpg',
  },
  {
    id: 6,
    name: "Raging",
    description: "Non-boss enemies enrage at 30% health remaining, dealing 100% increased damage until defeated.",
    wowhead_url: "https://wowhead.com/affix=6",
    img_url: 'raging.jpg',
  },
  {
    id: 7,
    name: "Bolstering",
    description: "When any non-boss enemy dies, its death cry empowers nearby allies, increasing their maximum health and damage by 20%.",
    wowhead_url: "https://wowhead.com/affix=7",
    img_url: 'bolstering.jpg',
  },
  {
    id: 8,
    name: "Sanguine",
    description: "When slain, non-boss enemies leave behind a lingering pool of ichor that heals their allies and damages players.",
    wowhead_url: "https://wowhead.com/affix=8",
    img_url: 'sanguine.jpg',
  },
  {
    id: 9,
    name: "Tyrannical",
    description: "Boss enemies have 40% more health and inflict up to 15% increased damage.",
    wowhead_url: "https://wowhead.com/affix=9",
    img_url: 'tyrannical.jpg',
  },
  {
    id: 10,
    name: "Fortified",
    description: "Non-boss enemies have 20% more health and inflict up to 30% increased damage.",
    wowhead_url: "https://wowhead.com/affix=10",
    img_url: 'fortified.jpg',
  },
  {
    id: 11,
    name: "Bursting",
    description: "When slain, non-boss enemies explode, causing all players to suffer 10% of their max health in damage over 4 sec. This effect stacks.",
    wowhead_url: "https://wowhead.com/affix=11",
    img_url: 'bursting.jpg',
  },
  {
    id: 12,
    name: "Grievous",
    description: "When injured below 90% health, players will suffer increasing damage over time until healed above 90% health.",
    wowhead_url: "https://wowhead.com/affix=12",
    img_url: 'grievous.jpg',
  },
  {
    id: 13,
    name: "Explosive",
    description: "While in combat, enemies periodically summon Explosive Orbs that will detonate if not destroyed.",
    wowhead_url: "https://wowhead.com/affix=13",
    img_url: 'explosive.jpg',
  },
  {
    id: 14,
    name: "Quaking",
    description: "Periodically, all players emit a shockwave, inflicting damage and interrupting nearby allies.",
    wowhead_url: "https://wowhead.com/affix=14",
    img_url: 'quaking.jpg',
  },
]


const affixesRotation =[
  [6, 3, 9],
  [5, 13, 10],
  [7, 12, 9],
  [8, 3, 10],
  [11, 2, 9],
  [5, 14, 10],
  [6, 4, 9],
  [7, 2, 10],
  [5, 4, 9],
  [8, 12, 10],
  [7, 13, 9],
  [11, 14, 10],
]

class Affixes extends Component {

  constructor() {
    super();
    this.state = {
      affixes: null,
    }
    this.currentRegion = 'us',
    this.affixesUS = null;
    this.affixesEU = null;
    this.affixesKR = null;
    this.tween1 = null;
    this.tween2 = null;
    this.tween3 = null;
    this.positionInRotation = null;
  }

  componentDidMount() {
    this.tween1 = KUTE.to('#us', {marginLeft:'-200%'}, {duration: 300, easing	: 'easingSinusoidalOut'});
    this.tween2 = KUTE.to('#us', {marginLeft:'-100%'}, {duration: 300, easing	: 'easingSinusoidalOut'});
    this.tween3 = KUTE.to('#us', {marginLeft:'0%'}, {duration: 300, easing	: 'easingSinusoidalOut'});
    this.props.fetchAffixes('us', () => {
      this.calculateAffixes();
    });
  }

  calculateAffixes() {
    setTimeout(() => {
      let curAffixes = [
        this.props.affixes[this.currentRegion].affix_details[0].id,
        this.props.affixes[this.currentRegion].affix_details[1].id,
        this.props.affixes[this.currentRegion].affix_details[2].id,
      ]
      for (let i = 0; i < affixesRotation.length; i++) {
        if (curAffixes[0]  === affixesRotation[i][0] &&
          curAffixes[1]  === affixesRotation[i][1] &&
          curAffixes[2]  === affixesRotation[i][2]) {
            this.positionInRotation = i
            break;
        }
      }
      let temp = []
      temp.push([allAffixes[curAffixes[0]], allAffixes[curAffixes[1]], allAffixes[curAffixes[2]]])
      temp.push([allAffixes[affixesRotation[this.positionInRotation + 1][0]], allAffixes[affixesRotation[this.positionInRotation + 1][1]], allAffixes[affixesRotation[this.positionInRotation + 1][2]]])
      temp.push([allAffixes[affixesRotation[this.positionInRotation + 2][0]], allAffixes[affixesRotation[this.positionInRotation + 2][1]], allAffixes[affixesRotation[this.positionInRotation + 2][2]]])
      this.setState({
        affixes: temp,
      })

      if (this.currentRegion === 'us') {
        this.affixesUS = temp;
      } else if (this.currentRegion === 'eu') {
        this.affixesEU = temp;
      } else {
        this.affixesKR = temp;
      }
    }, 500);
  }

  nextRegion() {
    console.log(this.affixesUS)
    if (this.currentRegion === 'us') {
      this.currentRegion = 'eu'
      this.tween2.start();
      if (!this.props.affixes.eu) {
        this.setState({
          affixes: null,
        })
        this.props.fetchAffixes('eu', () => {
          this.calculateAffixes();
        });
      } else {
        this.setState({
          affixes: this.affixesEU,
        });
      }
    } else if (this.currentRegion === 'eu') {
      this.currentRegion = 'kr'
      this.tween1.start();
      if (!this.props.affixes.kr) {
        this.setState({
          affixes: null,
        })
        this.props.fetchAffixes('kr', () => {
          this.calculateAffixes();
        });
      } else {
        this.setState({
          affixes: this.affixesKR,
        });
      }
    }
  }

  prevRegion() {
    if (this.currentRegion === 'kr') {
      this.currentRegion = 'eu'
      this.tween2.start();
      if (!this.props.affixes.eu) {
        this.setState({
          affixes: null,
        })
        this.props.fetchAffixes('eu', () => {
          this.calculateAffixes();
        });
      } else {
        this.setState({
          affixes: this.affixesEU,
        });
      }
    } else if (this.currentRegion === 'eu') {
      this.currentRegion = 'us'
      this.tween3.start();
      if (!this.props.affixes.us) {
        this.setState({
          affixes: null,
        })
        this.props.fetchAffixes('us', () => {
          this.calculateAffixes();
        });
      } else {
        this.setState({
          affixes: this.affixesUS,
        });
      }
    }
  }

  render() {
    return (
      <div className="affixes-background">
        <Menu />
        <div className="region-selector-div">
          <div className="region-div">
            <div className="region" id="us">US</div>
            <div className="region" id="eu">EU</div>
            <div className="region" id="kr">KR</div>
          </div>
          <div className="region-arrow-left" onClick={this.prevRegion.bind(this)} />
          <div className="region-arrow-right" onClick={this.nextRegion.bind(this)} />
        </div>
        <AffixesList affixes={this.state.affixes} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { affixes: state.affixes };
}

export default connect(mapStateToProps, { fetchAffixes })(Affixes);

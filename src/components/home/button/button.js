import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './button.css';

export class Button extends Component {
  render() {
    return (
      <div className="home-begin-btn">
        BEGIN
        <Link to={this.props.route} className="home-begin-btn-helper">
          BEGIN
        </Link>
      </div>
    );
  }
}

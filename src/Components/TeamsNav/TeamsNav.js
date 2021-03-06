import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import "./teamsnav.css";
import {NavLink} from 'react-router-dom';

export default class Example extends React.Component {
  render() {
    return (
      <ButtonGroup>
        <Button><NavLink to="/teams/lol" className="teamnavigation">LoL</NavLink></Button>
        <Button><NavLink to="/teams/rl" className="teamnavigation">RL</NavLink></Button>
        <Button><NavLink to="/teams/csgo" className="teamnavigation">CS: GO</NavLink></Button>
        <Button><NavLink to="/teams/clashroyale" className="teamnavigation">Clash Royale</NavLink></Button>
      </ButtonGroup>
    );
  }
}
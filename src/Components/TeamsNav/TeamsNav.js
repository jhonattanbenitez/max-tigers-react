import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import "./teamsnav.css";
import {NavLink} from 'react-router-dom';

export default class Example extends React.Component {
  render() {
    return (
      <ButtonGroup>
        <Button><NavLink to="/teams/lol" className="teamnavigation">League of Legends</NavLink></Button>
        <Button><NavLink to="/teams/rl" className="teamnavigation">Rocket League</NavLink></Button>
        <Button>Counter Strike: GO</Button>
        <Button>Clash Royale</Button>
      </ButtonGroup>
    );
  }
}
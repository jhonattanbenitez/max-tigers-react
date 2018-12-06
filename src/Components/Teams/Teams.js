import React from 'react';
import Player from '../Player/Player'
import TeamsNav from '../TeamsNav/TeamsNav'
import { Row } from 'reactstrap';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const LeagueOfLegends = () =>{
    return (
        <div>
            <h3>League Of Legends</h3>
            <Row>
                <Player />
                <Player />
                <Player />
                <Player />
            </Row>
        </div>
    );
}

const RocketLeague = () =>{
    return (
        <div>
            <h3>Rocket League</h3>
            <Row>
                <Player />
                <Player />
                <Player />
                <Player />
            </Row>
        </div>
    );
}

const Teams = () =>{
    return(
        <div>
            <h2>Equipos</h2>
            {/* <Row>
                
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
               
            </Row> */}
            <BrowserRouter>
                <div>
                    <TeamsNav />
                    <Switch>
                        <Route path="/teams/lol" component={LeagueOfLegends}/>
                        <Route path="/teams/rl" component={RocketLeague}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Teams;
import React from 'react';
import Player from '../Player/Player'
import TeamsNav from '../TeamsNav/TeamsNav'
import { Row } from 'reactstrap';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

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
                        <Route path="/teams/player" component={Player}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Teams;
import React, { Component } from 'react';
import Player from '../Player/Player'
import TeamsNav from '../TeamsNav/TeamsNav'
import { Row, Container, Card, CardImg } from 'reactstrap';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import equipos from './equipos.png';

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

class Teams extends Component {
    constructor(){
        super()
        this.state = {
            lolplayers: [
                {
                    id: "01",
                    image: "",
                    incovador: "Invocador 1",
                    linea: "Top",
                    nombre: "Nombre 1"
                }
            ]

        }

        }

    render() {
        return(
            <div>
                <h2>Equipos</h2>
                     <BrowserRouter>
                    
                        <Container>
                            <TeamsNav />
                            <Card className="cardproperties">
                                <CardImg top width="100%" src={equipos} alt="Card image cap" />
                            </Card>
                            <Switch>
                                <Route path="/teams/lol" component={LeagueOfLegends}/>
                                <Route path="/teams/rl" component={RocketLeague}/>
                            </Switch>
                        </Container>
                    
                </BrowserRouter>
            </div>);

    }
    
    
}

export default Teams;
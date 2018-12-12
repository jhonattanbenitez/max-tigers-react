import React, { Component } from 'react';
import Player from '../Player/Player';
import TeamsNav from '../TeamsNav/TeamsNav';
import { Row, Container, Card, CardImg } from 'reactstrap';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LeagueOfLegends from './LeagueOfLegends';
import equipos from './equipos.png';

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

const CounterStrikeGo = () =>{
    return (
        <div>
            <h3>Counter Strike: Global Offensive</h3>
            <Row>
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
            </Row>
        </div>
    );
}

const ClashRoyale = () =>{
    return (
        <div>
            <h3>Clash Royale</h3>
            <Row>
                <Player />
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
                    invocador: "Invocador 1",
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
                                <Route path='/teams/lol' render={(props) => <LeagueOfLegends {...props} 
                                id={this.state.id} 
                                image={this.state.image} 
                                incovador={"Nombre 1"} 
                                linea={"Top"}
                                nombre={this.state.nombre} />} exact/>
                                {/* <Route path="/teams/lol" component={LeagueOfLegends}/> */}
                                <Route path="/teams/rl" component={RocketLeague}/>
                                <Route path="/teams/csgo" component={CounterStrikeGo}/>
                                <Route path="/teams/clashroyale" component={ClashRoyale}/> 
                            </Switch>
                        </Container>
                    
                </BrowserRouter>
            </div>);

    }
    
    
}

export default Teams;
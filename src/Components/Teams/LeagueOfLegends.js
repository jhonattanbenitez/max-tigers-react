import React, { Component } from 'react';
import {Row} from 'reactstrap';
import Player from '../Player/Player'

class LeagueOfLegends extends Component {
    render(){
        return (
            <div>
                <h3>League Of Legends</h3>
                <Row>
                    <Player invocador="Invocador 1" name="Nombre 1" linea="Top"/>
                    <Player invocador="Invocador 2" name="Nombre 2" linea="Jungla"/>
                    <Player invocador="Invocador 3" name="Nombre 3" linea="Mid"/>
                    <Player invocador="Invocador 4" name="Nombre 4" linea="ADC"/>
                    <Player invocador="Invocador 5" name="Nombre 5" linea="Support"/>
                    <Player invocador="Invocador 6" name="Nombre 6" linea="Coach"/>
                </Row>
            </div>
        );
    }
    
}

export default LeagueOfLegends;
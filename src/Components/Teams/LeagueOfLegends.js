import React, { Component } from 'react';
import {Row} from 'reactstrap';
import Player from '../Player/Player'
import soporte from './images/lol/soporte.PNG'
import mid from './images/lol/mid.jpg'

class LeagueOfLegends extends Component {
      render(){
        return (
            <div>
                <h3 className="text-center m-4 ">League Of Legends</h3>
                <Row>
                    <Player invocador="Anillos" name="" linea="Top" src={soporte}/>
                    <Player invocador="Elune" name="" linea="Jungla" src={soporte}/>
                    <Player invocador="Pelirojo 3" name="" linea="Mid" src={mid}/>
                    <Player invocador="Invocador 4" name="Nombre 4" linea={soporte} src={soporte}/>
                    <Player invocador="Invocador 5" name="Nombre 5" linea="top" src={soporte}/>
                    <Player invocador="Invocador 6" name="Nombre 6" linea="Coach" src={soporte}/>
                </Row>
            </div>
        );
    }
    
}

export default LeagueOfLegends;
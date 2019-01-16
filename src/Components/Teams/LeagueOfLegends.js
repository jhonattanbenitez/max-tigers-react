import React, { Component } from 'react';
import {Row} from 'reactstrap';
import Player from '../Player/Player'
import adc from './images/lol/DanxWeb.jpg'
import jungla from './images/lol/EluneWeb.jpg'
import mid from './images/lol/PelirrojoWeb.jpg'
import top from './images/lol/Sr-AnillosWeb.jpg'
import jungla2 from './images/lol/YustyWeb.jpg'
import adc2 from './images/lol/JuanPeaceWeb.jpg'

class LeagueOfLegends extends Component {
      render(){
        return (
            <div>
                <h3 className="text-center m-4 ">League Of Legends</h3>
                <Row>
                    <Player invocador="Anillos" name="" ciudad="Cucúta" linea="Superior" src={top}/>
                    <Player invocador="Elune" name="" ciudad="Bogotá" linea="Jungla" src={jungla}/>
                    <Player invocador="Pelirrojo" name="" ciudad="Cucúta" linea="Medio" src={mid}/>
                    <Player invocador="Danx" name="" ciudad="Bogotá" linea="Tirador" src={adc}/>
                    <Player invocador="Yusty" name="" ciudad="Jamundí" linea="Jungla" src={jungla2}/>
                    <Player invocador="Juan Peace" name="Bogotá" ciudad="" linea="Tirador" src={adc2}/>
                </Row>
            </div>
        );
    }
    
}

export default LeagueOfLegends;
import React from 'react';
import { Card, CardImg,  CardBody, CardTitle, Col, CardSubtitle} from 'reactstrap';
import Social from '../Social/Social'

const Player = (props) =>{
    
    return(

        <div>
        <Col xs="12" sm="12" md="12">
            <Card className="cardproperties mt-4 cardPlayer" style={{ width: 320 }}>
              <CardImg 
                    top width="100%" 
                    src={props.src} 
                    alt="Card image cap" 
                    className="playerImg"/>
                <CardBody>
                  <CardTitle>{props.invocador}</CardTitle>
                  <CardSubtitle className="mt-1 ">{props.linea}</CardSubtitle>
                  <CardSubtitle className="mt-1">{props.name}</CardSubtitle>
                  <CardSubtitle className="mt-1">{props.ciudad}</CardSubtitle>
                  <Social className="mt-1" socialUrl={props.socialUrl} />
                </CardBody>
            </Card>
        </Col>
        </div>
    );
}

export default Player;
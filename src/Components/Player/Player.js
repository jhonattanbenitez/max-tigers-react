import React from 'react';
import { Card, CardImg,  CardBody, CardTitle, Col, CardSubtitle} from 'reactstrap';

const Player = (props) =>{
    
    return(

        <div>
        <Col xs="12" sm="12" md="12">
            <Card className="cardproperties mt-4">
              <CardImg 
                    top width="100%" 
                    src={props.src} 
                    alt="Card image cap" />
                <CardBody>
                  <CardTitle>{props.invocador}</CardTitle>
                  <CardSubtitle>{props.linea}</CardSubtitle>
                  <CardSubtitle>{props.name}</CardSubtitle>
                </CardBody>
            </Card>
        </Col>
        </div>
    );
}

export default Player;
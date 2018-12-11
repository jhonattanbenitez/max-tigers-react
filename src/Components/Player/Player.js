import React from 'react';
/* import user from './user.png' */
import { Card, CardImg,  CardBody, CardTitle, Col, CardSubtitle} from 'reactstrap';

const Player = (props) =>{
    
    return(

        <div>
        <Col xs="12" sm="12" md="12">
                <Card className="cardproperties">
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
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
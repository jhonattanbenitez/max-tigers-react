import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col} from 'reactstrap';
import RedBull from './Red_Bull.jpg';


const Partners = () => {
    return (
        
        <Container>
            <Card>
              <Row>
                  <Col xs="12" sm="4">
                      <CardImg top width="100%" src={RedBull} alt="Card image cap" />
                  </Col>
                  <Col sm="8">
                      <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </CardText>
                        
                      </CardBody>
                  </Col>
              </Row>
            </Card>
        </Container>
      
    );
  };
  
  export default Partners;
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Container, Row, Col} from 'reactstrap';
import RedBull from './Red_Bull.jpg';


const Partners = () => {
    let style = {
        marginBottom: "16px"
    };
    return (
        
        <Container>
            <Card style={style}>
              <Row>
                  <Col xs="12" sm="4">
                      <CardImg top width="100%" src={RedBull} alt="Card image cap"  style={style}/>
                  </Col>
                  <Col sm="8">
                      <CardBody>
                        <CardTitle>Patrocinador</CardTitle>
                        <CardSubtitle>Subtitulo</CardSubtitle>
                        <CardText>
                            Contenido del Patrocinador.
                        </CardText>
                        
                      </CardBody>
                  </Col>
                  <Col xs="12" sm="4">
                      <CardImg top width="100%" src={RedBull} alt="Card image cap" style={style}/>
                  </Col>
                  <Col sm="8">
                      <CardBody>
                        <CardTitle>Patrocinador</CardTitle>
                        <CardSubtitle>Subtitulo</CardSubtitle>
                        <CardText>
                            Contenido del Patrocinador.
                        </CardText>
                        
                      </CardBody>
                  </Col>  <Col xs="12" sm="4">
                      <CardImg top width="100%" src={RedBull} alt="Card image cap" style={style}/>
                  </Col>
                  <Col sm="8">
                      <CardBody>
                        <CardTitle>Patrocinador</CardTitle>
                        <CardSubtitle>Subtitulo</CardSubtitle>
                        <CardText>
                            Contenido del Patrocinador.
                        </CardText>
                        
                      </CardBody>
                  </Col>
              </Row>
            </Card>
        </Container>
      
    );
  };
  
  export default Partners;
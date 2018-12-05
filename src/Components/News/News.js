import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Col} from 'reactstrap';
import  './news.css';



const News = ({title, content, image, }) => {
  
   return (
                 
               
                <Col xs="12" sm="4">
                  <Card className="cardproperties">
                    <CardImg top width="100%" src={image} alt="Card image cap" />
                    <CardBody>
                      <CardTitle>{title}</CardTitle>
                      <CardText>{content}</CardText>
                    </CardBody>
                  </Card>
                </Col>
    
  );
};

export default News;
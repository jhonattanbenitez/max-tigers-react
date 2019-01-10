import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Col, Button} from 'reactstrap';
import  './news.css';

const handleLinks = () =>{
  console.log("link clicked");
}
/* = ({title, content, image }) => */
class News extends Component  {
   
   /*  state = { showAll: false}
    showMore = () => this.setState({showAll: true});
    showLess = () => this.setState({showAll: false}); */
    render(){
      const {title, content, image} = this.props;
      /* const {showAll} = this.state;
      const limit = 250;
      if(content.lenght <= limit){
        return (<Col xs="12" sm="4">
                  <Card className="cardproperties">
                    <CardImg top width="100%" src={image} alt="Card image cap" />
                    <CardBody>
                      <CardTitle>{title}</CardTitle>
                      <CardText>{content}</CardText>
                    </CardBody>
                  </Card>
                </Col>
        );

      }
      if(showAll){
        return(
          <Col xs="12" sm="4">
          <Card className="cardproperties">
            <CardImg top width="100%" src={image} alt="Card image cap" />
            <CardBody>
              <CardTitle>{title}</CardTitle>
              <CardText>{content}</CardText>
              <Button onClick={this.showLess}>Ver menos</Button>
            </CardBody>
          </Card>
        </Col>
        );
       

      }
      const toShow = content.substring(0, limit)+"...";
      return(
        <Col xs="12" sm="4">
          <Card className="cardproperties">
            <CardImg top width="100%" src={image} alt="Card image cap" />
            <CardBody>
              <CardTitle>{title}</CardTitle>
              <CardText>{content}</CardText>
              {toShow}
          <Button onClick={this.showMore}>Ver más</Button>
            </CardBody>
          </Card>
        </Col>
      ); */
      return (
                 
               
        <Col xs="12" sm="6" className="mt-4">
          <Card className="cardproperties">
            <CardImg top width="100%" src={image} alt="Card image cap" />
            <CardBody>
              <CardTitle>{title}</CardTitle>
              <CardText>{content}</CardText>
              <Button onClick={handleLinks}>Ver más</Button>
            </CardBody>
          </Card>
        </Col>

      );

    } 
 
   
};

export default News;
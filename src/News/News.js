import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import Grid from '@material-ui/core/Grid';
import  './card.css';



const News = ({title, content, image, }) => {
  
   return (
    <div>
     
             <Grid item xs={12}>
               <Card className="cardproperties">
                <CardImg top width="100%" src={image} alt="Card image cap" />
                <CardBody>
                  <CardTitle>{title}</CardTitle>
                  <CardText>{content}</CardText>
                </CardBody>
              </Card>
             </Grid>
         
      
      
    </div>
  );
};

export default News;
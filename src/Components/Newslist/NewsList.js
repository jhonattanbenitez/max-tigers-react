import React from 'react';
import News from '../News/News';
import ContentLoader from 'react-content-loader';
import { Row } from 'reactstrap';
const NewsList = ({ news, images, contentLoaded, index }) => {
 
  let mb = {
    marginBottom: "16px"
  }
  if(contentLoaded === false){
    return(<ContentLoader type="instagram" />);
  }else{
  return (
    <Row>
      { 
          news.map((user, i) => {
          return (
                
                                       
                         <News style={mb}
                            key={i}
                            image={images[i]}  
                            title={news[i].title.rendered}
                            content={news[i].content.rendered}
                                                    
                          />
          
              
          );
        })
      }
      </Row>
  );
 }
}
export default NewsList;
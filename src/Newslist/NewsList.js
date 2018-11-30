import React from 'react';
import News from '../News/News';
import ContentLoader from 'react-content-loader';
import { Row } from 'reactstrap';
const NewsList = ({ news, images, contentLoaded, index }) => {
  console.log(contentLoaded);
  console.log(news);  
  console.log('index: ', index);

  console.log('data en newslist', news);
  if(contentLoaded === false){
    return(<ContentLoader type="instagram" />);
  }else{
  return (
    <Row>
      { 
           news.map((user, i) => {
             
          
           return (
                
                    
                       
                         <News
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
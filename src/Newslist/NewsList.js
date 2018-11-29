import React from 'react';
import News from '../News/News';
import ContentLoader from 'react-content-loader';

const NewsList = ({ news, images, contentLoaded, index }) => {
  console.log(contentLoaded);
  console.log(news);  
  console.log('index: ', index);

  console.log('data en newslist', news);
  if(contentLoaded === false){
    return(<ContentLoader type="instagram" />);
  }else{
  return (
    <div>
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
    </div>
  );
 }
}
export default NewsList;
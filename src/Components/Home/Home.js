import React from 'react';
import Carousel from '../Carousel/Carousel';
import NewsList from '../Newslist/NewsList';

const Home = ({news, images, contentLoaded, index}) =>{
    console.log("news en home", news);
    console.log("images en home", images);
    return(
        <div>
        <Carousel />
        <h2 >Últimas Noticias</h2>
        <NewsList  news={news} 
                        images={images} 
                        contentLoaded={contentLoaded} 
                        index={index}
                        
                  />
        </div>
    );
}

export default Home;
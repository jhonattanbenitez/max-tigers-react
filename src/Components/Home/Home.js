import React from 'react';
import Carousel from '../Carousel/Carousel';
import NewsList from '../Newslist/NewsList';
import { Timeline } from 'react-twitter-widgets'

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
            <Timeline
            dataSource={{
            sourceType: 'profile',
            screenName: 'MaxTigersGG'
            }}
            options={{
            username: 'MaxTigersGG',
            height: '800'
            }}
            onLoad={() => console.log('Timeline is loaded!')}
            />
        
        </div>
    );
}

export default Home;
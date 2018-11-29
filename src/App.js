import React, { Component } from 'react';
import Header from './Header/Header'
import Carousel from './Carousel/Carousel'
import NewsList from './Newslist/NewsList'
import { Container } from 'reactstrap';

import './App.css';
class App extends Component {
  constructor() {
    super()
    this.state = {
      news: [
        { 
          src: '',
          title: '', 
          content: ''}
      ],
      images: [
        {
          
        }  
      ],
      contentLoaded: false,
      index: ''

    }
  }
  componentDidMount() {
    fetch('https://beta.maxtigers.com/wp/wp-json/wp/v2/posts')
    .then(res =>res.json())
    .then(data => {
      console.log('data incial', data);
      this.setState({news: data});
      let featuredImageId = '';
      let urls = [];
      data.forEach((post, index) => {
        
        featuredImageId = post.featured_media;
        fetch(`https://beta.maxtigers.com/wp/wp-json/wp/v2/media/${featuredImageId}`)
        .then(res =>  res.json())
        .then(data =>{
         urls[index] = (data.guid.rendered)
         console.log('urls', urls);
         this.setState({images: urls, contentLoaded:true, index: index} )        
        })
      });
      
    });
    
    /*  */
     
  }
  render() {
    return (
      <div className="App">
        <Container>
          <Header />
          <Carousel />
          <h2 >Últimas Noticias</h2>
          
          <NewsList  
                  news={this.state.news} 
                  images={this.state.images} 
                  contentLoaded={this.state.contentLoaded} 
                  index={this.state.index}
                
          />
        </Container>
      </div>
    );
  }
}

export default App;

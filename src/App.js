import React, { Component } from 'react';
import Header from './Components/Header/Header';
import { Container } from 'reactstrap';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Teams from './Components/Teams/Teams';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import Partners from './Components/Partners/Partners';
import './App.css';

const Streams = () =>{
  return(
    <ReactTwitchEmbedVideo channel="Maxtigersgg" />
  );
}

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
  }
 
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Container>
              
              
              {/* <NewsList news={this.state.news} 
                          images={this.state.images} 
                          contentLoaded={this.state.contentLoaded} 
                          index={this.state.index} 
                          
                          /> */}
                   
                  <Switch> 
                      <Route path='/' render={(props) => <Home {...props} 
                        news={this.state.news} 
                        images={this.state.images} 
                        contentLoaded={this.state.contentLoaded} 
                        index={this.state.index} />} exact/>
                      <Route path='/teams' component={Teams} />
                      <Route path='/streams' component={Streams} />
                      <Route path='/patrocinadores' component={Partners} />
                   </Switch>
            </Container>
            <Footer /> 
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

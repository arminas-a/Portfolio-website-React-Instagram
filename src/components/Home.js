import React from 'react';
import Instafeed from 'react-instafeed';
import './styles/css/Home.css';

class Home extends React.Component {
    render() {
      const Home = 'Home';
      return (
        <div id={Home} className='Home'>
          <Instafeed
            limit='9'
            ref='instafeed'
            resolution='standard_resolution'
            sortBy='most-recent'
            target={Home}
            template='<div class="image-container"><a href="{{link}}"><img src="{{image}}" orientation={{landscape}} /><h3>{{caption}}</h3></a></div>'
            userId={`${process.env.REACT_APP_INSTAGRAM_USER_ID}`}
            clientId={`${process.env.REACT_APP_INSTAGRAM_CLIENT_ID}`}
            accessToken={`${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}`}
            />
        </div>
      )
    }
  }


export default Home;
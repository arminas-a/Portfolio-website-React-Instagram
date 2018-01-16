import React from 'react';
import Instafeed from 'react-instafeed';
import './styles/css/Home.css';

class Feed extends React.Component {
    render() {
      const Feed = 'Feed';
      return (
        <div id={Feed} className='Feed'>
          <Instafeed
            limit='10'
            ref='instafeed'
            resolution='standard_resolution'
            sortBy='most-recent'
            target={Feed}
            template='<a href="{{link}}"><img src="{{image}}" /></a>'
            userId={`${process.env.REACT_APP_INSTAGRAM_USER_ID}`}
            clientId={`${process.env.REACT_APP_INSTAGRAM_CLIENT_ID}`}
            accessToken={`${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}`}
            />
        </div>
      )
    }
  }


export default Feed;
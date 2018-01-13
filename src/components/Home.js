import React from 'react';
import Instafeed from 'react-instafeed';
import './style/Home.css';

class Home extends React.Component {
    render() {
      const Home = 'Home';
      return (
        <div id={Home}>
          <Instafeed
            limit='9'
            ref='instafeed'
            resolution='standard_resolution'
            sortBy='most-recent'
            target={Home}
            template=''
            userId='6915448139'
            clientId='4cb9776cd8324d33bd5d00d3795b7622'
            accessToken='6915448139.1677ed0.b65395235dc14376b8319a78cf48df43'
            />
        </div>
      )
    }
  }

export default Home;
import React, { Component } from 'react';
import classes from './MainPage.module.css';
import MainProfile from '../components/Profile/MainProfile/MainProfile';
import Aboutme from '../components/Profile/Aboutme/Aboutme';
import Skills from '../components/Profile/Skills/Skill';
class MainPage extends Component {
  state = {
    contactDetail: [
      {
        icon: ['fas', 'mobile-alt'],
        detail: '061-4129476 (Bank)'
      },
      {
        icon: ['far', 'paper-plane'],
        detail: 'pongsiri.cha@hotmail.com',
        clicked: this.props.mailClicked
      },
      {
        icon: ['fab', 'facebook-square'],
        detail: 'bank.chatkaew',
        clicked: this.props.facebookClicked
      },
      {
        icon: ['fab', 'github'],
        detail: 'pongsirichatkaew',
        clicked: this.props.githubClicked
      },
      {
        icon: ['fab', 'line'],
        detail: 'pc.bank',
        clicked: this.props.lineClicked
      }
    ]
  };
  componentDidUpdate() {
    console.log(`[MainPage] rendering`);
  }
  githubClickedHandler = () => {
    window.open('https://github.com/pongsirichatkaew/', '_blank');
  };

  facebookClickedHandler = () => {
    window.open('https://www.facebook.com/bank.chatkaew', '_blank');
  };
  lineClickedHandler = () => {
    window.open('http://line.me/ti/p/~pc.bank', '_blank');
  };

  mailClickedHandler = () => {
    window.open('mailto://pongsiri.cha@hotmail.com', '_blank');
  };
  render() {
    return (
      <div className={classes.MainPage}>
        <MainProfile
          githubClicked={this.githubClickedHandler}
          facebookClicked={this.facebookClickedHandler}
          mailClicked={this.mailClickedHandler}
        />
        <Aboutme
          githubClicked={this.githubClickedHandler}
          facebookClicked={this.facebookClickedHandler}
          mailClicked={this.mailClickedHandler}
          lineClicked={this.lineClickedHandler}
        />
        <Skills />
      </div>
    );
  }
}

export default MainPage;

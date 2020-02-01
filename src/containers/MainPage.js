import React, { Component } from 'react';
import classes from './MainPage.module.css';
import { connect } from 'react-redux';

import MainProfile from '../components/Profile/MainProfile/MainProfile';
import Aboutme from '../components/Profile/Aboutme/Aboutme';
import Skills from '../components/Profile/Skills/Skill';
import Portfolio from '../components/Profile/Portfolio/Portfolio';
import ContactDetail from '../components/Profile/ContactDetail/ContactDetail';
class MainPage extends Component {
  state = {
    contactDetail: [
      {
        icon: ['fas', 'mobile-alt'],
        detail: '061-4129476 (Bank)',
        clicked: () => {}
      },
      {
        icon: ['far', 'paper-plane'],
        detail: 'pongsiri.cha@hotmail.com',
        clicked: () => this.mailClickedHandler()
      },
      {
        icon: ['fab', 'facebook-square'],
        detail: 'bank.chatkaew',
        clicked: () => this.facebookClickedHandler()
      },
      {
        icon: ['fab', 'github'],
        detail: 'pongsirichatkaew',
        clicked: () => this.githubClickedHandler()
      },
      {
        icon: ['fab', 'line'],
        detail: 'pc.bank',
        clicked: () => this.lineClickedHandler()
      }
    ]
  };
  // componentDidUpdate() {
  //   console.log(`[MainPage] rendering`);
  // }
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
          animated={this.props.animated}
        />
        <Aboutme
          githubClicked={this.githubClickedHandler}
          facebookClicked={this.facebookClickedHandler}
          mailClicked={this.mailClickedHandler}
          lineClicked={this.lineClickedHandler}
          animated={this.props.animated}
        />
        <Skills animated={this.props.animated} />
        <Portfolio animated={this.props.animated} />
        <ContactDetail contactDetail={this.state.contactDetail} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    animated: state.navbar.animated
  };
};
export default connect(mapStateToProps, null)(MainPage);

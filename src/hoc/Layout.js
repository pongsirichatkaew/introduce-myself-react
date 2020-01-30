import React, { Component } from 'react';
import $ from 'jquery';
import Aux from './Auxiliary';
import Navbar from '../components/Navigations/Navbar';
import * as actions from '../store/actions/index';
import { connect } from 'react-redux';

class Layout extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = event => {
    const about = $('#about').offset().top;
    const skills = $('#skills').offset().top;

    const offsetAbout = about / 2 + 0;
    const offsetSkills = (skills - about) / 2 + about;
    var scrollPosition = window.scrollY + 64;
    if (scrollPosition >= 0 && scrollPosition < offsetAbout) {
      this.props.onSelectedScroll('1', true);
    } else if (scrollPosition >= offsetAbout && scrollPosition < offsetSkills) {
      this.props.onSelectedScroll('2', true);
    } else if (scrollPosition >= offsetSkills) {
      this.props.onSelectedScroll('3', true);
    }
  };
  render() {
    return (
      <Aux>
        <Navbar />
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onSelectedScroll: (selectedKey, animated) =>
      dispatch(actions.scrollToNewSection(selectedKey, animated))
  };
};

export default connect(null, mapDispatchToProps)(Layout);

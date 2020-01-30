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
    const portfolio = $('#portfolio').offset().top;

    const offsetAbout = about / 2 + 0;
    const offsetSkills = (skills - about) / 2 + about;
    const offsetPortfolio = (portfolio - skills) / 2 + skills;
    var scrollPosition = window.scrollY + 64;

    if ($(window).scrollTop() + $(window).height() === $(document).height()) {
      this.props.onSelectedScroll('5', true);
    } else if (scrollPosition >= 0 && scrollPosition < offsetAbout) {
      this.props.onSelectedScroll('1', true);
    } else if (scrollPosition >= offsetAbout && scrollPosition < offsetSkills) {
      this.props.onSelectedScroll('2', true);
    } else if (
      scrollPosition >= offsetSkills &&
      scrollPosition < offsetPortfolio
    ) {
      this.props.onSelectedScroll('3', true);
    } else if (scrollPosition >= offsetPortfolio) {
      this.props.onSelectedScroll('4', true);
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

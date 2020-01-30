import React, { Component } from 'react';
import classes from './Navbar.module.css';
import { Menu } from 'antd';
import { connect } from 'react-redux';
class Navbar extends Component {
  componentDidUpdate() {
    console.log(`[Navbar] rendering`);
  }

  render() {
    return (
      <div>
        <Menu
          theme="dark"
          className={classes.Navbar}
          mode="horizontal"
          selectedKeys={[this.props.selectedKey]}
        >
          <Menu.Item key="1">
            <a href="#main">Home</a>
          </Menu.Item>
          <Menu.Item key="2">
            <a href="#about">About me</a>
          </Menu.Item>
          <Menu.Item key="3">
            <a href="#skills">Skills</a>
          </Menu.Item>
          <Menu.Item key="4">Portfolio</Menu.Item>
          <Menu.Item key="5">Contact Detail</Menu.Item>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedKey: state.navbar.selectedKey
  };
};

export default connect(mapStateToProps, null)(Navbar);

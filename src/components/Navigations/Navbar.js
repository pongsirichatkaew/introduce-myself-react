import React, { Component } from 'react';
import classes from './Navbar.module.css';
import { Menu, Layout, Icon } from 'antd';
import { connect } from 'react-redux';
const { Sider, Header } = Layout;

class Navbar extends Component {
  state = {
    collapsed: true
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };


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
          <Menu.Item key="4">
            <a href="#portfolio">Portfolio</a>
          </Menu.Item>
          <Menu.Item key="5">
            <a href="#contact">Contact</a>
          </Menu.Item>
        </Menu>
        <Sider
          className={classes.SidebarItem}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          collapsedWidth={0}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item onClick={this.toggle} key="1">
              <a href="#main">Home</a>
            </Menu.Item>
            <Menu.Item onClick={this.toggle} key="2">
              <a href="#about">About me</a>
            </Menu.Item>
            <Menu.Item onClick={this.toggle} key="3">
              <a href="#skills">Skills</a>
            </Menu.Item>
            <Menu.Item onClick={this.toggle} key="4">
              <a href="#portfolio">Portfolio</a>
            </Menu.Item>
            <Menu.Item onClick={this.toggle} key="5">
              <a href="#contact">Contact</a>
            </Menu.Item>
          </Menu>
        </Sider>
        <Header className={classes.Sidebar}>
          <Icon
            style={{ textAlign: 'left' }}
            className="trigger"
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
          />
        </Header>
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

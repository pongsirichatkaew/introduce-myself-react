import React, { Component } from 'react';

import classes from './MainProfile.module.css';
import srcImage from '../../../assets/images/images.png';
import { Button, Row, Col } from 'antd';

class MainPage extends Component {
  // componentDidUpdate() {
  //   console.log(`[MainPage] rendering`);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.animated.main !== this.props.animated.main;
  }

  render() {
    return (
      <div id="main" className={classes.Content}>
        <Row className={classes.FullRow} type="flex">
          <Col
            className={'animated bounce'}
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
          >
            <img className={classes.Image} src={srcImage} alt="me"></img>
          </Col>
          <Col
            className={'animated bounce'}
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
          >
            <p className={classes.TextHeader}>
              HELLO MY NAME IS <br />
              PONGSIRI CHATKAEW
            </p>
            <Row type="flex" justify="center" align="middle">
              <Col span={3}>
                <Button
                  onClick={this.props.mailClicked}
                  shape="circle"
                  icon="mail"
                  size="large"
                />
              </Col>
              <Col span={3}>
                <Button
                  shape="circle"
                  onClick={this.props.facebookClicked}
                  icon="facebook"
                  size="large"
                />
              </Col>
              <Col span={3}>
                <Button
                  shape="circle"
                  onClick={this.props.githubClicked}
                  icon="github"
                  size="large"
                />
              </Col>
              <Col span={24} style={{ marginTop: '16px' }}>
                <Button
                  className={classes.ButtonCV}
                  type="primary"
                  icon="download"
                  size="large"
                >
                  DOWNLOAD MY CV
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MainPage;

import React, { Component } from 'react';
import classes from './Aboutme.module.css';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import Experience from '../Experience/Experinece';
class Aboutme extends Component {
  componentDidUpdate() {
    console.log(`[Aboutme] rendering`);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.animated.about !== this.props.animated.about;
  }
  render() {
    let contactProfile = null;
    let contactExperience = null;
    let animatedClassFadeIn = [];
    if (this.props.animated.about === true) {
      contactProfile = (
        <div
          style={{ color: 'white', paddingLeft: '1em', paddingRight: '1em' }}
        >
          <p style={{ fontSize: '1.8em' }}>About me</p> <br />
          <p>
            Hi, I am a Software Engineer for almost one year. I experience in
            internal company web development such as KPI online, booking room
            and invoice form using VueJs(frontend) and Flask(backend) libraries.
            I also enjoy being challenged with projects that require me to work
            outside my comfort zone and knowledge set, as continuing to learn
            new programming languages and development techniques <br />
          </p>
        </div>
      );
      contactExperience = <Experience />;
      animatedClassFadeIn = ['animated', 'fadeInLeft'];
    }

    return (
      <div id="about" className={classes.Content}>
        <Row className={classes.FullRow} type="flex">
          <Col
            className={animatedClassFadeIn.join(' ')}
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
          >
            {contactProfile}
          </Col>
          <Col
            className={animatedClassFadeIn.join(' ')}
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
          >
            <div style={{ color: 'white', paddingRight: '2em' }}>
              {contactExperience}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    animated: state.navbar.animated
  };
};

export default connect(mapStateToProps, null)(Aboutme);

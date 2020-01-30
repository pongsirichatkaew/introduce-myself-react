import React, { Component } from 'react';
import classes from './Skill.module.css';
import { connect } from 'react-redux';

import { Row, Col, Progress } from 'antd';

class Skills extends Component {
  componentDidUpdate() {
    console.log(`[SKills] rendering`);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.animated.skills !== this.props.animated.skills;
  }
  render() {
    let animatedClassFadeIn = [classes.Full];
    let skills = null;
    if (this.props.animated.skills) {
      animatedClassFadeIn.push('animated');
      animatedClassFadeIn.push('slideInRight');
      skills = (
        <Row
          className={animatedClassFadeIn.join(' ')}
          type="flex"
          justify="center"
          gutter={[16, 32]}
        >
          <Col span={24}>
            <h1 className={classes.TextHeader}>My Skills</h1>
            <p className={classes.Text}>
              I have worked primarily with JavaScript, Python with libraries
              such as VueJS(JavaScript) and Flask(Python).
              <br /> Interested in fullstack developer or backend developer.
            </p>
          </Col>
          <Col span={12}>
            <h1 className={classes.TextSkill}>VueJS</h1>
          </Col>
          <Col span={12}>
            <Progress
              className={classes.Progress}
              percent={75}
              strokeWidth={16}
              strokeColor="#5BC0BE"
              showInfo={false}
            />
          </Col>
          <Col span={12}>
            <h1 className={classes.TextSkill}>JavaScript</h1>
          </Col>
          <Col span={12}>
            <Progress
              className={classes.Progress}
              percent={70}
              strokeWidth={16}
              strokeColor="#5BC0BE"
              showInfo={false}
            />
          </Col>
          <Col span={12}>
            <h1 className={classes.TextSkill}>SQL</h1>
          </Col>
          <Col span={12}>
            <Progress
              className={classes.Progress}
              percent={65}
              strokeWidth={16}
              strokeColor="#5BC0BE"
              showInfo={false}
            />
          </Col>
          <Col span={12}>
            <h1 className={classes.TextSkill}>Flask</h1>
          </Col>
          <Col span={12}>
            <Progress
              className={classes.Progress}
              percent={60}
              strokeWidth={16}
              strokeColor="#5BC0BE"
              showInfo={false}
            />
          </Col>
          <Col span={12}>
            <h1 className={classes.TextSkill}>Python</h1>
          </Col>
          <Col span={12}>
            <Progress
              className={classes.Progress}
              percent={60}
              strokeWidth={16}
              strokeColor="#5BC0BE"
              showInfo={false}
            />
          </Col>
          <Col span={12}>
            <h1 className={classes.TextSkill}>React</h1>
          </Col>
          <Col span={12}>
            <Progress
              className={classes.Progress}
              percent={50}
              strokeWidth={16}
              strokeColor="#5BC0BE"
              showInfo={false}
            />
          </Col>
        </Row>
      );
    }

    return (
      <div id="skills" className={classes.Skills}>
        {skills}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    animated: state.navbar.animated
  };
};

export default connect(mapStateToProps, null)(Skills);

import React, { Component } from 'react';
import classes from './Portfolio.module.css';
import Card from '../../UI/Card/Card';
import { Row, Col, Button } from 'antd';
const ButtonGroup = Button.Group;

class Portfolio extends Component {
  state = {
    portfolioLists: [
      {
        name: 'Invoice Form',
        description:
          'Invoice form web application is a web application for Financial department that have to track the finance form and prevent them for losting a paper',
        tags: ['JavaScript', 'Python', 'VueJS', 'Flask', 'SQL'],
        url: [
          {
            link: 'https://github.com/pongsirichatkaew/invoice_form_front',
            type: 'frontend'
          },
          {
            link: 'https://github.com/pongsirichatkaew/invoice_form_back',
            type: 'backend'
          }
        ],
        show: false
      },
      {
        name: 'Booking room',
        description:
          'Booking room web application is a web application for booking a room and prevent time collision',
        tags: ['Python', 'Flask', 'SQL'],
        url: [
          {
            link: 'https://github.com/pongsirichatkaew/booking_room',
            type: 'backend'
          }
        ],
        show: false
      },
      {
        name: 'KPI Online',
        description:
          'KPI online is a web application for measure performance or achievement of work. This application only used in mobile(not responsive) and cooperate with One Chat(internal chat application)',
        tags: ['JavaScript', 'Python', 'VueJS', 'Flask', 'SQL'],
        url: [
          {
            link: 'https://github.com/pongsirichatkaew/HRCI_Front_Mobile',
            type: 'frontend'
          },
          {
            link: 'https://github.com/pongsirichatkaew/HRCI_backend',
            type: 'backend'
          }
        ],
        show: false
      },
      {
        name: 'Introduce myself',
        description: 'Static web site to introduce myself',
        tags: ['JavaScript', 'React'],
        url: [
          {
            link: 'https://github.com/pongsirichatkaew/introduce-myself-app',
            type: 'frontend'
          }
        ],
        show: false
      }
    ]
  };
  componentDidUpdate() {
    console.log(`[Portfolio] rendering`);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.animated.portfolio !== this.props.animated.portfolio;
  }
  onMouseEnterHandler = port => {
    const updatedPortfolioLists = [...this.state.portfolioLists];
    const indexPortfolioLists = updatedPortfolioLists.findIndex(p => {
      return port.name === p.name;
    });
    updatedPortfolioLists[indexPortfolioLists].show = true;
    this.setState({ portfolioLists: updatedPortfolioLists });
  };

  onMouseLeaveHandler = port => {
    const updatedPortfolioLists = [...this.state.portfolioLists];
    const indexPortfolioLists = updatedPortfolioLists.findIndex(p => {
      return port.name === p.name;
    });
    updatedPortfolioLists[indexPortfolioLists].show = false;
    this.setState({ portfolioLists: updatedPortfolioLists });
  };
  render() {
    const arrGroup = [];
    let portfolioLists = this.state.portfolioLists.map(port => {
      port.tags.map(tag => arrGroup.push(tag));
      return (
        <Col
          key={port.name}
          className={classes.CenterCard}
          style={{ paddingTop: '16px', paddingBottom: '16px' }}
          xs={24}
          sm={24}
          md={12}
          lg={6}
          xl={6}
          onMouseEnter={() => this.onMouseEnterHandler(port)}
          onMouseLeave={() => this.onMouseLeaveHandler(port)}
        >
          <Card animated={port.show} name={port.name} />
        </Col>
      );
    });

    const BtnGroup = [
      <Button size={'large'} key={'all'}>
        All
      </Button>
    ];
    const newTags = new Set(arrGroup);
    newTags.forEach(tag => {
      BtnGroup.push(
        <Button size={'large'} key={tag}>
          {tag}
        </Button>
      );
    });
    return (
      <div id="portfolio" className={classes.Portfolio}>
        <p className={classes.TextHeader}>Portfolio</p>
        <ButtonGroup className={classes.BtnGroup}>{BtnGroup}</ButtonGroup>

        <Row type="flex" align={'middle'} justify={'space-around'}>
          {portfolioLists}
        </Row>
      </div>
    );
  }
}

export default Portfolio;

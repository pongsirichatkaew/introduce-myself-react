import React, { Component } from 'react';
import classes from './Portfolio.module.css';
import Card from '../../UI/Card/Card';
import { Row, Col } from 'antd';
import srcReact from '../../../assets/images/react.png';
import srcVue from '../../../assets/images/vue.png';
import srcFlask from '../../../assets/images/flask.png';
import Modal from '../../UI/Modal/Modal';
// const ButtonGroup = Button.Group;

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
        image: srcVue,
        show: false
      },
      {
        name: 'Booking room',
        description:
          'Booking room web application is a web application for booking a room and prevent time collision.This application only used in mobile(not responsive) and cooperate with One Chat(internal chat application)',
        tags: ['Python', 'Flask', 'SQL'],
        url: [
          {
            link: 'https://github.com/pongsirichatkaew/booking_room',
            type: 'backend'
          }
        ],
        image: srcFlask,
        show: false,
        demo: [
          {
            name: 'bookingroom',
            url: 'http://203.150.243.73:8001/room/62107/1564043430',
            description:
              'Please demo it on mobile or use Toggle device toolbar from Chrome '
          }
        ]
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
        image: srcVue,
        show: false,
        demo: [
          {
            name: 'Assessor',
            url:
              'http://203.150.243.73:8002/accessor/a129f104-d8a4-4f3a-aaf0-a123fa185060',
            description: 'for assessor to check his/her staff '
          },
          {
            name: 'KpiOnline',
            url:
              'http://203.150.243.73:8002/kpionline/a129f104-d8a4-4f3a-aaf0-a123fa185060',
            description: 'for assessor to evaluation his/her staff '
          },
          {
            name: 'Uploadfile',
            url:
              'http://203.150.243.73:8002/kpiupload/a129f104-d8a4-4f3a-aaf0-a123fa185060',
            description:
              'for assessor to upload present file for his/her staff that have to present'
          }
        ]
      },
      {
        name: 'Introduce myself',
        description: 'Static web site to introduce myself',
        tags: ['JavaScript', 'React'],
        url: [
          {
            link: 'https://github.com/pongsirichatkaew/introduce-myself-react',
            type: 'frontend'
          }
        ],
        image: srcReact,
        show: false,
        demo: [
          {
            name: 'pongsirichatkaew',
            url: 'http://203.150.243.73:8000'
          }
        ]
      }
    ],
    modalVisible: false,
    portSelected: {}
  };
  // componentDidUpdate() {
  //   console.log(`[Portfolio] rendering`);
  // }
  showModal = port => {
    const updatedPortfolioLists = [...this.state.portfolioLists];
    const indexPortfolioLists = updatedPortfolioLists.findIndex(p => {
      return port.name === p.name;
    });
    this.setState({
      modalVisible: true,
      portSelected: updatedPortfolioLists[indexPortfolioLists]
    });
  };

  handleOk = () => {
    this.setState({ modalVisible: false });
  };

  handleCancel = () => {
    this.setState({ modalVisible: false });
  };

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
  githubClickedHandler = url => {
    window.open(url, '_blank');
  };
  render() {
    const arrGroup = [];
    let portfolioLists = this.state.portfolioLists.map(port => {
      port.tags.map(tag => arrGroup.push(tag));
      return (
        <Col
          key={port.name}
          className={classes.CenterCard}
          style={{ padding: '16px' }}
          xs={24}
          sm={24}
          md={12}
          lg={6}
          xl={6}
          onMouseEnter={() => this.onMouseEnterHandler(port)}
          onMouseLeave={() => this.onMouseLeaveHandler(port)}
          onClick={() => this.showModal(port)}
        >
          <Card srcImage={port.image} animated={port.show} name={port.name} />
        </Col>
      );
    });

    // const BtnGroup = [
    //   <Button size={'large'} key={'all'}>
    //     All
    //   </Button>
    // ];
    // const newTags = new Set(arrGroup);
    // newTags.forEach(tag => {
    //   BtnGroup.push(
    //     <Button size={'large'} key={tag}>
    //       {tag}
    //     </Button>
    //   );
    // });
    return (
      <div id="portfolio" className={classes.Portfolio}>
        <p className={classes.TextHeader}>Portfolio</p>
        <Modal
          modalVisible={this.state.modalVisible}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
          port={this.state.portSelected}
          githubClicked={this.githubClickedHandler}
        />
        {/* <ButtonGroup className={classes.BtnGroup}>{BtnGroup}</ButtonGroup> */}
        <Row type="flex" align={'middle'} justify={'space-around'}>
          {portfolioLists}
        </Row>
      </div>
    );
  }
}

export default Portfolio;

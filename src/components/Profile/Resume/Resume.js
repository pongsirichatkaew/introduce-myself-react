import React from 'react';
import classes from './Resume.module.css';
import { Progress } from 'antd';

import srcProfile from '../../../assets/images/me.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faMapMarkerAlt,
  faMobileAlt,
  faEnvelopeOpen,
  faUniversity,
  faSchool
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faGithub,
  faLine
} from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

library.add(faMapMarkerAlt);
library.add(faMobileAlt);
library.add(faEnvelopeOpen);
library.add(faFacebookSquare);
library.add(faGithub);
library.add(faLine);
library.add(faClock);
library.add(faUniversity);
library.add(faSchool);

const resume = props => {
  window.print();
  return (
    <div className={classes.page}>
      <div className={classes.flexContainer}>
        <div className={classes.flexLeft}>
          <div className={classes.image}>
            <img
              src={srcProfile}
              alt={'cat'}
              className={classes.imageContain}
            />
          </div>
          <div className={classes.address}>
            <div className={classes.addressContain}>
              <p style={{ fontSize: '24px' }}>PONGSIRI CHATKEAW</p>
              <p style={{ fontSize: '22px' }}>
                <FontAwesomeIcon
                  style={{ marginRight: '8px' }}
                  icon={['fas', 'map-marker-alt']}
                />
                2508/798 Dindaeng <br /> Bangkok 10400{' '}
              </p>
              <p style={{ fontSize: '22px' }}>
                <FontAwesomeIcon
                  style={{ marginRight: '8px' }}
                  icon={['fas', 'mobile-alt']}
                />
                061-4129476 (BANK)
              </p>
            </div>
          </div>
          <div className={classes.skills}>
            <p style={{ fontSize: '24px', color: 'white' }}>SKILLS</p>
            <div className={classes.skillsContainer}>
              <div className={classes.skillsContainerLeft}>
                <p style={{ fontSize: '22px', width: '100%', color: 'white' }}>
                  VueJs
                </p>
              </div>
              <div className={classes.skillsContainerRight}>
                <Progress
                  className={classes.progress}
                  percent={75}
                  strokeWidth={8}
                  strokeColor="#5BC0BE"
                  showInfo={false}
                />
              </div>
            </div>
            <div className={classes.skillsContainer}>
              <div className={classes.skillsContainerLeft}>
                <p style={{ fontSize: '22px', width: '100%', color: 'white' }}>
                  Javascript
                </p>
              </div>
              <div className={classes.skillsContainerRight}>
                <Progress
                  className={classes.progress}
                  percent={70}
                  strokeWidth={8}
                  strokeColor="#5BC0BE"
                  showInfo={false}
                />
              </div>
            </div>
            <div className={classes.skillsContainer}>
              <div className={classes.skillsContainerLeft}>
                <p style={{ fontSize: '22px', width: '100%', color: 'white' }}>
                  SQL
                </p>
              </div>
              <div className={classes.skillsContainerRight}>
                <Progress
                  className={classes.progress}
                  percent={60}
                  strokeWidth={8}
                  strokeColor="#5BC0BE"
                  showInfo={false}
                />
              </div>
            </div>
            <div className={classes.skillsContainer}>
              <div className={classes.skillsContainerLeft}>
                <p style={{ fontSize: '22px', width: '100%', color: 'white' }}>
                  Flask
                </p>
              </div>
              <div className={classes.skillsContainerRight}>
                <Progress
                  className={classes.progress}
                  percent={55}
                  strokeWidth={8}
                  strokeColor="#5BC0BE"
                  showInfo={false}
                />
              </div>
            </div>
            <div className={classes.skillsContainer}>
              <div className={classes.skillsContainerLeft}>
                <p style={{ fontSize: '22px', width: '100%', color: 'white' }}>
                  Python
                </p>
              </div>
              <div className={classes.skillsContainerRight}>
                <Progress
                  className={classes.progress}
                  percent={55}
                  strokeWidth={8}
                  strokeColor="#5BC0BE"
                  showInfo={false}
                />
              </div>
            </div>
            <div className={classes.skillsContainer}>
              <div className={classes.skillsContainerLeft}>
                <p style={{ fontSize: '22px', width: '100%', color: 'white' }}>
                  React
                </p>
              </div>
              <div className={classes.skillsContainerRight}>
                <Progress
                  className={classes.progress}
                  percent={50}
                  strokeWidth={8}
                  strokeColor="#5BC0BE"
                  showInfo={false}
                />
              </div>
            </div>
          </div>
          <div className={classes.contact}>
            <p style={{ fontSize: '24px', color: 'white' }}>SOCIAL MEDIA</p>
            <div className={classes.contactContain}>
              <p style={{ fontSize: '22px' }}>
                <FontAwesomeIcon
                  style={{ marginRight: '8px' }}
                  icon={['fas', 'envelope-open']}
                />
                pongsiri.cha@hotmail.com
              </p>
              <p style={{ fontSize: '22px' }}>
                <FontAwesomeIcon
                  style={{ marginRight: '8px' }}
                  icon={['fab', 'line']}
                />
                pc.bank
              </p>
              <p style={{ fontSize: '22px' }}>
                <FontAwesomeIcon
                  style={{ marginRight: '8px' }}
                  icon={['fab', 'facebook-square']}
                />
                Bank Chatkaew
              </p>
              <p style={{ fontSize: '22px' }}>
                <FontAwesomeIcon
                  style={{ marginRight: '8px' }}
                  icon={['fab', 'github']}
                />
                /pongsirichatkaew
              </p>
            </div>
          </div>
        </div>
        <div className={classes.flexRight}>
          <div className={classes.profile}>
            <p className={classes.profileHeader}>PROFILE</p>
            <p
              style={{
                textAlign: 'left',
                paddingLeft: '8px',
                paddingRight: '8px'
              }}
            >
              Hi, I am a Software Engineer for almost one year. I experience in
              internal company web development such as KPI online, booking room
              and invoice form.
            </p>
          </div>
          <div className={classes.experience}>
            <div className={classes.experienceContain}>
              <p className={classes.experienceHeader}>My experience</p>
              <p>
                INET - Internet Thailand Public Co., Ltd.(INET)
                <br />
                Software Engineer
                <br /> <FontAwesomeIcon icon={['far', 'clock']} />
                February 2019 - December 2019
                <br /> • Maintained and develop internal web site and database
                for the company such as KPI online, booking room, invoice form.
                <br />
                <br />
                Depth first CO., LTD. Developer(Intern)
                <br /> <FontAwesomeIcon icon={['far', 'clock']} /> June 2017 -
                August 2017
                <br /> • Learning Java and concept of OOP.
                <br />• Learning Android and how to code on Android Studio.
              </p>
            </div>
          </div>
          <div className={classes.education}>
            <div className={classes.educationContainer}>
              <p className={classes.educationHeader}>My Education</p>
              <p>
                • Bachelor of Engineering, Computer Engineering
                <br />
                <FontAwesomeIcon icon={['fas', 'university']} /> Thammasat
                University
                <br /> <FontAwesomeIcon icon={['far', 'clock']} /> 2015 - 2019
                <br />
                <br />
                • Science-Math Program
                <br />
                <FontAwesomeIcon icon={['fas', 'school']} /> Horwang School
                <br /> <FontAwesomeIcon icon={['far', 'clock']} /> 2012 - 2015
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;

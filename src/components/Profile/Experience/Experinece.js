import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
library.add(faClock);

const experience = props => (
  <div style={{ color: 'white' }}>
    <p style={{ fontSize: '36px' }}>My experience</p>
    <p
      style={{
        textAlign: 'left',
        paddingLeft: '1em',
        paddingRight: '1em'
      }}
    >
      INET - Internet Thailand Public Co., Ltd.(INET)
      <br />
      Software Engineer
      <br /> <FontAwesomeIcon icon={['far', 'clock']} />
      February 2019 - December 2019
      <br /> • Maintained and develop internal web site and database for the
      company such as KPI online, booking room, invoice form
      <br />
      <br />
      Depth first CO., LTD. Developer(Intern)
      <br /> <FontAwesomeIcon icon={['far', 'clock']} /> June 2017 - August 2017
      <br /> • Learning Java and concept of OOP.
      <br />• Learning Android and how to code on Android Studio.
    </p>
  </div>
);

export default experience;

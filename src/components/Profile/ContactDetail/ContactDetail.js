import React from 'react';
import classes from './ContactDetail.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faGithub,
  faLine
} from '@fortawesome/free-brands-svg-icons';

import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

library.add(faFacebookSquare);
library.add(faGithub);
library.add(faLine);
library.add(faMobileAlt);
library.add(faPaperPlane);

const contact = props => (
  <div style={{ textAlign: 'left' }}>
    <p style={{ fontSize: '36px' }}>ContactDetail</p>
    {props.contactDetail.map(contact => (
      <div key={contact.icon} style={{ color: 'white' }}>
        <FontAwesomeIcon icon={contact.icon} />
        <span className={classes.SpanClicked} onClick={contact.clicked}>
          {contact.detail}
        </span>
      </div>
    ))}
  </div>
);

export default contact;

import React from 'react';
import classes from './ContactDetail.module.css';
import { Row, Col } from 'antd';

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

const contact = props => {
  // console.log(props.contactDetail);
  return (
    <div id="contact" className={classes.Container}>
      <Row type="flex">
        {props.contactDetail.map(contact => (
          <Col xs={24} sm={24} md={12} lg={12} xl={12} key={contact.icon}>
            <div className={classes.ContactItem}>
              <FontAwesomeIcon icon={contact.icon} />
              <span
                className={classes.SpanClicked}
                onClick={() => contact.clicked()}
              >
                {contact.detail}
              </span>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default contact;

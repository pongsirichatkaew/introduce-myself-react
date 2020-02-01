import React from 'react';
import classes from './Card.module.css';
// import Modal from '../Modal/Modal';
const card = props => {
  let attachedClasses = [classes.card];
  if (props.animated) {
    attachedClasses.push('animated');
    attachedClasses.push('bounce');
  }
  return (
    <div>
      <div className={attachedClasses.join(' ')}>
        <img
          src={props.srcImage}
          alt={'my-cat'}
          style={{ width: '100%', height: '300px' }}
        />
        <div className={classes.container}>
          <h4>{props.name}</h4>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default card;

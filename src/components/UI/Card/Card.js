import React from 'react';
import classes from './Card.module.css';
import srcImage from '../../../assets/images/profile.jpg';
const card = props => {
  let attachedClasses = [classes.card];

  if (props.animated) {
    attachedClasses.push('animated');
    attachedClasses.push('bounce');
  }
  return (
    <div className={attachedClasses.join(' ')}>
      <img src={srcImage} alt={'my-cat'} style={{ width: '100%' }} />
      <div className={classes.container}>
        <h4>{props.name}</h4>
        <p></p>
      </div>
    </div>
  );
};

export default card;

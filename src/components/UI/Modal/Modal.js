import React from 'react';
// import classes from './Modal.module.css';
import { Modal, Button, Typography, Tag } from 'antd';
const { Text } = Typography;

const modal = props => {
  if (props.port.demo) {
    props.port.demo.map(d => {
      return d;
    });
  }

  const color = type => {
    if (type.toLowerCase() === 'vuejs') {
      return 'green';
    } else if (type.toLowerCase() === 'python') {
      return 'purple';
    } else if (type.toLowerCase() === 'sql') {
      return 'orange';
    } else if (type.toLowerCase() === 'flask') {
      return 'red';
    } else if (type.toLowerCase() === 'react') {
      return 'blue';
    } else if (type.toLowerCase() === 'javascript') {
      return 'orange';
    } else {
      return 'gold';
    }
  };
  let arrTags = [];
  if (props.port.tags) {
    arrTags = props.port.tags.map(tag => (
      <Tag key={tag} color={color(tag)}>
        {tag}
      </Tag>
    ));
  }

  let arrDemo = [];
  if (props.port.demo) {
    arrDemo = props.port.demo.map(
      (d => (
        <div key={d.url} style={{ marginBottom: '8px' }}>
          <a target="_blank" rel="noopener noreferrer" href={d.url}>
            {d.name} (Demo)
          </a>
          <br />
          <Text mark> {d.description}</Text>
        </div>
      ): null)
    );
  }

  let arrBtn = [];
  if (props.port.url) {
    arrBtn = props.port.url.map(u => (
      <Button
        type="primary"
        icon="github"
        key={u.type}
        onClick={() => props.githubClicked(u.link)}
      >
        {u.type}
      </Button>
    ));
  }
  return (
    <div>
      <Modal
        visible={props.modalVisible}
        title={props.port.name}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
        footer={arrBtn}
      >
        <p>{props.port.description}</p>
        {arrDemo} <br />
        {arrTags} <br />
      </Modal>
    </div>
  );
};

export default modal;

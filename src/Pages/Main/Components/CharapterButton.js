import React, { useState } from 'react';
import { List, Popover, Typography } from 'antd';
import cl from './charapterButton.module.css';

const CharapterButton = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <Popover
      placement={props.position}
      content={
      <List>
        <List.Item>
          <Typography.Text mark></Typography.Text> Пункт 1
        </List.Item>
        <List.Item>
          <Typography.Text mark></Typography.Text> Пункт 2
        </List.Item>
        <List.Item>
          <Typography.Text mark></Typography.Text> Пункт 3
        </List.Item>
      </List>
    }
      title=""
      trigger="hover"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <div className={cl.charapterButton}></div>
    </Popover>
  );
};

export default CharapterButton;
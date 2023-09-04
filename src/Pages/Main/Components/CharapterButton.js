import React, { useState } from 'react';
import { Card, Popover, Row, Col } from 'antd';
import cl from './charapterButton.module.css';
import Meta from 'antd/es/card/Meta';
import { CheckCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
const images = [
  "https://goods-photos.static1-sima-land.com/items/1154864/0/700.jpg?v=1524206636",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Monomakh%27s_Cap_-_by_shakko_05.JPG/600px-Monomakh%27s_Cap_-_by_shakko_05.JPG"
];

const CharapterButton = (props) => {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const [image,setImage] = useState(null);
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <Popover
      placement={props.position}
      content={
        <Row gutter={[24,32]} justify="space-between"  style={{'maxHeight':'400px', 'maxWidth': '240px', 'overflowY': 'scroll'}}>
          <Col md={24}>
          <Card
        style={{
          width: 180,
        }}
        cover={
          <img
            alt="example"
            src={images[0]}
            onClick={()=>{setOpen(false); setImage(selected===1 ? null : images[0]); setSelected(selected===1?0:1)}}
          />
        }
        actions={ (selected===1) ? [
          <CheckCircleOutlined  style={{ fontSize: '24px', color: 'green' }} key="ellipsis" onClick={()=>{setSelected(0); setOpen(false); setImage(null);}} />,
        ]:
  [<ExclamationCircleOutlined  style={{ fontSize: '24px'}} onClick={()=>{setSelected(1); setOpen(false); setImage(images[0]);}}/>
  ]
      }
      >
        <Meta
          title="Шапка невидимка"
        />
      </Card>
      <Card
      style={{
        width: 180,
      }}
      actions={selected===2 ? [
        <CheckCircleOutlined style={{ fontSize: '24px', color: 'green' }} key="ellipsis" onClick={()=>{setSelected(0); setOpen(false); setImage(null);}} />,
      ]:
      [
        <ExclamationCircleOutlined style={{ fontSize: '24px'}} size={1} onClick={()=>{setSelected(2); setOpen(false); setImage(images[1]);}}/>
      ]
    }
      cover={
        <img
          alt="example"
          src={images[1]}
          onClick={()=>{setOpen(false); setImage(selected===2 ? null : images[1]); setSelected(selected===2?0:2)}}
        />
      }
    >
      <Meta
        title="Шапка Мономаха"
      />
    </Card>
          </Col>
        </Row>
        
    }
      title=""
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <div className={cl.charapterButton}>
        {image!==null?<img src={image} style={{maxWidth:'100%'}} alt=''/>:<></>}
      </div>
    </Popover>
  );
};

export default CharapterButton;
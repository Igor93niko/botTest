import React, { useState } from 'react';
import cl from './main.module.css';
import { Typography, notification } from 'antd';
import Cloth from './Components/Cloth/Cloth';
import Feature from './Components/feature/Feature';


const panel = [
  {
    id: 'cloth',
    text: 'Одежда',
    el: Cloth
  },
  {
    id: 'params',
    text: 'Параметры',
    el: Feature
  },
]

const Main = () => {
  const [active,setActive] = useState(panel[0]);
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.error({
      message: `${placement}`,
      placement,
    });
  };
  const [save, setSave] = useState(false);
  const clickHandler = (item) => {
    if (save) {
      openNotification('Сохраните перед уходом');
    } else {
      setActive(item);
    }
  }
  return (
    <div className={cl.main}>
      {contextHolder}
      <div className={cl.card}>
        <div className={cl.cardMain}>
          <div className={cl.cardHeader}><Typography.Title level={2} className={cl.title} color='#C69C52'>Персонаж</Typography.Title></div>
          <div className={cl.cardBody}>
            <div className={cl.panel}>
              {panel.map(item=>{
                return(
                   <div key={item.id} className={item.id===active.id ? cl.panelButton+ ' '+cl.active:cl.panelButton} onClick={()=>clickHandler(item)}>{item.text}</div>
                );
              })}
            </div>
            <div className={cl.charapter}>
              {
                <active.el save={(value)=>{setSave(value)}}/>
              }
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Main;
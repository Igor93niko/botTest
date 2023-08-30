import React, { useState } from 'react';
import cl from './main.module.css';
import { Typography } from 'antd';
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

  const clickHandler = (item) => {
    setActive(item);
  }
  return (
    <div className={cl.main}>
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
                <active.el/>
              }
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Main;
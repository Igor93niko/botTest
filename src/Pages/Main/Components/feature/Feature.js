import React, { useEffect, useState } from 'react';
import cl from './feature.module.css';
import { Button, Typography } from 'antd';
const dataSource = {
    name: 'Anton',
    race: 'Эльф',
    level: '1',
    experience: '20/200',
    points: '0',
    energy: '90/100',
    cold: '541',
    power: 0,
    stamina: 0,
    agility: 0,
    atack: 6,
    defence: 1,
    health: '100/100',
    evasion: '0.0',
    accuracy: '100',
    criticalDamage: '10',
    criticalDamageChance: '2',
    activeSkills: ['Обычная атака - вы наносите простой удар оружием (урон 6-8).',
'Двойной удар - вы наносите два удара подряд (урон 9-12). Откат умения 2 хода. Уровень умения: 1 (100.0% урона).'],
    passiveSkills: ['Богач - с монстров падает на 10% больше золота. Уровень умения: 1 (+10.0% к получаемому золоту).']
}

const fields = {
  current: [
    {
      value: 'name',
      text: 'Имя пользователя',
    },
    {
      value: 'race',
      text: 'Раса',
    },
    {
      value: 'level',
      text: 'Уровень',
    },
    {
      value: 'experience',
      text: 'Опыт',
    },
    {
      value: 'points',
      text: 'Очки характеристик',
    },
    {
      value: 'energy',
      text: 'Энергия',
    },
    {
      value: 'cold',
      text: 'Золото',
    },
  ],
  player: [
    {
      value: 'power',
      text: 'Сила',
      measure: 'ед.',
      isChanges: true,
    },
    {
      value: 'stamina',
      text: 'Выносливость',
      measure: 'ед.',
      isChanges: true,
    },
    {
      value: 'agility',
      text: 'Ловкость',
      measure: 'ед.',
      isChanges: true,
    },
    {
      value: 'atack',
      text: 'Атака',
      measure: 'ед.',
      isChanges: true,
    },
    {
      value: 'defence',
      text: 'Защита',
      measure: 'ед.',
      isChanges: true,
    },
    {
      value: 'health',
      text: 'Здоровье',
      measure: 'ед.',
      isChanges: true,
    },
    {
      value: 'evasion',
      text: 'Уклонение',
      measure: '%',
      isChanges: false,
    },
    {
      value: 'accuracy',
      text: 'Меткость',
      measure: '%',
      isChanges: false,
    },
    {
      value: 'criticalDamage',
      text: 'Критический урон',
      measure: '%',
      isChanges: false,
    },
    {
      value: 'criticalDamageChance',
      text: 'Шанс критического урона',
      measure: '%',
      isChanges: false,
    },
  ],
}
const Feature = () => {
  const [data,setData] = useState(dataSource);
  const [firstData, setFirstData] = useState(dataSource);
  const [countPoint, setCountPoint] = useState(10);
  const [firstPoint,setFirstPoint] = useState(10);

  useEffect(()=>{
    setFirstData(dataSource);
    setFirstPoint(10);
  },[]);
  const [fieldChange, setFieldChange] = useState({});
  const clickHandler = (item) => {
    const newData = {...data, [item]: data[item]+1};
    setFieldChange({...fieldChange, [item]: true});
    setCountPoint(countPoint-1);
    setData(newData);
  };
  const clickMinusHandler = (item) => {
    const newData = {...data, [item]: data[item]-1};
    if (firstData[item] === newData[item]) {
      setFieldChange({...fieldChange, [item]: null});
    } 
    setCountPoint(countPoint+1);
    setData(newData);
  };

  return (
    <div className={cl.main}>
      <Typography.Title level={4} style={{'textAlign':'center', 'color':'#C69C52'}}>Текущие характеристики персонажа:</Typography.Title>
      {fields.current.map(item=>{
        return (<Typography.Paragraph key={item.value} className={cl.param}>{item.text}: {data[item.value]}</Typography.Paragraph>)
        }
        )
      }
      <div className={cl.charapter}>
        <Typography.Title level={4} style={{'textAlign':'center', 'color':'#C69C52'}}>Характеристики игрока:</Typography.Title>
        {firstPoint!==countPoint&&<Button type='Link' className={cl.save}>Сохранить</Button>}
        {fields.player.map(item=>{
          return (<Typography.Paragraph key={item.value} className={cl.param}>
            {item.text}: <span className={!!fieldChange[item.value]?cl.changeValue:''}>{data[item.value]}</span> {item.measure} {!!fieldChange[item.value]&&<span onClick={()=>{clickMinusHandler(item.value)}} style={{fontSize:'20px'}} className={cl.btnChange}>-</span>} {(countPoint!==0&&item.isChanges)&&<span onClick={()=>{clickHandler(item.value)}} style={{fontSize:'20px'}} className={cl.btnChange}>+</span>}</Typography.Paragraph>)
          }
          )
        }
      </div>
      <Typography.Title level={4} style={{'textAlign':'center', 'color':'#C69C52'}}>Активные умения: </Typography.Title>
      {data.activeSkills.map((item,index)=>{
        return (<Typography.Paragraph key={index} className={cl.param}>{item}</Typography.Paragraph>)
      })
      }
      <Typography.Title level={4} style={{'textAlign':'center', 'color':'#C69C52'}}>Пассивные умения: </Typography.Title>
      {data.passiveSkills.map((item,index)=>{
        return (<Typography.Paragraph key={index} className={cl.param}>{item}</Typography.Paragraph>)
      })
      }
    </div>
  );
};

export default Feature;
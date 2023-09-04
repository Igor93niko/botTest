import React from 'react';
import cl from './feature.module.css';
import { Typography } from 'antd';
const data = {
    name: 'Anton',
    race: 'Эльф',
    level: '1',
    experience: '20/200',
    points: '0',
    energy: '90/100',
    cold: '541',
    power: '0 ед.',
    stamina: '0 ед.',
    agility: '0 ед.',
    atack: '6 ед.',
    defence:'1 ед.',
    health: '100/100 ед.',
    evasion: '0.0%',
    accuracy: '100%',
    criticalDamage: '10%',
    criticalDamageChance: '2%',
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
    },
    {
      value: 'stamina',
      text: 'Выносливость',
    },
    {
      value: 'agility',
      text: 'Ловкость',
    },
    {
      value: 'atack',
      text: 'Атака',
    },
    {
      value: 'defence',
      text: 'Защита',
    },
    {
      value: 'health',
      text: 'Здоровье',
    },
    {
      value: 'evasion',
      text: 'Уклонение',
    },
    {
      value: 'accuracy',
      text: 'Меткость',
    },
    {
      value: 'criticalDamage',
      text: 'Критический урон',
    },
    {
      value: 'criticalDamageChance',
      text: 'Шанс критического урона',
    },
  ],
}
const Feature = () => {
  return (
    <div className={cl.main}>
      <Typography.Title level={4} style={{'textAlign':'center', 'color':'#C69C52'}}>Текущие характеристики персонажа:</Typography.Title>
      {fields.current.map(item=>{
        return (<Typography.Paragraph key={item.value} className={cl.param}>{item.text}: {data[item.value]}</Typography.Paragraph>)
        }
        )
      }
      <Typography.Title level={4} style={{'textAlign':'center', 'color':'#C69C52'}}>Характеристики игрока:</Typography.Title>
      {fields.player.map(item=>{
        return (<Typography.Paragraph key={item.value} className={cl.param}>{item.text}: {data[item.value]}</Typography.Paragraph>)
        }
        )
      }
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
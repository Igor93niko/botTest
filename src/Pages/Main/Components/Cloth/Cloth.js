import React from 'react';
import img from './body.png';
import CharapterButton from '../CharapterButton';
import cl from './cloth.module.css';

const Cloth = () => {
  return (
    <>
      <div className={cl.charapterBody}>
          <div className={cl.charapterLeft}>
            <CharapterButton position='right'/>
            <CharapterButton position='right'/>
            <CharapterButton position='right'/>
            <CharapterButton position='right'/>
            <CharapterButton position='right'/>
            <CharapterButton position='right'/>
          </div>
          <div className={cl.charapterCenter}>
            <img src={img} className={cl.mainImage} alt='body'/>
          </div>
          <div className={cl.charapterRight}>
            <CharapterButton position='left'/>
            <CharapterButton position='left'/>
            <CharapterButton position='left'/>
            <CharapterButton position='left'/>
            <CharapterButton position='left'/>
            <CharapterButton position='left'/>
          </div>
        </div>
    </>
  );
};

export default Cloth;
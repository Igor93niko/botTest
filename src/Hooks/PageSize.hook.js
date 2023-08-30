
import {storageName} from '../Storage/Storage'; 

export const usePageSize = (name) =>{
  const pageSizeOptions= [10,20,50,100];

  const getPageSize = () => {
    const data = JSON.parse(localStorage.getItem(storageName));
    if (data&& data[name]){
      return data[name];
    }
    return pageSizeOptions[0];
  };

  const getPage = () => {
    const data = JSON.parse(localStorage.getItem(storageName));
    if (data&& data[name+'Page']){
      return data[name+'Page'];
    }
    return 1;
  };

  const changeCurrent = (page,pageSize)=>{
    let data = JSON.parse(localStorage.getItem(storageName));
    if(!!data){
      data[name]= pageSize;
      data[name+'Page']= page;
    }
    else{
      data={[name]:pageSize, [name+'Page']:page};
    }

    localStorage.setItem(storageName,JSON.stringify(data));
  }

  const changeCurrentToFirst = ()=>{
    let data = JSON.parse(localStorage.getItem(storageName));
    if(!!data){
      data[name+'Page']= 1;
    }
    else{
      data={[name+'Page']:1};
    }

    localStorage.setItem(storageName,JSON.stringify(data));
  }
  return{pageSizeOptions,getPageSize,changeCurrent,getPage,changeCurrentToFirst};
}
import {useCallback,useContext,useState} from 'react';
import { AuthContext } from '../Context/Auth.context';


export const useHttp = () =>{
  const [loading,setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {logout} = useContext(AuthContext);
  const request = useCallback(
    async(url,method = 'GET', body = null, headers ={})=>{
    setLoading(true);
    try {
      if (body){
        body = JSON.stringify(body);
        headers['Content-Type'] = 'application/json';
        headers['accept'] = 'text/plain';
      }
      const data = await fetch("https://1203503-cq93314.tw1.ru/api/"+url,{method,body,headers})
      .then(res=>{
        if(res.status===401){
          logout();
          return {};
        }
        return res.json();
      })
      .then(
        data=>{
          setLoading(false);
          return data;
        }
      );
      setLoading(false);
      return data;
    } catch (error) {
      console.log(error)
      setLoading(false);
      setError(error.message);
      throw error;
    }
    },[logout]
  );
  const clearError = useCallback(()=>setError(null),[]);
  return{loading,request,error,clearError};
}
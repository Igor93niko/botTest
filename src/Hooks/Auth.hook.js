import {useState,useCallback,useEffect} from 'react';

const storageName = 'userData';

export const useAuth = ()=>{
  const [ready, setReady] = useState(false);
  const [token,setToken] = useState(null);
  const [isAuth,setIsAuth] = useState(false);
  const [userId,setUserId] = useState(null);
  const [userName,setUserName] = useState(null);
  const login = useCallback((jwtToken,id,name)=>{
    setToken(jwtToken);
    setUserId(id);
    setIsAuth(true);
    setUserName(name);
    localStorage.setItem(storageName,JSON.stringify({userId:id,token:jwtToken,userName:name}));
  },[]);
    
  const logout = useCallback(()=>{
    setToken(null);
    setUserId(null);
    setUserName(null);
    setIsAuth(false);
    localStorage.removeItem(storageName);
  },[]);

 
  
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem(storageName));
    if (data && data.token && data.userId && data.userName){
      login(data.token,data.userId,data.userName);
    }
    setReady(true);
  },[login]);
  return {login,logout,token,userId,ready,isAuth,userName};
}
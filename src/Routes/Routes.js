import { Routes, Route } from "react-router-dom";
import ListRoutes from './Listroutes'

export const useRoutes = isAuth => {
 
  if (isAuth){
    return(
      <Routes>
        {ListRoutes.map((route,index)=>{
          return(<Route element={route.element} path={route.path} key={index}/>)
        })}
      </Routes>
    )
  }
  return(
    <Routes>
        {ListRoutes.map((route,index)=>{
          return(<Route element={route.element} path={route.path} key={index}/>)
          })}
    </Routes>
  )
}
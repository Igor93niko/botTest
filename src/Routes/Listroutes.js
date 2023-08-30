import Page404 from "../Pages/404";
import Main from "../Pages/Main";


const ListRoutes = [
  {element:<Page404/>,path:'*',private:false},
  {element:<Main/>,path:'/',private:false}
]
export default ListRoutes;
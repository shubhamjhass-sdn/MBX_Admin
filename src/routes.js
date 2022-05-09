import React from 'react'
import {  useRoutes } from 'react-router';
import AddManageUser from './components/Pages/AddManageUser';
import AddManageBrand from './components/Pages/AddManageBrand';
import Sidebar from "./components/Sidebar/index";
import DataNetProcess from './components/Pages/Data_Net_Process';
import UserProfile from './components/Pages/UserProfile';


const Router = () => {
    const routes= useRoutes([
       { element:<Sidebar/>,
        children:[
            { path: '/', element: <AddManageUser/> },
            { path: '/managebrand', element: <AddManageBrand /> },
            { path: '/datanetprocess', element: <DataNetProcess /> },
            { path: '/userprofile', element: <UserProfile /> }
        ]
     }
      ])
    
      return routes
}

export default Router


import React from 'react'
import {  useRoutes } from 'react-router';
import AddManageUser from './components/Pages/AddManageUser';
import AddManageBrand from './components/Pages/AddManageBrand';
import Sidebar from "./components/Sidebar/index";
import DataNetProcess from './components/Pages/Data_Net_Process';
import UserProfile from './components/Pages/UserProfile';
import Current_brand_value from './components/Pages/Current_Brand_Value';
import Total_value_of_platforms from './components/Pages/Total_value_of_platform';
import Brand_Distribution_list from './components/Pages/Brand_Distribution_List';
import Transaction_History from './components/Pages/Transaction_History';
import Brand_listing from './components/Pages/Brand_Listing';
import Short_seller from './components/Pages/Short Sellers';


const Router = () => {
    const routes= useRoutes([
       { element:<Sidebar/>,
        children:[
            { path: '/', element: <AddManageUser/> },
            { path: '/managebrand', element: <AddManageBrand /> },
            { path: '/datanetprocess', element: <DataNetProcess /> },
            { path: '/userprofile', element: <UserProfile /> },
            { path: '/currentbrandvalue', element: <Current_brand_value /> },
            { path: '/totalvalueofplatform', element: <Total_value_of_platforms /> },
            { path: '/branddistributionlist', element: <Brand_Distribution_list /> },
            { path: '/transactionhistory', element: <Transaction_History/>  },
            { path: '/brandlist', element: <Brand_listing /> },
            { path: '/shortseller', element: <Short_seller /> }

        ]
     }
      ])
    
      return routes
}

export default Router

